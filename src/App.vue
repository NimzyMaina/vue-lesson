<template>
  <div id="app">

    <hello></hello>

    <img src="./assets/logo.png" @click="ding" v-show="isShow">
    <h1></h1>

  </div>

</template>

<script>

  import Hello from './components/Hello.vue';

  export default {
    name: 'app',
    components: {Hello},
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      ding() {
        Event.fire('qwerty');
      }
    },
    created() {
      Event.listen('ytrewq', () => this.isShow = !this.isShow)
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
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
