<template>
  <div class="channel-search">
    <Search @search="handleSearch" placeholder="搜索频道" />
  </div>
</template>

<script>
import Search from "./Search";
export default {
  components: {
    Search,
  },
  methods: {
    handleSearch(e) {
      console.log("搜索", e);
    },
  },
};
</script>

<style scoped>
.channel-search {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 0 18px;
  margin: 18px 0;
}
</style>
