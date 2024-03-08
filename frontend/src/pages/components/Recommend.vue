<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      src: "/frontend/src/assets/images/cover1.jpeg",
      swiperList: [
        require("@/assets/images/angel.jpeg"),
        require("@/assets/images/angel.jpeg"),
        require("@/assets/images/angel.jpeg"),
      ],
    };
  },
  methods: {
    onSwiperChange() {},
    onSwiperClick() {},
  },
});
</script>
<template>
  <view>
    <u-swiper
      :list="swiperList"
      @change="onSwiperChange"
      @click="onSwiperClick"
      height="200px"
      imgMode="scaleToFill"
    ></u-swiper>
    <view class="greeting">早上好</view>
    <view >
      <scroll-view class="imageWrapper" scroll-x="true" enable-flex="true">
        <u-image class="image" :src="src" width="200px" radius="20px">
        </u-image>
        <u-image class="image" :src="src" width="200px" radius="20px">
        </u-image>
        <u-image class="image" :src="src" width="200px" radius="20px">
        </u-image>
        <u-image class="image" :src="src" width="200px" radius="20px">
        </u-image>
      </scroll-view>
    </view>
  </view>
</template>
<style>
.greeting {
  font-size: 36px;
}
.imageWrapper {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}
.image {
  margin: 0 auto;
}
</style>
