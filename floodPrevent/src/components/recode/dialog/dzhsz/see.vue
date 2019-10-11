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
    <el-form-item label="档案编号" prop="record_code">
      <el-input v-model="dataForm.record_code" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="档案名称" prop="record_name">
      <el-input v-model="dataForm.record_name" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="档案类型" prop="type_name">
      <el-select
        v-model="dataForm.type_name"
        prop="type_name"
        style="width:200px"
        :disabled="true"
      >
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属地市" prop="dq">
      <el-select
        v-model="dataForm.dq"
        style="width:200px"
        prop="record_type"
        :disabled="true"
      >
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.dq"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属项目" prop="xm">
      <el-select v-model="dataForm.xm" prop="xm" :disabled="true">
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.xm"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="状态" prop="status">
      <el-radio-group v-model="dataForm.status" :disabled="true">
        <el-radio label="0">停用</el-radio>
        <el-radio label="1">启用</el-radio>
      </el-radio-group>
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
        record_code: '',
        record_name: '',
        type_name: '',
        creater: '',
        create_time: '',
        remark: '',
        status: '',
        dq: '',
        xm: ''
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  created() {
    this.dataForm = this.data
  },
  methods: {
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
      })
    }
  }
}
</script>