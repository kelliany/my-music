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
              <div class="menu-name">
                <span>我的音乐</span>
                <span>(28)</span>
                <Icon type="ios-volume-high" class="right" size="24"></Icon>
              </div>
            </li>
            <li>
              <Icon type="clock" size="20"></Icon>
              <div class="menu-name">
                <span>最近播放</span>
                <span>(10)</span>
              </div>
            </li>
            <li>
              <Icon type="radio-waves" size="20"></Icon>
              <div class="menu-name">
                <span>我的电台</span>
                <span>(15)</span>
              </div>
            </li>
            <li>
              <Icon type="ios-star" size="20"></Icon>
              <div class="menu-name">
                <span>我的收藏</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="music-list">
          <ul>
            <li>
              <Icon type="ios-arrow-right" size="24"></Icon>
              <div class="list-detail">
                <span>我创建的歌单</span>
                <Icon v-on:click="showList" type="ios-gear-outline"  class="right" size="20"></Icon>
              </div>
            </li>
            <li>
              <Icon type="ios-arrow-right" size="24"></Icon>
              <div class="list-detail">
                <span>我收藏的歌单</span>
                <Icon type="ios-gear-outline"  class="right" size="20"></Icon>
              </div>
            </li>
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
.menu-list li .menu-name .right {
  position: absolute;
  right: 10px;
  top: 0;
  left:auto;  
}
.music-list li {
  background: #E1E1E1;
  position: relative;
}
.music-list li .ivu-icon {
  position: absolute;
  left: 10px;
  top: 2px;
}
.music-list .list-detail {
  padding: 5px 0;
  margin-left: 30px;
  text-align: left;
}
.music-list li .list-detail .right {
  position: absolute;
  right: 10px;
  top: 4px;
  left:auto;  
}

.ivu-layout-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}



</style>
