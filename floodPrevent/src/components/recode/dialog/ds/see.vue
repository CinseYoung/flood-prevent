<template>
  <el-form
    :model="dataForm"
    label-width="100px"
    ref="dataForm"
    size="mini"
    style="margin-right: 20px"
    :inline="true"
    label-position="right"
  >
    <el-form-item label="档案室名称" prop="office_name">
      <el-input v-model="dataForm.name" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="档案室管理员" prop="office_manager">
      <el-input v-model="dataForm.manager" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="所在位置" prop="office_position">
      <el-input v-model="dataForm.place" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="可存放文档总数" prop="storable_number">
      <el-input v-model="dataForm.total" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="当前存在文档数" prop="current_number">
      <el-input v-model="dataForm.current_total" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="档案备注" prop="remark">
      <el-input
        v-model="dataForm.remark"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5}"
        style="width:510px;"
        readonly="readonly"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        name: '',
        manager: '',
        place: '',
        total: '',
        current_total: '',
        remark: ''
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  created() {
    this.dataForm = this.data
  }
}
</script>