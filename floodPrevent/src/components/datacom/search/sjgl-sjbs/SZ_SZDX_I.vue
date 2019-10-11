<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search" label-position="left">
    <el-form-item label="水闸对象ID">
      <el-input v-model="formInline.DXID" placeholder="接口名称" style="width:160px"></el-input>
    </el-form-item>
    <el-form-item label="是否消亡">
      <el-select filterable clearable  v-model="formInline.SFXW" placeholder="河流名称" style="width:160px">
        <el-option label="是" value="1"></el-option>
        <el-option label="否" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="创建时间">
      <el-date-picker
        v-model="formInline.CJSJ"
        type="daterange"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="warning" @click="add">添加</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="exportExcel">导出</el-button>
    </el-form-item> -->
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        DXID: '',
        CJSJ: '',
        SFXW: ''
      }
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchSubmit', data)
    },
    add() {
      this.$emit('funx')
    },
    exportExcel() {
      // window.location.href = window.URL.createObjectURL(new Blob([response.data], { type:     'application/vnd.ms-excel' }))
      this.utils.excel()
    }
  }
}
</script>

<style scoped lang="scss">
.gr-form-search{
  background: #fff;
  padding: 15px 0 0 5px;
  margin-top: 3px;
  border-bottom: solid 1px #d9d9d9;
  padding-left: 17px;
  margin-left: 5px ;
  width: 100%;
}
</style>
