<template>
  <div id="app">
    <header>
      <HeaderMenu></HeaderMenu>
    </header>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
export default {
  name: 'APP',
  data() {
    return {
      inputText:''
    }
  },
  components:{
    HeaderMenu
  },
  methods: {
    
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: #85dcb0
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@keyframes handwriting{
  0% {fill: transparent;}
  25% {fill: transparent;}
  75% {fill: #282828;}
  100% { stroke-dashoffset: 0; fill: #282828;}
}
.Rrrr {
  font-family: customfe36a51f009e4e4f92fa0, cursive;
  font-size: 28px;
  font-wight: 100;
  animation: handwritings 3s linear forwards;
  -webkit-animation: handwritings 3s linear forwards;
  -moz-animation: handwritings 3s linear forwards;
  fill: transparent;
  stroke: #282828;
  stroke-width: 3px;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  stroke-linecap: square;
}
.Rrrrr {
  font-family: customfe36a51f009e4e4f92fa0, cursive;
  font-size: 32px;
  font-wight: 100;
  animation: handwriting 3s linear forwards;
  -webkit-animation: handwriting 3s linear forwards;
  -moz-animation: handwriting 3s linear forwards;
  fill: transparent;
  stroke: #282828;
  stroke-width: 3px;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke-linecap: square;
  }

</style>
