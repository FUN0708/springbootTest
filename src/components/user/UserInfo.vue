<template>
  <div>
    <edit-user-info @onSubmit="loadUsers()" ref="edit"> </edit-user-info>
    <el-table
      v-loading="loading"
      :data="users"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="员工号"
        prop="idcard">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="性别"
        prop="sex">
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="phone">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style = "display: flex; justify-content: flex-end">
      <el-pagination
        background
        layout="sizes, prev, pager, next, jumper, ->, total"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import EditUserInfo from './EditUserInfo'
export default {
  components: {EditUserInfo},
  data () {
    return {
      // users: Array(10).fill(item),
      users: [],
      search: '',
      total: 0,
      ok: false,
      loading: false // 表示正在加载列表的效果，目前是FALSE的，暂时没有添加此效果
    }
  },
  mounted: function () {
    this.loadUsers()
  },
  methods: {
    handleEdit (data) {
      this.$refs.edit.dialogFormVisible = true
      this.$refs.edit.form = {
        name: data.name,
        age: data.age,
        sex: data.sex,
        phone: data.phone,
      }
      // console.log(index, row)
    },
    handleDelete (data) {
      this.$confirm('此操作将永久删除该员工, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          this.$axios
            .post('/user/delUserInfo', {idcard: data.idcard}).then(resp => {
            if (resp && resp.data.code === 200) {
              this.loadUsers()
            }
          })
        }
      ).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    loadUsers () {
      this.$axios
        .get('/user/userInfo', {
        })
        .then(resp => {
          // console(resp.data.size())
          this.users = resp.data
          this.total = resp.data.length
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>
