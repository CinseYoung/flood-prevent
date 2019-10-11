
<template>
  <gr-wrap :name="'洪水风险图成果展示系统'" :thisTitle="'洪水风险图'" :type="'riskmap'" />
</template>
<script>
import wrap from '@/components/common/wrap/map-header/index.vue'
export default {
  components: { 'gr-wrap': wrap }
}
</script>