<template>
  <div class="container">
    <div class="login-container">
      <h1>腾科超市账单管理系统</h1>
      <div class="form-container">
        <div class="form-item">
          <label for="username">用户名：</label>
          <input id="username" v-model="username" type="text">
          <div v-show="rules.username" class="tips-container">用户名不可以为空</div>
        </div>
        <div class="form-item">
          <label for="password">密码：</label>
          <input
                  id="password"
v-model="password"
                 type="password"
                 @keyup.enter="handleSubmit"
          >
          <div v-show="rules.password" class="tips-container">密码不可以为空</div>
        </div>
        <div class="button-container">
          <button @click="handleSubmit">登陆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import types from '@/store/types';
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
        rules: {
          username: false,
          password: false
        }
      };
    },
    methods: {
      validate () {
        if (this.username === '') {
          this.rules.username = true;
        }
        if (this.password === '') {
          this.rules.password = true;
        }
        if (this.username !== '' && this.password !== '') {
          this.rules.username = false;
          this.rules.password = false;
          return true;
        } else {
          return false;
        }
      },
      handleSubmit () {
        if (this.validate()) {
          this.login();
        }
      },
      login () {
        this.$store.dispatch(types.LOGIN, {
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.push('/welcome');
        });
      }
    }
  };
</script>

<style lang="css" scoped>
  .container {
    height: 100vh;
    width: 100%;
    background: url(../../assets/banner_cn.jpg) no-repeat center top;
    background-size: cover;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    min-height: 100vh;
  }

  .login-container {
    color: #fff;
    height: 500px;
    width: auto;
    /* background-color: #fff; */
    position: absolute;
    top: 190px;
    left: 188px;
  }
  .login-container p {
    font-size: 36px;
    padding-left: 590px;
    position: relative;
  }
  .login-container p::before {
    content: "";
    position: absolute;
    height: 6px;
    width: 170px;
    background-color: #fff;
    left: 396px;
    top: 50%;
    margin-top: -3px;
  }
  .login-container h1 {
    font-size: 60px;
    margin-left: 70px;
    margin-top: 26px;
  }
  .login-container::before {
    content: "";
    position:absolute;
    height: 600px;
    width: 14px;
    background-color: #eb827f;
    left: 0;
  }
  .form-container {
    margin-top: 100px;
    margin-left:  70px;
    width: auto;
  }
  .form-item {
    width: 100%;
    margin-bottom: 20px;
    height: 65px;
  }
  .form-item input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #fff;
    padding: 2px 10px;
    width: 300px;
    font-size: 18px;
    outline: none;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .form-item label {
    display: inline-block;
    width: 100px;
    font-size: 20px;
    text-align: right;
    margin-right: 10px;
    color: #fff;
  }
  .button-container {
    width: 192px;
    height: 48px;
    text-align: center;
    margin-left: 450px;
    margin-top: 72px;
  }
  .button-container button {
    height: 100%;
    width: 100%;
    font-size: 18px;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
  }
  /* 登陆提示 */
  .tips-container {
    font-size: 14px;
    font-weight: 600;
    color: #ed4014;
    margin: 10px 0 0 112px;

  }
</style>
