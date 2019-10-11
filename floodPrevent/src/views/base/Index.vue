<template>
  <gr-wrap
    :name="'水利一张图信息展示系统'"
    :thisTitle="'一张图展示'"
    :type="'base'"
    :isLeft="isLeft"
    :isBC="isBC"
    :mapPos="mapPos"
  />
</template>
<script>
import wrap from '@/components/common/wrap/yzt/index.vue'

export default {
  data() {
    return { isLeft: true, isBC: true, mapPos: 'right' }
  },
  components: { 'gr-wrap': wrap }
}
</script>
