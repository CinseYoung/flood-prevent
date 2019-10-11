<template>
  <div style="height:100%;">
    <div class="gird clear">
      <left-list @cliitem='handleitem' class="leftlist"></left-list>
      <component class="righttab" ref="righttab" :srcdata="srcdata"   :is="rightComponet"></component>
    </div>
  </div>
</template>

<script>
import leftList from '@/components/datacom/grid/sjgl-sjbs/leftList.vue'

export default {
  data() {
    return {
      rightComponet: null,
      srcdata: null
    }
  },
  components: {
    leftList
  },
  created() {
    // this.$emit('update:menuName', '流域标识')
    this.rightComponet = () => import('@/components/datacom/grid/sjgl-sjbs/rightTab/LY_LYDX_I.vue')
  },
  methods: {
    handleitem(data) {
      this.srcdata = data
      const pageName = data.lable
      this.rightComponet = () => import('@/components/datacom/grid/sjgl-sjbs/rightTab/' + pageName + '.vue')
    }
  }
}
</script>

<style scoped lang="scss">
.clear:after{content:"";clear: both;display: block;height: 0;overflow: hidden;visibility: hidden;}
.gird{
  padding: 0px 0 0 5px;
  .leftlist{
    float: left;
    width: 25%;
    background-color: #fff;
  }
  .righttab{
    float: left;
    width: 74.5%;
  }
}
</style>
