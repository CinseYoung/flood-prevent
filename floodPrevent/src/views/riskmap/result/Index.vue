<template>
  <div>
    <result-left />
    <plot />
    <leftLegend />
    <rightLegend />
  </div>
</template>
<script>
/*eslint-disable */
import resultLeft from "@/components/riskmap/left/index.vue";
import leftLegend from "@/components/common/legend/leftLegend.vue";
import rightLegend from "@/components/common/legend/rightLegend.vue";
import plot from "@/components/common/dialog/plot.vue";
import { mapState } from "vuex";
export default {
  components: {
    "result-left": resultLeft,
    rightLegend: rightLegend,
    leftLegend: leftLegend,
    plot: plot
  },
  computed: {
    ...mapState(["isShowDetail"])
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

