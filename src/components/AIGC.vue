<template>
  <Header/>
    <div class="chat-container">
      <!-- 聊天窗口标题栏 -->
      <div class="chat-header">AI问答机器人</div>
  
      <!-- 聊天记录区域 -->
      <div class="chat-messages" ref="messagesContainer">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="{
            'message-row': true,
            'user-message': message.fromUser,
            'bot-message': !message.fromUser,
          }"
        >
          <div
            :class="{
              'message-bubble': true,
              'user-bubble': message.fromUser,
              'bot-bubble': !message.fromUser,
            }"
          >
            <div class="message-text">{{ message.text }}</div>
          </div>
        </div>
      </div>
  
      <!-- 输入框和发送按钮 -->
      <div class="chat-input">
        <input v-model="inputText" placeholder="请输入您的问题"></input>
        <ebutton @click="sendMessage" type="primary">发送</ebutton>
        <button @click="clearInput" type="text">清空</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, onMounted, nextTick, getCurrentInstance } from "vue";
  import Header from "../components/Header.vue";

  export default {
    props: {
      botAvatar: String,
      botName: String,
    },
    components:{
        Header
    },
    setup(props) {
      const inputText = ref("");
      const messages = ref([]);
      const messagesContainer = ref(null);
      const formInline = reactive({});
      const backText = ref();
      const $http = getCurrentInstance().appContext.config.globalProperties.$http;
  
      function sendMessage() {
        if (inputText.value) {
          // 向消息列表中添加用户发送的消息
          messages.value.push({
            id: Date.now(),
            text: inputText.value,
            fromUser: true,
          });
          nextTick(() => {
            scrollToBottom();
          });
          // 发送用户输入的消息到后端，并等待机器人的回复
          sendToBackend(inputText.value).then((reply) => {
            // 将机器人的回复添加到消息列表中
            messages.value.push({
              id: Date.now() + 1,
              text: reply,
              fromUser: false,
            });
  
            nextTick(() => {
              scrollToBottom();
            });
          });
        }
      }
  
      async function sendToBackend(input) {
        inputText.value = "";
        return new Promise((resolve, reject) => {
          $http.get(`http://192.168.85.117:9999/chat?content=${input}`, formInline)

            .then((res) => {
              console.log(res);
              backText.value = res;
              resolve(backText.value);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
  
      function clearInput() {
        inputText.value = "";
      }
  
      onMounted(() => {
        // 滚动聊天记录到底部
        scrollToBottom();
      });
  
      function scrollToBottom() {
        if (messagesContainer.value) {
          messagesContainer.value.scrollTo(
            0,
            messagesContainer.value.scrollHeight
          );
        }
      }
  
      return {
        inputText,
        messages,
        messagesContainer,
        sendMessage,
        clearInput,
      };
    },
  };


  </script>
  
  <style scoped>
  .chat-container {
    margin: 0 445px 0 445px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 630px;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .chat-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #f0f0f0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
  }
  
  .message-row {
    display: flex;
    margin-bottom: 10px;
  }
  
  .user-message .message-bubble {
    background-color: #e2f0cb;
    margin-left: auto;
  }
  
  .bot-message .message-bubble {
    background-color: #d9e1f1;
    margin-right: auto;
  }
  
  .message-bubble {
    display: inline-block;
    max-width: 70%;
    padding: 8px 12px;
    border-radius: 8px;
  }
  
  .user-bubble .message-text {
    text-align: right;
  }
  
  .bot-bubble .message-text {
    text-align: left;
  }
  
  .message-text {
    font-size: 16px;
    line-height: 1.5;
  }
  
  .chat-input {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
  }
  
  .chat-input input {
    flex-grow: 1; /* 使输入框占据剩余空间 */
    padding: 12px; /* 增加输入框的高度 */
    border-radius: 4px; /* 圆角边框 */
    border: 1px solid #ccc; /* 边框 */
    margin-right: 10px; /* 与发送按钮之间的间距 */
  }
  
  .chat-input button {
    padding: 8px 15px; /* 增加按钮的填充 */
    border-radius: 4px; /* 圆角边框 */
    border: none; /* 无边框 */
    cursor: pointer; /* 鼠标指针变为手形 */
    margin-left:10px;
  }
  
  .chat-input button[type="primary"] {
    background-color: #007bff; /* 主按钮背景色 */
    color: white;
  }
  
  .chat-input button[type="text"] {
  background-color: #d9e1f1; /* 清空按钮背景色 */
  color: #495057; /* 文字颜色 */
}
  </style>