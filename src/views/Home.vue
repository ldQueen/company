<template>
<div class="home">
  <div class="he_na">
      <Head></Head>
      <Navigation/>
  </div>
    <el-main style="padding:0px">
      <div>
      <el-image
      style="width: 100%"
      :src="urll"
      fit="cover"
      @click="changeNum">
      </el-image>
      </div>
      <div class="number" style="float:right;">第{{num}}张/共{{images.length}}张</div>
    </el-main>
    <div class="deep">
      <Foot></Foot>
    </div>
</div>
</template>
<script>
import { mapState} from 'vuex';
import Foot from '@/components/foot/foot.vue';
import Head from '@/components/head/head.vue';
import Navigation from '@/components/navigation/navigation.vue';
export default{
  name: 'home',
  data() {
    return {
      url: this.urll,
    }
  },
  components: {
    Foot, Head, Navigation,
  },
  computed: {
    ...mapState({
      images: state => state.home.imgList,         
      num: state => state.home.num,
      urll: state => state.home.url,
    }),
  },
  created() {
   
  },
  methods: {
    changeImg() {
      this.$store.dispatch('home/changeImg');
    },
    changeNum(){
      console.log(this.urll);
      this.$store.dispatch('home/changeNum');
      this.changeImg();
    }
  }
}

</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.he_na{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 300;
}
.el-image{
  display: inline;
  position: fixed;
  top: 166px;
}

.number{
  position: fixed;
  top:200px; right:50px;
  font-size: 18px;
  color: rgb(17, 158, 59);
  z-index: 200px;
}
.deep{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

