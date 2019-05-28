<template>
  <div>
    <input v-model="inputText" type="text" />
    <button @click="nameEntered">Enter</button>
    <div id="svgname">
      <svg id="svg-name" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg" width="280">
        <text id="char1" class="Rrrr" dy="52" x="1" style="animation-delay: 0ms;"></text>
        <text id="char2" class="Rrrr" dy="52" x="1" style="animation-delay: 500ms;"></text>
        <text id="char3" class="Rrrr" dy="52" x="1" style="animation-delay: 1000ms;"></text>
        <text id="char4" class="Rrrr" dy="52" x="1" style="animation-delay: 1500ms;"></text>
        <text id="char5" class="Rrrr" dy="52" x="1" style="animation-delay: 2000ms;"></text>
        <text id="char6" class="Rrrr" dy="52" x="1" style="animation-delay: 2500ms;"></text>
        <text id="char7" class="Rrrr" dy="52" x="1" style="animation-delay: 3000ms;"></text>
        <text id="char8" class="Rrrr" dy="52" x="1" style="animation-delay: 3500ms;"></text>
        <text id="char9" class="Rrrr" dy="52" x="1" style="animation-delay: 4000ms;"></text>
        <text id="char10" class="Rrrr" dy="52" x="1" style="animation-delay: 4500ms;"></text>
        <text id="char11" class="Rrrr" dy="52" x="1" style="animation-delay: 5000ms;"></text>
        <text id="char12" class="Rrrr" dy="52" x="1" style="animation-delay: 5500ms;"></text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      inputText:''
    }
  },
  methods: {
    nameEntered() {
      let name = this.inputText.trim() + ' :)'
      let x = 10;
      let delay = 0;
      for (let i=0; i<name.length; i++) {
        let text = document.getElementById('char' + (i+1))
        text.setAttributeNS(null, 'dx', x)
          if (this.inputText.charAt(i) == 'i' || this.inputText.charAt(i) == 'l') {
            x = x + 10;
          }
          else {
            x = x + 20;
          }
        text.classList.add('Rrrrr')
        // text.setAttributeNS(null, 'style', "amimation-delay: " + delay + "ms")
        text.innerHTML = name.charAt(i)
        // newSVG.appendChild(text)
        // x = x + 20;
        delay = delay + 500;
      }
    }
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
@keyframes handwriting {
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
