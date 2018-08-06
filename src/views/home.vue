<template>
<div class="luckDraw">
    <div class="container">
      <div class="turntable-wrapper">
        <div class="luck-wrapper">
          <ul class="nineGrid">
            <li class="row">
              <div v-for="(item, index) in lineOne" :key="index" :class="position === index ? `active` : ``">
                <div class="wrapper">
                  <img :src="item.img" alt="">
                </div>
                <div class="mask"></div>
              </div>
            </li>
            <li class="row">
              <div :class="position === 7 ? 'active': ''">
                <div class="wrapper">
                  <img :src="lineTwo2.img" alt="">
                </div>
                <div class="mask"></div>
              </div>
              <div class="getLuck" @click="startLottery">
                <img src="../images/home/getLuck_btn.png" alt="">
              </div>
               <div :class="position === 3 ? 'active': ''">
                <div class="wrapper">
                  <img :src="lineTwo1.img" alt="">
                </div>
                <div class="mask"></div>
              </div>
            </li>
            <li class="row">
              <div v-for="(item, index) in lineThree" :key="index" :class="position === 6-index ? `active` : ``">
                <div class="wrapper">
                  <img :src="item.img" alt="">
                </div>
                <div class="mask"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <LuckToast :showToast.sync="showToast" :toastParams="toastParams"></LuckToast>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LuckToast from '@/components/luckToast.vue';
import api from '../api/api';

export default {

  components: {
      LuckToast,
  },

  data() {
    return {
      title: "积分转盘",
      position: -1, // 当前转动到哪个位置，起点位置
      count: 8, // 总共有多少个位置
      timer: 0, // 每次转动定时器
      speed: 200, // 初始转动速度
      times: 5, // 转动次数
      cycle: 50, // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      prize: -1, // 中奖位置
      click: true,
      showToast: false,
      toastParams: {
        image_url: require("../images/other/pic_spa.png"),
        name: "价值2000元的SPA卡"
      },
      lineOne: [
        {img: require("../images/home/600jack.png")},
        {img: require("../images/home/iphoneX.png")},
        {img: require("../images/home/1988LOL.png")},
      ],
      lineTwo1: {img: require("../images/home/2000SPA.png")},
      lineTwo2: {img: require("../images/home/snacks.png")},
      lineThree: [
        {img: require("../images/home/100card.png")},
        {img: require("../images/home/water.png")},
        {img: require("../images/home/160T.png")},
      ],
      positionList: [],
    };
  },
  mounted() {
    this._getHomeData();
  },
  methods: {
    // 页面数据
    _getHomeData() {
    },
    // 抽奖接口
    _getCJPrize(phone) {
    },
    // 开始抽奖
    startLottery(phone) {
      if (!this.click) {
        return;
      }
      this.closeToast();
      this.speed = 200;
      this.click = false;
      this.startRoll();
      this._getCJPrize(phone);
    },

    // 开始转动
    startRoll() {
      this.times += 1; // 转动次数
      this.oneRoll(); // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.position) {
        clearTimeout(this.timer); // 清除转动定时器，停止转动
        this.prize = -1;
        this.times = 0;
        this.click = true;
        setTimeout(()=>{
          this.showToast = true;
        },500)
        // console.log("你已经中奖了");
      } else {
        if (this.times < this.cycle) {
          this.speed -= 10; // 加快转动速度
        } else if (this.times === this.cycle) {
          // 随机获得一个中奖位置
          const index = 3;
          this.prize = index;
          if (this.prize > 7) {
            this.prize = 7;
          }
        } else if (this.times > this.cycle + 10 &&((this.prize === 0 && this.position === 7) || this.prize === this.position+1)) {
          this.speed += 110;
        } else {
          this.speed += 20;
        }

        if (this.speed < 40) {
          this.speed = 40;
        }
        this.timer = setTimeout(this.startRoll, this.speed);
      }
    },

    // 每一次转动
    oneRoll() {
      let position = this.position; // 当前转动到哪个位置
      const count = this.count; // 总共有多少个位置
      position += 1;
      if (position > count - 1) {
        position = 0;
      }
      this.position = position;
    },

    // 关闭弹出框
    closeToast() {
      this.showToast = false;
    }
  },
};
</script>

<style lang="less">
@import "./home.less";
</style>
