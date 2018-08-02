<template>
  <div class="details">
    <div class="prize">
      <p>获得价值2000元SPA卡1张</p>
      <img src="../images/pagetwo/spa.png" alt="">
    </div>
    <div class="down_btn">
      <img src="../images/pagetwo/button.png" alt="">
      <p>请出示该页面给工作人员领取奖品</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      position: null,
    };
  },
  created() {
  },
  methods: {}
};
</script>

<style lang="less">
@r: 1rem/75;
.details{
  width: 10rem;
  height: 1206*@r;
  background: url("../images/pagetwo/bg.png") no-repeat center/cover;
  color: #461425;
  .prize{
    padding-top: 200*@r;
    font-size: 40*@r;
    text-align: center;
    line-height: 46*@r;
    img{
      width: 469*@r;
      margin-top: 50*@r;
    }
  }
  .down_btn{
    margin-top: 310*@r;
    p{
      font-size: 27*@r;
      text-align: center;
      line-height: 34*@r;
    }
    img{
      display: block;
      width: 423*@r;
      margin: 0 auto;
      margin-bottom: 30*@r;
    }
  }
}
</style>
