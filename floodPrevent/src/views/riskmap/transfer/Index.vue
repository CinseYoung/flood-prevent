

<template>
  <div class="transfer">
    <result-left />
    <plot />
    <leftLegend />
  </div>
</template>
<script>
/*eslint-disable */
import resultLeft from "@/components/riskmap/left/index.vue";
import leftLegend from "@/components/common/legend/leftLegend.vue";
import plot from "@/components/common/dialog/plot.vue";
import { mapState } from "vuex";
export default {
  name: "transfer",
  components: {
    "result-left": resultLeft,
    leftLegend: leftLegend,
    plot: plot
  },
  computed: {
    ...mapState(["isShowDetail"])
  }
};
</script>

