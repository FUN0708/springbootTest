<template>
<!--  <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->
  <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
    <el-form :model="form" style="margin-left: 30px; margin-right: 120px">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" :label-width="formLabelWidth">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话号码" :label-width="formLabelWidth">
        <el-input type="text" v-model="form.phone"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-right: 40%">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'EditUserInfo',
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        age: '',
        sex: '',
        phone: ''
      }
    }
  },
  methods: {
    onSubmit() {},
  }
}
</script>

<style scoped>

</style>
