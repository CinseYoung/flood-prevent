<template>
  <div style="height:100%;display:flex">
    <div class="leftshuxing">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText" clearable></el-input>
      <div style="overflowY:scroll;overflowX:hidden">
        <el-tree
        class="filter-tree"
        :data="shuju"
        :props="defaultProps"
        node-key="id"
        :filter-node-method="filterNode"
        ref="tree"
        highlight-current
        :style="{height:height+'px'}"
        @node-click="handleNodeClick"
      ></el-tree>
      </div>
    </div>
    <div class="rightdrig">
      <component :is="componentId"></component>
    </div>
  </div>
</template>
<script>
import shuju from './hxsj.js'
export default {
  data() {
    return {
      height: 0,
      filterText: '',
      shuju,
      componentId: null,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.$emit('update:menuName', '核心数据管理')
    this.height = document.body.clientHeight - 145
  },
  mounted() {
    this.componentId = () => import('@/components/datacom/view/LY/LY_LYJBSX_E.vue')
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleNodeClick(data, node, self) {
      if (!data.children) {
        this.componentId = () => import('@/components/datacom/view/' + data.name.split('_')[0] + '/' + data.name + '.vue')
      }
    }
  }
}
</script>
<style lang="scss">
.leftshuxing {
  width: 300px;
  background: #fff;
  margin: 3px 0 3px 5px;
}
.rightdrig {
  overflow: hidden;
  flex: 1;
}
.gr-datagrid {
  height: 90%;
  height: calc(100% - 110px);
  background: #fff;
  margin: 3px 0 3px 5px;
  padding: 0 17px;
  border-bottom: solid 1px #d9d9d9;
  .gr-tag {
    line-height: 46px;
    .data-title {
      background: url("../../../assets/data-title.png") no-repeat center left;
      padding-left: 20px;
      font-size: 14px;
    }
    .el-button--primary {
      color: #fff;
      background: #409eff;
      border-color: #409eff;
      margin-left: 15px;
    }
    .el-button--primary:hover {
      background-color: rgb(193, 218, 243);
      border-color: rgb(121, 184, 248);
      color: #000;
    }
  }
}
.el-tree-node__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
