<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      src:'/frontend/src/assets/images/cover1.jpeg'
    };
  },
});
</script>
<template>
  <view>
    <view>早上好</view>
    <view>
      <u-image :src="src"> </u-image>
    </view>
  </view>
</template>
<style></style>
