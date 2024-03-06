<template>
  <view>
    <view class="topContainer">
      <u-icon name="list"></u-icon>
      <u-search
        placeholder="请输入你想听的歌曲名称..."
        v-model="keyword"
        :clearabled="true"
      ></u-search>
    </view>
    <view>
      <u-swiper :list="list" imgMode="scaleToFill" height="300px" indicator indicatorMode="line"></u-swiper>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    let keyword = "";
    let list: string[] = [require("../../assets/images/angel.jpeg"),require("../../assets/images/dream.jpeg")];
    return {
      keyword,
      list,
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style>
.topContainer {
  display: flex;
  flex-direction: row;
}
</style>
