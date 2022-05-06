<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
let map = {
  arrowUp: "icon-xiangshangjiantou",
  arrowDown: "icon-xiangxiajiantou",
  search: "icon-sousuo",
};

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_3372299_9fl1vin2xkq.css";
</style>
