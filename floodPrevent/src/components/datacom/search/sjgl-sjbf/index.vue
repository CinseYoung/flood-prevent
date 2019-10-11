<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="表名">
      <el-input v-model="formInline.BM" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="标识符">
      <el-input v-model="formInline.BSF" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="时间选择">
      <el-date-picker
        v-model="formInline.SJ"
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
      <el-button type="success" @click="add">备份</el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>

export default {
  data() {
    return {
      formInline: {
        BM: '',
        BSF: '',
        SJ: ''
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
    }
    // exportExcel() {
    //   this.utils.excel()
    // },
    // add() {
    //   this.$emit('funx')
    // }
  }
}
</script>
