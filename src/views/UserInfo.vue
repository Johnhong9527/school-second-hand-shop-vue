<template>
  <div class="infoshow">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="user">
          <img
            src="http://www.gravatar.com/avatar/93e9084aa289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
            class="avatar"
            alt
          />
          <div class="user-item">
            <i class="el-icon-user-solid"></i>&nbsp;
            <span>username</span>
          </div>
            <div class="user-item">
            <i class="el-icon-user-solid"></i>&nbsp;
            <span>email</span>
          </div>
          <div class="user-item">
            <i class="el-icon-user-solid"></i>&nbsp;
            <span>超级管理员</span>
          </div>
        </div>
      </el-col>
      <el-col :span="16" class="content"></el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style scoped>
.infoshow {
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  overflow: hidden;
  /* padding: 16px; */
}
.row-bg {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 10%;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}

.content {
  height: 100%;
  background-color: #eee;
}
</style>
