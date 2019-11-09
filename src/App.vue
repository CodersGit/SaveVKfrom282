<template>
  <div id="app">
    <TitleBar />
    <div class="app-container">
      <div>
        <div class="reveal-border">
          <button class="reveal">Button 1</button>
        </div>
        <div class="reveal-border">
          <button class="reveal">Button 2</button>
        </div>
      </div>
      <div class="reveal-border">
        <button class="reveal">Button 3</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { FluentRevealEffect } from "fluent-reveal-effect";
import TitleBar from "./components/TitleBar.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {
    TitleBar
  },
})
export default class App extends Vue {
  mounted(): void {
    FluentRevealEffect.applyEffect(".app-container", {
      clickEffect: true,
      lightColor: "rgba(255,255,255,0.6)",
      gradientSize: 80,
      isContainer: true,
      children: {
        borderSelector: ".reveal-border",
        elementSelector: ".reveal",
        lightColor: "rgba(255,255,255,0.3)",
        gradientSize: 150
      }
    });
  }
  beforeUpdate(): void {
    FluentRevealEffect.clearEffect(".app-container");
  }
  updated(): void {
    FluentRevealEffect.applyEffect(".app-container", {
      clickEffect: true,
      lightColor: "rgba(255,255,255,0.6)",
      gradientSize: 80,
      isContainer: true,
      children: {
        borderSelector: ".reveal-border",
        elementSelector: ".reveal",
        lightColor: "rgba(255,255,255,0.3)",
        gradientSize: 150
      }
    });
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
html {
  box-sizing: border-box;
  background: rgba(70, 128, 194, 0.4) !important;
  border: none;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
html,
body {
  height: 100%;
}
body {
  border: 1px solid #48545c;
  overflow-y: hidden;
}
#app {
  font-family: "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
}
.reveal {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial,
    sans-serif;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  border: 0;

  transition: all 200ms ease;
}
.reveal-border {
  display: inline-block;
  margin: 5px;
}
.reveal-border .reveal {
  display: block;
  margin: 2px;
}
.app-container {
  padding-top: 30px;
}
</style>
