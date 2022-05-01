<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean, // 约束该属性的类型
      //   required: true, // 约束该属性必须传递
      default: false, // 默认值为false
    },
  },
  methods: {
    handleClick() {
      this.$emit("active", 123);
    },
  },
};
</script>

<style scoped>
.active {
  background: #e7e7e7;
}
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 200ms;
}

.item:hover {
  background: #f4f4f4;
}
</style>
