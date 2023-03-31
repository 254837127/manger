<template>
  <el-card shadow="hover" :body-style="{ padding: '15px 0' }">
    <div class="contextDiv">
      <i :class="icon" :style="{color: iconColor}"></i>
      <span :style="{color: textColor}">{{ name }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      default: '#409EFF'
    },
    textColor: {
      type: String,
      default: '#666666'
    }
  }
}
</script>

<style scoped lang="less">
.contextDiv {
  display: flex;
  flex-direction: column;

  i {
    font-size: 30px;
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    height: 16px;
    line-height: 16px;
  }
}
</style>
