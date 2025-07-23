<template>
  <div class="login">
      <div class="content">
          <h3>欢迎注册</h3>
          <form @submit.prevent="submitForm">
              <div class="form-item">
                  <label for="username">用户名：</label>
                  <input type="text" id="username" v-model="ruleForm.username" placeholder="请输入用户名" required />
              </div>
              <div class="form-item">
                  <label for="password">密码：</label>
                  <input type="password" id="password" v-model="ruleForm.password" placeholder="请输入密码" required />
              </div>
              <div class="form-item">
                  <label for="checkPass">确认密码：</label>
                  <input type="password" id="checkPass" v-model="ruleForm.checkPass" placeholder="请确认密码" required />
              </div>
              <div class="form-item">
                  <button type="submit" class="login-button">登录</button>
              </div>
          </form>
      </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const ruleForm = reactive({
  username: '',
  password: '',
  checkPass: ''
});

const submitForm = () => {
  const usernameRegex = /^[a-zA-Z0-9_-]{2,10}$/;

  if (!ruleForm.username || !usernameRegex.test(ruleForm.username)) {
      alert("请输入2-10个字符的用户名");
      return;
  }

  if (ruleForm.password !== ruleForm.checkPass) {
      alert("请输入和密码一致的确认密码");
      return;
  }

  alert("注册成功");
  router.push("/login");
  // 这里可以添加登录成功的前端逻辑，例如跳转到另一个页面或显示用户信息
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  min-height: 100vh;
  background-color: #409EFF;
  position: relative;
  background: url("../image/LoginBackgroundImg.jpeg") no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
      width: 400px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 30px;
      box-sizing: border-box;

      h3 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
      }
      .form-item {
          margin-bottom: 20px;
          label {
              display: block;
              margin-bottom: 5px;
              color: #555;
          }
          input {
              width: 93%;
              padding: 12px;
              border: 1px solid #ccc;
              border-radius: 5px;
              transition: border-color 0.3s;
              &:focus {
                  border-color: #409EFF;
              }
              &[type="submit"] {
                  background-color: #409EFF;
                  color: white;
                  border: none;
                  cursor: pointer;
                  transition: background-color 0.3s;
                  &:hover {
                      background-color: darken(#409EFF, 10%);
                  }
              }
          }
      }
  }
}
button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
 
button:hover {
  background-color: #0056b3;
}
 
p {
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  color: #007bff;
}
 
p:hover {
  text-decoration: underline;
}
button {
        background-color: #4CAF50; 
        color: white; 
        border:none;
        padding: 10px 20px; 
        text-align: center; 
        text-decoration: none; 
        display: inline-block; 
        font-size: 16px; 
        margin: 4px 2px; 
        cursor: pointer; 
        border-radius: 5px; 
        &:hover {
            background-color: #45a049; 
        }
    }
</style>