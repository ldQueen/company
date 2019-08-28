<template>
  <div>
      <el-footer style="height:330px;padding-left:130px;">
    <div class="foot" style="padding-top:30px">
      <div class="logo">
        <img
          src="../../assets/images/QR_code.png"
          alt
          style="width:200px;height:200px;margin-top:20px"
        />
      </div>
      <div class="model">
        <ul>
          <span>关于我们</span>
          <li>
            <router-link to="/company_porfile">公司简介</router-link>
          </li>
          <li>
            <a href>企业文化</a>
          </li>
          <li>
            <a href>业务范围</a>
          </li>
        </ul>
      </div>
      <div class="model">
        <ul>
          <span>主要产品</span>
          <li>
            <a href>手机</a>
          </li>
          <li>
            <a href>电脑</a>
          </li>
          <li>
            <a href>手表</a>
          </li>
        </ul>
      </div>
      <div class="model">
        <ul>
          <span>资源</span>
          <li>
            <a href>百度</a>
          </li>
          <li>
            <a href>天使</a>
          </li>
        </ul>
      </div>
      <div class="model">
        <ul>
          <span>联系我们</span>
          <li>
            <a href>公司位置</a>
          </li>
          <li>
            <a href>客户联系</a>
          </li>
          <li>
            <a href>投资联系</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <el-divider></el-divider>
      <span>加入我们  |  版权所有  @myself</span>
    </div>
    </el-footer>
  </div>
</template>
<script>
export default {
  name: 'Foot',
};
</script>
<style>
.foot {
  display: flex;
  flex-wrap: nowrap;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #000;
}
.logo {
  display: flex;
  flex-direction: column;
  margin-right: 130px;
}
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 35px;
  }
  .model{
    padding: 0 45px;
  }
</style>
