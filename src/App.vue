<template>
  <div id="app">
    <Layout>
      <Header>
         <div class='header'>
           <div class="slider-icon">
             <Icon  type="navicon-round" size="20" color="white"></Icon>
           </div>
           <div class="menu">
             <Icon type="ios-musical-notes" size="30" color="white"></Icon>
             <Icon type="disc" size="30" color="white"></Icon>
             <Icon type="person" size="30" color="white"></Icon>
           </div>
           
         </div>
      </Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-layout-header {
  background: #C62F2F;
  padding: 0;
}
.slider-icon {
  float: left;
  display: inline;
  margin-left: 20px;
}
.menu {
  padding-top: 5px;
}
.menu i {
  margin: 0 20px;
}

</style>
