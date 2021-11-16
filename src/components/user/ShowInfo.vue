<template>
  <div style="width: 60%; margin-left: 20%; height: 500px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
  <el-card style="height: 100%;">
    <div slot="header" class="clearfix">
      <p style="float: left; font-size: 20px">用户信息查询</p>
      <el-button style="float: right;margin-top: 20px" type="primary" v-on:click="show">查询</el-button>
      <el-input v-model="user.name"  auto-complete="off" type="text" style="float: right;margin-top: 20px; margin-right: 10px; width: 200px"></el-input>
    </div>
    <div>
    <ul >
      <li v-for="(value, key) in user" style="margin-top: 15px">
       {{key}}: {{ value }}
      </li>
    </ul>
    </div>
  </el-card>
  </div>
</template>
<script>
export default {
  name: 'ShowInfo',
  data () {
    return {
      // user: '',
      user: {
        id: '',
        name: '',
        age: '',
        phone: '',
        sex: ''
      }
    }
  },
  methods: {
    show () {
      this.$axios
        .post('/user/showInfo', {
          name: this.user.name
        })
        .then(resp => {
          this.user.age = resp.data.age
          this.user.id = resp.data.idcard
          this.user.phone = resp.data.phone
          this.user.sex = resp.data.sex
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}
</style>
