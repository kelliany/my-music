<template>
    <div class="slider" v-show="isShow">
        
    </div>
</template>
<script>
import Bus from '../../bus.js'
export default {
    name:'v-slider',
    data() {
        return {
            isShow: false
        }
    },
    
    mounted() {
        let self = this
        Bus.$on('change', function(get) {
            self.isShow = get            
        })
    }
    
}
</script>
<style lang="less">
 .slider{
     background-color: #333;
     opacity: 0.8;
     position: absolute; 
     top: 0;
     height: 100%;
     width: 60%;
     z-index: 2;
 }
</style>

