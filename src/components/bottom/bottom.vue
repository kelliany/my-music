<template>
    <div id="bottom">
        <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg" alt="">
        <div class="song-play-name">
            <div class="label">小酒窝</div>
            <div>林俊杰、蔡卓妍</div>
        </div>
        <div class="button-combin">
            <Icon type="play" size="24"></Icon>
            <Icon @click.native="toggleShowlist" type="ios-list-outline" size="24"></Icon>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'bottom',
        data() {
            return{
                show: true
            }
            
        },
        methods: {
            toggleShowlist: function(){
                this.show = true
                this.$emit('changeShow',this.show)
            }
        }
    }
</script>
<style lang="less">
#bottom{
    display: flex;
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
</style>
