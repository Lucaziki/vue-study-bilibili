<template>
  <div>
    <div style="width: 250px">
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
  </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu";
import ChannelList from "./components/ChannelList";
export default {
  components: {
    TitleMenu,
    ChannelList,
  },

  data() {
    return {
      activeId: 100,
    };
  },

  methods: {},
};
</script>
