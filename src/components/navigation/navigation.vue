<template>
<div class="nav" style="margin-top:16px;">
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#b3c0d1"
  text-color="#fff"
  active-text-color="#ffd04b"
  >
  <el-submenu index="1">
    <template slot="title">关于我们</template>
    <el-menu-item index="1-1"><router-link to="/company_porfile">公司简介</router-link></el-menu-item>
    <el-menu-item index="1-2"><router-link to="/company_porfile">企业文化</router-link></el-menu-item>
    <el-menu-item index="1-3"><router-link to="/company_porfile">业务范围</router-link></el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">主要产品</template>
    <el-menu-item index="2-1"><router-link to="/mobilephone">手机</router-link></el-menu-item>
    <el-menu-item index="2-2"><router-link to="/company_porfile">电脑</router-link></el-menu-item>
    <el-menu-item index="2-3"><router-link to="/company_porfile">手表</router-link></el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">投资者</template>
    <el-menu-item index="3-1"><a href="https://www.baidu.com/">百度</a></el-menu-item>
    <el-menu-item index="3-2"><a href="http://www.preangelfund.cn/">天使</a></el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">联系我们</template>
    <el-menu-item index="4-1"><router-link to="/company_porfile">公司位置</router-link></el-menu-item>
    <el-menu-item index="4-2"><router-link to="/company_porfile">客户联系</router-link></el-menu-item>
    <el-menu-item index="4-3"><router-link to="/company_porfile">投资联系</router-link></el-menu-item>
  </el-submenu>
</el-menu>
</div>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
};
</script>
<style ang="scss">
*{
  margin: 0;
  padding: 0;
}
  .el-submenu__title{
    padding: 0 60px;
  }
</style>