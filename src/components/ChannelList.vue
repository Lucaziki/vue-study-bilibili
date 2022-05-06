<template>
  <div>
    <div
      class="channel-list"
      :style="{
        height: `${height}px`,
      }"
    >
      <div
        v-for="item in channels"
        :key="item.id"
        class="item"
        :style="{ width: `${100 / columns}%` }"
      >
        <Channel
          @active="$emit('active', item.id)"
          :isActive="item.id === activeId"
          :data="item"
        ></Channel>
      </div>
    </div>
    <div class="collapse" @click="isExpand = !isExpand">
      <span>{{ isExpand ? "收起" : "展开" }}</span>
      <Icon :type="isExpand ? 'arrowUp' : 'arrowDown'" extraClass="icon" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel";
import ChannelService from "../services/channel";
import Icon from "./Icon";
export default {
  components: {
    Channel,
    Icon,
  },
  props: {
    activeId: {
      type: Number,
      required: true,
    },
    columns: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      channels: [],
      isExpand: true, // 是否展开状态
    };
  },
  computed: {
    height() {
      let rows = 3;
      if (this.isExpand) {
        rows = Math.ceil(this.channels.length / this.columns);
      }
      return rows * 40;
    },
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
  transition: 0.2s;
}
.item {
  float: left;
}
.collapse {
  clear: both;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #e7e7e7;
}

.icon {
  font-size: 12px;
  margin-left: 5px;
}
</style>
