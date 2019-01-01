<template>
  <div id="app">
    <div class="header">
      <h1 class="head-state">
        <a href="//wap.yy.com" class="yy-logo"></a>
      </h1>
    </div>
    <div class="nav">
      <div class="nav-wrapper">
        <ul class="nav-slide-list">
          <li v-for="(item, index) in navData" :key="index">
            <h2>
              <router-link :to="{path:item.id}">
                {{item.name}}
              </router-link>
            </h2>
          </li>
        </ul>
        <div class="nav-menu">
          <div class="menu-icon">
            <div v-if="closeMenu" class="icon close" @click.stop.prevent="isShow"></div>
            <div v-else class="icon" @click="isShow"></div>
          </div>
        </div>
        <div class="menu-box" v-if="closeMenu">
          <ul class="">
            <li v-for="(item, index) in navData" :key="index" @click.stop.prevent="isShow">
              <h2>
                <router-link :to="{path:item.id}">
                  <img src="~public/menu_icon2.png" />
                  <span class="text">{{item.name}}</span>
                </router-link>
              </h2>
            </li>
          </ul>
          <div class="mask" @click.stop.prevent="isShow"></div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
      <div class="footer">
    <div class="baseText-list">
      <div class="text">下载YY，获取更多精彩！</div>
      <div class="btn"></div>
    </div>
    <img src="~public/logo.png" class="icon" />
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      closeMenu: false,
      navData: [{
        name:'热门',
        id: 'index'
      },{
        name:'歌舞',
        id: 'show'
      },{
        name:'脱口秀',
        id: 'music'
      },{
        name:'喊麦',
        id: 'music'
      },{
        name:'户外',
        id: 'travel'
      },{
        name:'二次元',
        id: 'acg'
      },{
        name:'现场',
        id: 'star'
      },{
        name:'游戏',
        id: 'game'
      },{
        name:'萌宠',
        id: 'pet'
      },{
        name:'综合',
        id: 'others'
      }]
    }
  },
  methods: {
    isShow () {
      this.closeMenu = !this.closeMenu
    }
  },
}
</script>

<style lang="scss">
#app {
    position: relative;
    width: 100%;
    height: 100%;
  }
.header{
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 97px;
  background: #fd0;
  .head-state{
    width: 100%;
    height: 100%;
    padding-left: 20px;
    .yy-logo{
      width: 100%;
      height: 100%;
      display: inline-block;
      background: url('//yyweb.yystatic.com/mobile/images/components/w-head/images/icon-logo-3f5e4c2589.png?v=20170916001') left center no-repeat;
      background-size: 328px 36px        
    }
  }
}

#app .nav {
  z-index: 8;
  position: fixed;
  top: 97px;
  left: 0;
  width: 100%;
  height: 68px;
  background: #fff;
  .nav-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    .nav-slide-list{
      // width:
      width: 100%;
      height: 100%;
      overflow-x: auto;
      font-size: 0;
      white-space: nowrap;
      padding: 0 5px 0 10px;
      li{
        display: inline-block;
        padding-right: 66px;
        font-size: 30px;
        line-height: 66px;
        color: #999;
        &.active{
          color: #3a3a3a;
          h2{
            &::after{
              position: absolute;
              left: 50%;
              content: '';
              background-color: #fd0;
              transform: translateX(-50%);
              bottom: -1PX;
              border-radius: 1.5px;
              height: 6px;
              width: 50px;
            }
          }
        }
        h2{
          position: relative;
          font-weight: normal;
        }
      }
    }
    .nav-menu{
      position: absolute;
      right: 0;
      top: 15px;
      background: #fff;
      .menu-icon{

        padding-right: 20px;
        .icon{
          width: 32px;
          height: 32px;
          background: url(~public/menu_icon.png) center center no-repeat;
          background-size: 32px 32px;
          &.close{
            background: url(~public/menu_close.png) center center no-repeat;
            background-size: 32px 32px;
          }
          &::before{
            position: relative;
            display: block;
            content: '';
            background: -webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(100%,#fff));
            top: -6px;
            right: 40px;
            width: 40px;
            height: 50px;
          }
        }
      }
    }
    .menu-box{
      position: relative;
      width: 100%;
      height: 780px;
      padding-top: 60px;
      // background-color: rgba(0,0,0, 0.8);
      background-color: rgba(244,244,244, 0.95);
      ul{
        font-size: 0;
        height: 100%;
        li{
          float: left;
          width: 33.3333%;
          margin-bottom: 62px;
          // height: 96px;
          h2{
            font-weight: normal;
            img{
              display: block;
              margin: 0 auto;
              width: 71px;
              height: 67px;
            }
            span.text{
              display:block;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-size: 28px;
              color: #1d1d1d;
            }
          }
        }
      }
      .mask{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.6);
      }
    }
  }
}
#app .main-box{
  width: 100%;
  height: 100%;
  padding-top: 165px;
  ul.list{
    margin-bottom: 56px;
    height: auto;
    background: #fff;
    overflow: auto;
    li{
      float: left;
      width: 370px;
      padding-right: 10px;
      margin-bottom: 34px;
      &:nth-child(even){
        padding-right: 0px;
      }
      .cover-wrapper{
        position: relative;
        margin-bottom: 10px;
        width: 100%;
        height: 336px;
        .cover{
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .uses{
          z-index: 2;
          position: absolute;
          bottom: 8px;
          left: 20px;
          img{
            vertical-align: middle;
            width: 27px;
            height: 27px;
          }
          span{
            vertical-align: middle;
            color: #fff;
            font-size: 26px;
            font-weight: bold;
            white-space: 1px;
          }
        }
      }
      h3.desc{
        padding-left: 20px;
        font-size: 26px;
        line-height: 28px;
        font-weight: 600;
        color: #3a3a3a;
      }
    }
  }
  .tips{
    position: relative;
    padding-bottom: 200px;
    text-align: center;
    color: #999;
    &::after{
      content: "";
      display: block;
      position: absolute;
      background: url(//yyweb.yystatic.com/mobile/images/components/w-baseText/images/line-a000c4b8a0.png) center center no-repeat;
      background-size: cover;
      width: 62px;
      height: 65px;
      right: 160px;
    }
  }
}
.footer{
  z-index: 8;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 116px;
  background: #fff;
  .baseText-list{
    // width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    .text{
      color: #1d1d1d;
      font-size: 30px;
      font-weight: 700;      
    }
    .btn{
      width: 158px;
      height: 60px;
      background: url(~public/download.png) center center no-repeat;
      background-size: 158px 60px;      
    }
  .icon{
    position: absolute;
    left: 0;
    bottom: 94px;
    width: 142px;
    height: 120px;     
  }
} 
}

</style>
