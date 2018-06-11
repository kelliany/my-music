<template>
    <div class="slider"  v-show="isShowSlider" @click.stop="closeSlider">
        <div class="slider-content" :class="{'move':isShowSlider}"  ></div>
    </div>
</template>
<script>
import Bus from '../../bus.js'
export default {
    name:'v-slider',
    data() {
        return {
            isShowSlider: false
        }
    },
    methods:{
        closeSlider() {
            this.isShowSlider = false;
        }
    },
    mounted() {
        let self = this
        Bus.$on('change', function(get) {
            self.isShowSlider = get            
        })
    }
    
}
</script>
<style lang="less">
.slider{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: width .5s;
    .slider-content{
     background-color: #333;
     opacity: 0.8;
     position: absolute; 
     top: 0;
     width: 0%;
     height: 100%;
    
     z-index: 2;
    }
    .move {
        width: 60%;
        transition: width .5s;

    }

}

 
</style>

