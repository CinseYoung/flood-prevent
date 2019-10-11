<template>
  <div>
    <result-left />
    <cell-detail v-if="isShowDetail" />
    <plot />
    <leftLegend />
  </div>
</template>
<script>
/*eslint-disable */
import resultLeft from "@/components/riskmap/left/index.vue";
import cellDetail from "@/components/common/dialog/cellDetail.vue";
import leftLegend from "@/components/common/legend/leftLegend.vue";
import plot from "@/components/common/dialog/plot.vue";
import { mapState } from "vuex";
export default {
  name: "analysis",
  components: {
    "result-left": resultLeft,
    "cell-detail": cellDetail,
    leftLegend: leftLegend,
    plot: plot
  },
  computed: {
    ...mapState(["isShowDetail"])
  }
};
</script>

