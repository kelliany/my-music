<template>
    <div class="slider" v-show="isShow">
        hello
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
    methods: {
        mounted() {
            Bus.$on('change', function(get) {
                console.log(get)
            })
        }
    }
}
</script>
<style lang="less">

</style>

