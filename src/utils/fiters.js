import Vue from 'vue';

Vue.filter('imgFilter', (value, newstr) => {
    return value.replace('w.h', newstr)
})