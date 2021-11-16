<template>
     <div>
       <p>用户统计</p>
       <div>
         <el-card style="width: 45%;float: left">
           <span>用户性别统计</span>
           <div>
             <UserSexPieCount></UserSexPieCount>
           </div>
         </el-card>
         <el-card style="width: 45%;float: right">
           <span>数量统计</span>
           <div>
             <UserSexPieCount></UserSexPieCount>
           </div>
         </el-card>
       </div>
     </div>
</template>

<script>
import UserSexPieCount from '../countData/UserSexPieChart'
export default {
  components: {UserSexPieCount}
}
</script>
