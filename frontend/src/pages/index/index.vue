<template>
  <view>
    <u-navbar title="个人中心" @rightClick="rightClick" :autoBack="true">
    </u-navbar>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {

    };
  },
  onLoad() {},
  methods: {
    rightClick() {
      console.log("rightClick");
    },
    leftClick() {
      console.log("leftClick");
    },
  },
});
</script>

<style>

</style>
