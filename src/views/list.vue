<template>
<div class="main-box">
  <ul class="list">
    <li v-for="(item, index) in list" :key="index">
      <div class="cover-wrapper">
        <div class="tag"></div>
        <img class="cover" :src="item.url"/>
        <div class="uses">
          <img src="~assets/img/live_icon.png"/>
          <span>{{item.users}}万</span>
        </div>
      </div>
      <h3 class="desc">{{item.name}}</h3>
    </li>
  </ul>
  <div class="tips">
    上YY看直播, 更流畅, 更清晰
  </div>
</div>
</template>
<script>
export default {
    name: 'index',
    asyncData ({ store, route: { params: { id }}}) {
        return 
    },
}
</script>
<style lang="scss">
@import '~assets/css/main.css'
</style>

