<template>
<div>
<el-header style="background-color: white;">
  <div class="head" style="padding-left:200px;">
    <div>
       <img  src="../../assets/images/logo.png" alt="" style="width:200px;height:50px;">
    </div>
    <div style="margin-left:300px;">
     <el-input
    placeholder="公司相关业务查询"
    suffix-icon="el-icon-search"
    v-model="input"
    style="width:260px">
  </el-input>
    </div>
  </div>
  </el-header>
</div>
</template>
<script>
export default {
  name: 'Head',
  data(){
    return{
      input:''
    }
  }
};
</script>
<style scope="this api replaced by slot-scope in 2.5.0+">
.head{
  display: flex;
  margin-top:30px;
}
</style>
