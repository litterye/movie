<template>
    <v-distpicker @selected="onSelected" type="mobile"></v-distpicker>
</template>

<script>
import VDistpicker from 'v-distpicker'
import router from '../../utils/router.js'

export default {
    data () {
        return {
            select:{
                province: '',
                city: '',
                area: ''
            }
        }
    },
    components:{
        VDistpicker
    },
    methods: {
        //当三级都选择完触发onSelected
        onSelected (data) {
            sessionStorage.setItem("city",data.city.value)
            router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>

