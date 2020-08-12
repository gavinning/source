<template lang="pug">
.page
    p From: {{ from }}
    p Version: {{ version }}
    p BaiduKeyword: {{ baiduKeyword }}
    p SogouKeyword: {{ sogouKeyword }}
</template>>
<script>
import source from '../../../lib/index'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },

    data() {
        return {
            from: null,
            baiduKeyword: null,
            sogouKeyword: null,
        }
    },

    created() {
        this.from = source.getFrom()
        this.version = source.get('version')
        this.baiduKeyword = source.getBaiduKeyword()
        this.sogouKeyword = source.getSogouKeyword()
    }
}
</script>
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
