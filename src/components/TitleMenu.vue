<template>
  <div class="title-menu">
    <Item :isActive="isActive" @active="$emit('active', 456)">
      <div class="inner">
        <div class="left">
          <slot name="title"></slot>
        </div>
        <div class="right">
          <slot name="icon"></slot>
        </div>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  props: {
    isActive: {
      type: Boolean, // 约束该属性的类型
      //   required: true, // 约束该属性必须传递
      default: false, // 默认值为false
    },
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.title-menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
}

.inner {
  padding: 0 20px;
}

.left {
  float: left;
  color: #212121;
  font-weight: 500;
  font-size: 16px;
}

.right {
  float: right;
  font-size: 12px;
  color: #999;
}
</style>
