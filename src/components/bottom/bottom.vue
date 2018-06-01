<template>
    <div id="bottom">
        <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg" alt="">
        <div class="song-play-name">
            <div class="label">小酒窝</div>
            <div>林俊杰、蔡卓妍</div>
        </div>
        <div class="button-combin">
            <Icon type="play" size="24"></Icon>
            <Icon @click.native.stop="toggleShowlist" type="ios-list-outline" size="24"></Icon>
        </div>
        <div class="play-list" v-show= isShow v-clickOutside="handleClose">
            <div class="title">
                <div class="play-list-name">
                    <Icon type="loop" size="24"></Icon>
                    <span>顺序播放</span>
                </div>
                <div class="right">
                    <div class="star">
                        <Icon type="plus-round" size="24"></Icon>
                        <span>收藏</span>
                    </div>
                    <div class="delete">
                        <Icon type="trash-a" size="24"></Icon>
                        <span>删除</span>
                    </div>
                </div>
            </div>
            <div class="list-content">
                <ul>
                    <li>
                        <Icon type="ios-volume-high" size="24"></Icon>
                        <span>小酒窝-林俊杰,蔡卓妍</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    const clickOutside = {
        //初始化指令
        bind(el,binding,vnode) {
            function documentHandler(e){
                //判断点击的元素是否是本身，是本身则返回
                if(el.contains(e.target)) {
                    return false
                }
                //判断指令中是否绑定了函数
                if(binding.expression) {
                    //如果绑定了函数，则调用函数，此处binding.value就是handleClose方法
                    binding.value(e)
                }
            }
            //给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
            el.__vueClickOutside__ = documentHandler
            document,addEventListener('click', documentHandler)
        },
        update() {},
        unbind(el,bind) {
            //解除事件监听
            document.removeEventListener('click', el.__vueClickOutside__)
            delete el.__vueClickOutside__
        }
        
    }

    export default {
        name : 'bottom',
        data() {
            return{
                isShow: false
            }
            
        },
        directives: {clickOutside},
        methods: {
            toggleShowlist: function(e){
                this.isShow = !this.isShow
            },
            handleClose(e) {
                this.isShow = false
            }
        }
    }
</script>
<style lang="less">
#bottom{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
}
img{
    width: 36px;
    height: 36px;
    margin:5px;
}
.label {
    text-align: left;
}
.song-play-name{
    padding:5px;
    .label;
    flex: 1 1 auto;
}
.button-combin{
    padding-top:12px;
}
.button-combin .ivu-icon{
    margin: 0 10px;
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
.list-content {
    ul li{
        height: 50px;
        line-height: 50px;
        text-align: left;
        padding-left: 10px;
    }
}
</style>
