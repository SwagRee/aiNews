<template>
    <Header/>
  <div class="message wrap" style="margin: 0 460px 0 460px">
    
    <!-- 留言板 -->
    <h3>留言板</h3>
    <input
      class="textarea"
      v-model="textarea"
      placeholder="Please input"
    />
    <div>
      <button type="button" @click="relase">留言</button>
    </div>
    <!-- 留言列表 -->
    <div class="msg-list">
      <div class="list" v-for="item in msgList" :key="item.id">
        <div class="crile"></div>
        <div class="line"></div>
        <div class="content">
          <!-- <span class="date">{{ formatDate(item.date) }}</span> -->
          <div class="card" v-for="item2 in item.list" :key="item2.id">
            <p>{{ item2.message }}</p>
            <div>
              <!-- <b>{{ item2.createdUser }}</b>发表于<span>{{ formatDate(item2.relaseTime) }}</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref, reactive } from "vue";
  import Header from '../components/Header.vue'

    components:{
        Header
    }
//   import { formatDate } from "@/assets/ts/utils"
  
  // 文本域内容
  const textarea = ref("");
  // 留言列表
  const msgList = ref([
      {
          id: 1,
          date: new Date(),
          list: [
              {
                  id: 2,
                  message: "留言111111111111",
                  createdUser: "张三",
                  relaseTime: new Date()
              },
              {
                  id: 3,
                  message: "留言2222",
                  createdUser: "张三",
                  relaseTime: new Date()
              }
          ]
      },
      {
          id: 4,
          date: new Date(),
          list: [
              {
                  id: 5,
                  message: "留言111111111111",
                  createdUser: "张三",
                  relaseTime: new Date()
              },
              {
                  id: 6,
                  message: "留言2222",
                  createdUser: "张三",
                  relaseTime: new Date()
              }
          ]
      },
      {
          id: 7,
          date: new Date(),
          list: [
              {
                  id: 8,
                  message: "留言111111111111",
                  createdUser: "张三",
                  relaseTime: new Date()
              }
          ]
      },
  ])
  let id = 1000
  // 点击留言按钮
  const relase = () => {
      msgList.value.push({
          id: msgList.value[msgList.value.length-1].id + 1,
          date: new Date(),
          list: [
              {
                  id: id++,
                  message: textarea.value,
                  createdUser: "李四",
                  relaseTime: new Date()
              }
          ]
         
      })
  }
  
  
  </script>
<style lang="less" scoped>

.message {
    .textarea {
        margin: 10px 0;
        padding: 8px; // 增加内边距
        border: 1px solid #cccccc; // 添加边框
        width: calc(100% - 22px); // 调整宽度以适应边框
        box-sizing: border-box; // 确保宽度包括边框
    }
    button {
        background-color: #4CAF50; // 更改按钮背景色
        color: white; // 文字颜色为白色
        border: none; // 移除边框
        padding: 10px 20px; // 增加内边距
        text-align: center; // 文字居中
        text-decoration: none; // 移除文本装饰
        display: inline-block; // 行内块显示
        font-size: 16px; // 字体大小
        margin: 4px 2px; // 调整外边距
        cursor: pointer; // 鼠标指针变为手形
        border-radius: 5px; // 边角圆滑
        &:hover {
            background-color: #45a049; // 悬停时的背景色
        }
    }
    .msg-list {
        padding: 20px;
        .list {
            position: relative;
            .crile {
                position: absolute;
                left: -20px;
                top: 10px;
                width: 10px;
                height: 10px;
                background-color: #cccccc;
                border-radius: 50%;
            }
            .line {
                width: 2px;
                height: 100%;
                background-color: #cccccc;
                position: absolute;
                left: -15px;
                top: 20px;
            }
            &:last-of-type {
                .line {
                    display: none;
                }
            }
        }
        .content {
            .date {
                font-size: 12px;
            }
            .card {
                padding: 10px 10px 5px 10px;
                border: 1px solid #cccccc;
                border-radius: 5px;
                box-shadow: 0 0 10px #cccccc;
                margin-bottom: 10px;
                div {
                    display: flex;
                    justify-content: end;
                    font-size: 12px;
                    b {
                        color: #F56C6C;
                        margin-right: 3px;
                    }
                    span {
                        margin-left: 3px;
                    }
                }
            }
        }
    }
}
</style>