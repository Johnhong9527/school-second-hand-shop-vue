<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的账号</template>
        <el-menu-item index="2-1">个人信息</el-menu-item>
        <el-menu-item index="2-2">我的收藏</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">我发布的</template>
          <el-menu-item index="2-4-1">售卖</el-menu-item>
          <el-menu-item index="2-4-2">求购</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
