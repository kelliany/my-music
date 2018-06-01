<template>
    <div class='header'>
        <div class="slider-icon">
            <Icon  type="navicon-round" size="20" color="white" @click.native="showSliderMenu"></Icon>
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
</template>
<script>
    import Bus from '../../bus.js'
    export default {
        name:'v-header',
        methods: {
            showSliderMenu: function() {
                Bus.$emit('change','xx')
            }
        }
    }
</script>
<style lang="less">
.header {
  background: #C62F2F;
  padding: 0;
  height: 60px;
  line-height: 60px;
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
</style>
