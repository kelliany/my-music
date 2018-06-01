<template>
  <div id="app">
    <Layout>  
      <Header></Header>   
      <Content></Content>
      <bottom></bottom>
    </Layout> 
    <Slider></Slider>
  </div>
</template>

<script>
import bottom from './components/bottom/bottom.vue'
import Header from './components/v-header/v-header.vue'
import Content from './components/v-content/v-content.vue'
import Slider from './components/v-slider/v-slider.vue'

export default {
  name: 'App',
  data() {
    return {
      isShow: false,
    }   
  },
  components:{
    bottom,
    Header,
    Content,
    Slider
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
</style>
