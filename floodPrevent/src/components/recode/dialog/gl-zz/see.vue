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
    <el-form-item label="文档编号" prop="record_code">
      <el-input v-model="dataForm.record_code" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="文档名称" prop="record_name">
      <el-input v-model="dataForm.record_name" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="档案类型" prop="record_type">
      <el-input v-model="dataForm.record_type" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <!-- <el-form-item label="档案类型" prop="record_type">
      <el-select
        v-model="dataForm.record_type"
        placeholder="请选择档案类型"
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
    </el-form-item> -->
    <!-- <el-form-item label="所属地区" prop="region">
      <el-select
        v-model="dataForm.region"
        placeholder="请选择所属地区"
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
      <el-select v-model="dataForm.project" style="width:200px" placeholder="请选择所属项目" prop="project">
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item> -->
    <el-form-item label="登记人" prop="creater">
      <el-input v-model="dataForm.creater" style="width:200px" readonly="readonly"></el-input>
    </el-form-item>
    <el-form-item label="档案室" prop="roomName">
      <el-input v-model="dataForm.roomName" style="width:200px" readonly="readonly"></el-input>
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
      dataForm: {
        record_code: '',
        record_name: '',
        creater: '',
        remark: '',
        is_enabled: '',
        record_type: '',
        roomName: ''
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  created() {
    console.log(this.data)
    this.dataForm = this.data
  }
}
</script>