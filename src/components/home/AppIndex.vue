<template>
  <el-main>
  <div style="margin-left: 15%">
    <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="show">查询</el-button>
<!--    <p>{{ msg }}</p>-->
    <el-form>
      <el-input type="text" v-model="username"></el-input>
      <el-form-item>{{type}}</el-form-item>
<!--      <el-label>{{password}}</el-label>-->
    </el-form>
  </div>
  </el-main>
</template>

<script>
export default {
  name: 'AppIndex',
  data () {
    return {
      type: '',
      username: ''
    }
  },
  methods: {
    show () {
      this.$axios
        .post('/index', {
          username: this.username
          // msg: this.msg
        })
        .then(resp => {
          this.type = resp.data
          // this.price = resp.data.price
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>

</style>
