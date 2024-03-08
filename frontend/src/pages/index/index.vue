<template>
  <view>
    <view class="topContainer">
      <u-icon name="list" @click="handleMiscClick"></u-icon>
      <u-search
        placeholder="请输入你想听的歌曲名称..."
        v-model="keyword"
        :clearabled="true"
      ></u-search>
    </view>
    <view>
      <view v-if="tabBar==='recommend'">
        <Recommend />
      </view>
      <view v-else-if="tabBar==='explore'">
        <view>explore</view>
      </view>
      <view v-else-if="tabBar==='moments'">
        <view>moments</view>
      </view>
      <view v-else-if="tabBar==='my'">
        <view>my</view>
      </view>
    </view>
    <view>
      <u-tabbar
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
      >
        <u-tabbar-item text="推荐" icon="home" @click="()=>tabBar='recommend'"></u-tabbar-item>
        <u-tabbar-item
          text="发现"
          icon="moments"
          @click="()=>tabBar='explore'"
        ></u-tabbar-item>
        <u-tabbar-item
          text="动态"
          icon="weixin-fill"
          @click="()=>tabBar='moments'"
        ></u-tabbar-item>
        <u-tabbar-item
          text="我的"
          icon="account"
          @click="()=>tabBar='my'"
        ></u-tabbar-item>
      </u-tabbar>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Recommend from '@/pages/components/Recommend.vue'

export default Vue.extend({
  data() {
    let keyword = "";
    let tabBar='recommend'
    
    return {
      keyword,
      tabBar,
    };
  },
  onLoad() {},
  methods: {
    handleMiscClick(){
      
    }
  },
  components:{
    Recommend
  }
});
</script>

<style>
.topContainer {
  display: flex;
  flex-direction: row;
}
</style>
