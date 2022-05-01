<template>
  <div class="channel-list">
    <div v-for="item in channels" :key="item.id" class="item">
      <Channel
        @active="$emit('active', item.id)"
        :isActive="item.id === activeId"
        :data="item"
      ></Channel>
    </div>
  </div>
</template>

<script>
import Channel from "./Channel";
import ChannelService from "../services/channel";
export default {
  components: {
    Channel,
  },
  props: ["activeId"],
  data() {
    return {
      channels: [],
    };
  },
  async created() {
    let channels = await ChannelService.getChannels();
    // 过滤掉热门
    this.channels = channels.filter((e) => e.id !== 100);
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
}
.item {
  float: left;
  width: 50%;
}
</style>
