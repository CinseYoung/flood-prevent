<template>
  <el-form
    :model="dataForm"
    label-width="100px"
    ref="dataForm"
    size="mini"
    :rules="rules"
    style="margin-right: 20px"
    :inline="true"
    label-position="right"
  >
    <el-form-item label="文档编号" prop="record_code">
      <el-input v-model="dataForm.record_code" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="文档名称" prop="record_name">
      <el-input v-model="dataForm.record_name" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="档案类型" prop="type_name">
      <el-select
        v-model="dataForm.type_name"
        disabled
        prop="record_type"
        style="width:200px"
      >
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属地区" prop="region">
      <el-select
        v-model="dataForm.region"
        disabled
        style="width:200px"
        prop="region"
      >
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属项目" prop="project">
      <el-select v-model="dataForm.project" style="width:200px" disabled prop="project">
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="登记人" prop="creater">
      <el-input v-model="dataForm.creater" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="档案室" prop="archives">
      <el-select v-model="dataForm.archives" style="width:200px" disabled prop="archives">
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="存放位置" prop="position">
      <el-input v-model="dataForm.position" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="状态" prop="is_enabled">
      <el-radio-group v-model="dataForm.is_enabled" disabled>
        <el-radio label="0">损坏</el-radio>
        <el-radio label="1">完好</el-radio>
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
      roleSelectData: [],
      dataForm: {
        record_code: '',
        record_name: '',
        creater: '',
        create_time: '',
        remark: '',
        type_name: '',
        region: '',
        status: '',
        project: '',
        archives: '',
        position: ''
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  created() {
    console.log(this.data)
    this.dataForm = this.data
  },
  methods: {
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>