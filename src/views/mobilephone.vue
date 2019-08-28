<template>
  <div class="mobilephone">
    <Head></Head>
    <Navigation></Navigation>
    <el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple">
    <img src="" alt="">
    </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<Foot></Foot>
  </div>
</template>
<script>
import Foot from '@/components/foot/foot.vue';
import Head from '@/components/head/head.vue';
import Navigation from '@/components/navigation/navigation.vue';
export default {
  name: 'mobilephone',
  components:{
    Foot,Head,Navigation,
  },
};
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 466px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>