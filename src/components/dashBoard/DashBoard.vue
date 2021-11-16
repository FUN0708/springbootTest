<template>
  <div id="app" style="height: 100%">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="'/home/indexImg'"
                 router
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 menu-trigger="click">
          <el-menu-item index="/home/indexImg" >
            <span style="float: left;margin-left: 20%"><i class='el-icon-s-home'></i>首页</span>
          </el-menu-item>
          <el-submenu v-for="(item, index) in this.$router.options.routes"
                      :index="index"
                      :key="index" v-if="!item.hidden">
            <template slot="title" >
              <i :class="item.meta.icon" style="float: left; margin-left: 20%; margin-top: 10%"></i>
<!--              <span>{{item.meta.title}}</span>-->
              <span style="float: left;">
               {{ item.name }}

              </span>
            </template>
            <el-menu-item :index="children.path" v-for="(children,index1) in item.children" v-if="!children.hidden">
              <template slot="title" style="float: left">{{children.name}}</template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 15px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>pangqiaofun</span>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
<script>
export default {
  name: 'DashBoard',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
