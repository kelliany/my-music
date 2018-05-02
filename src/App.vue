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
           <div class="search">
             <Icon type="ios-search-strong" size="30" color="white"></Icon>
           </div>
           
         </div>
      </Header>
      <Content>
        <div class="menu-list">
          <ul>
            <li>
              <Icon type="headphone" size="20"></Icon>
              <div class="menu-name">我的音乐</div>
            </li>
            <li>
              <Icon type="clock" size="20"></Icon>
              <div class="menu-name">最近播放</div>
            </li>
            <li>
              <Icon type="radio-waves" size="20"></Icon>
              <div class="menu-name">我的电台</div>
            </li>
            <li>
              <Icon type="ios-star" size="20"></Icon>
              <div class="menu-name">我的收藏</div>
            </li>
          </ul>
        </div>
        <div class="music-list">
          <ul>
            
          </ul>
        </div>
      </Content>
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
  width: 8%;
 
}
.menu {
  float: left;
  padding-top: 5px;
  width: 84%;
}
.menu i {
  margin: 0 20px;
}

.search {
  float: left;
  padding-top: 5px;
  width: 8%;
  
}
.ivu-layout-content {
  position: fixed;
  top: 64px;
  bottom: 48px;
  width: 100%;
}
.menu-list li {

  text-align: left;
  font-size: 14px;
  list-style-type: none;
  position: relative;
  
}
.menu-list li .ivu-icon {
  padding: 10px;
  position: absolute;
  left: 0;
}

.menu-list li .menu-name {
  
  padding: 10px 0;
  margin-left: 40px;
  border-bottom:1px solid #E7E8E8;
}

.ivu-layout-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>
