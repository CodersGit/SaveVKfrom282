<template>
  <div class="button" @click="this.dispatchAction">
    <span v-html="text"></span>
  </div>
</template>

<script lang="ts">
import { Payload } from "vuex";
import { Component, Vue } from "vue-property-decorator";
@Component({
  props: {
    text: { required: true },
    action: { required: true }
  }
})
export default class WindowButton extends Vue {
  action?: Payload;
  text?: string;
  dispatchAction() {
    if (!this.action) {
      return;
    }
    this.$store.dispatch(this.action);
  }
}
</script>

<style scoped>
.button {
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: default;
  opacity: 0.8;
}
</style>
