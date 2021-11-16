<template>
  <div style="width: 60%; margin-left: 20%; height: 500px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)" >
<el-form ref="form" :model="form" label-width="120px" style="margin-right: 20px" >
    <h3 style="margin: 20px">添加用户信息</h3>
<el-form-item label="姓名">
  <el-input v-model="form.name"></el-input>
</el-form-item>

<el-form-item label="年龄">
  <el-input v-model="form.age"></el-input>
</el-form-item>
<el-form-item label="请选择性别">
  <el-radio-group v-model="form.sex">
    <el-radio label="男"></el-radio>
    <el-radio label="女"></el-radio>
  </el-radio-group>
</el-form-item>
<el-form-item label="电话号码">
  <el-input type="text" v-model="form.phone"></el-input>
</el-form-item>
<el-form-item>
  <el-button type="primary" @click="onSubmit">保存</el-button>
<!--  <el-button>取消</el-button>-->
</el-form-item>
</el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        sex: '',
        age: '',
        phone: '',
      }
    }
  },
  methods: {
    onSubmit () {
      this.$axios
        .post('/user/userDetail', {
          name: this.form.name,
          age: this.form.age,
          sex: this.form.sex,
          phone: this.form.phone,
        })
        .then(resp => {
          if (resp.data.code === 200) {
            this.$alert(resp.data.message, '提示', {
              confirmButtonText: '确定'
            })
          } else {
            this.$alert(resp.data.message, '提示', {
              confirmButtonText: '确定'
            })
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>
