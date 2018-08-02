<template>
  <div class="LuckToast" v-show="showToast">
    <div class="toastBox">
      <div class="toastPrize">
        <img :src="toastParams.image_url" alt="">
        <p>{{toastParams.name}}</p>
      </div>
      <div class="button" @click="goDetail">查看详情</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    showToast: {
      type: Boolean,
      default: false
    },
    toastParams: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  created() {
    console.log("---------test");
  },
  methods: {
    goDetail() {
      this.$router.push({
        path: "/details",
        query: { position: this.toastParams.position }
      })
    }
  }
};
</script>

<style lang="less">
@r: 1rem/75;
.LuckToast{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #ff4789;

    .toastBox {
      width: 620 * @r;
      height: 730 * @r;
      background: url("../images/other/toast_bg.png") no-repeat center/cover;
      position: absolute;
      top: -330*@r;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      border-radius: 10 * @r;
      .toastPrize{
        padding-top: 289*@r;
        margin-bottom: 40*@r;
        img{
          width: 250 * @r;
          margin-bottom: 35*@r;
        }
        p{
          font-size: 36*@r;
          text-align: center;
        }
      }
        .cancel {
          position: absolute;
          bottom: -133 * @r;
          right: 270 * @r;
          img {
            width: 80 * @r;
          }
        }
    }
    .button {
      width: 516 * @r;
      height: 80 * @r;
      line-height: 80 * @r;
      display: block;
      border-radius: 80 * @r;
      font-size: 30 * @r;
      color: #fff;
      margin: 0 auto;
      background: url("../images/other/sure_btn.png") no-repeat center/cover;
    }
  
}
</style>
