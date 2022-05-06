<template>
  <div class="aside">
    <ChannelSearch />
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <template v-slot:title>发现频道</template>
      <template v-slot:icon>></template>
    </TitleMenu>
    <ChannelList
      :columns="2"
      :activeId="activeId"
      @active="activeId = $event"
    ></ChannelList>
  </div>
</template>

<script>
import TitleMenu from "./TitleMenu";
import ChannelList from "./ChannelList";
import ChannelSearch from "./ChannelSearch";
export default {
  components: {
    TitleMenu,
    ChannelList,
    ChannelSearch,
  },

  data() {
    return {
      activeId: 100,
    };
  },
};
</script>

<style scoped>
.aside {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
