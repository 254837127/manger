<template>
  <div class="loginContent">
    <el-card class="box-card">
      <div class="loginTitle">账号登录</div>
      <el-form ref="form1" :model="form1">
        <el-input placeholder="请输入账号" v-model="form1.name" style="margin-top: 20px;">
          <div slot="suffix" class="suffixClass">@163.com</div>
        </el-input>
        <el-input placeholder="请输入密码" type="password" v-model="form1.password" style="margin-top: 20px;">
          <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick">
          </i>
        </el-input>
        <el-form-item style="margin-top: 20px;">
          <el-button type="primary" @click="onSubmit('form1')" style="width: 45%;">登录</el-button>
          <el-button style="width: 45%;" @click="jump">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import router1 from '@/util/menu'
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  props: {
    msg: String
  },
  data() {
    return {
      form1: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.form1.name === 'zs' && this.form1.password === '123456') {
        this.setDtRouterAction({
          dtRouter: router1
        })
        console.log(router1[0].children[0])
        const router = router1[0]?.children[0]
        this.$router.replace({ name: router.name })
      } else {
        console.log(this.$router)
      }
    },
    handleIconClick() {
    },
    jump() {
      console.log(this.$route)
    },
    ...mapActions(['setDtRouterAction'])
  }
}
</script>

<style scoped>
.loginContent {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  background-image: url('../assets/fengjing.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

.box-card {
  width: 400px;
  margin-right: 80px;
}

.loginTitle {
  padding: 48px 0 0;
  color: #141414;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
}

.suffixClass {
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  color: #666;
  font-size: 16px;
}
</style>
