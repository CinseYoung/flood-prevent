<template>
  <div class="process">
    <result-left />
    <leftLegend />
    <rightLegend />
    <midLegend />
    <topLegend />
  </div>
</template>
<script>
/*eslint-disable */
import resultLeft from "@/components/riskmap/left/index.vue";
import leftLegend from "@/components/common/legend/leftLegend.vue";
import rightLegend from "@/components/common/legend/rightLegend.vue";
import midLegend from "@/components/common/legend/midLegend.vue";
import topLegend from "@/components/common/legend/topLegend.vue";
import plot from "@/components/common/dialog/plot.vue";
import { mapState } from "vuex";
export default {
  name: "process",
  components: {
    "result-left": resultLeft,
    leftLegend: leftLegend,
    rightLegend: rightLegend,
    midLegend: midLegend,
    topLegend: topLegend,
    plot: plot
  },
  computed: {
    ...mapState(["isShowDetail"])
  }
};
</script>