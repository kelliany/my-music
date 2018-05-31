<template>
  <div id="app">
    <Layout>  
      <Header></Header>   
      <VContent></VContent>
      <bottom></bottom>
    </Layout>   
  </div>
</template>

<script>
import bottom from './components/bottom/bottom.vue'
import Header from './components/v-header/v-header.vue'
import VContent from './components/v-content/v-content.vue'
export default {
  name: 'App',
  data() {
    return {
      show:'',
    }   
  },
  components:{
    bottom,
    Header,
    VContent
  },
  methods: {
    changeShow: function(show){
      return this.show
    }
  }  
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-layout-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
#bottom {
  position: fixed;
  height: 46px;
  bottom: 0;
  width:100%
}
.play-list{
  position: fixed;
  bottom: 0;
  // z-index: 100;
  font-size: 14px;
  background-color: #fff;
  opacity: 0.8;
  width: 100%;
}
.play-list {
  .title{
    width: 100%;
    height:50px;
    .play-list-name{
      display: inline-block;
      line-height: 50px;
      padding: 0 10px;
    }
    .right{
      float: right;
      margin-right: 10px;
      .star, .delete{
        .play-list-name;
      }
    }
  }
 
}

</style>
