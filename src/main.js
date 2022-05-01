import Vue from "vue";
import App from "./App.vue";
import ChannelService from "./services/channel";

// Vue.config.productionTip = false

async function test() {
  let channels = await ChannelService.getChannels();
  // 过滤掉热门
  channels = channels.filter((e) => e.id !== 100);
  console.log(channels);
}

test();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
