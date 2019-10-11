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
      <el-input v-model="dataForm.record_code" style="width:200px" placeholder="请输入文档编号"></el-input>
    </el-form-item>
    <el-form-item label="文档名称" prop="record_name">
      <el-input v-model="dataForm.record_name" style="width:200px" placeholder="请输入文档名称"></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="档案类型" prop="record_type">
      <el-select
        v-model="dataForm.record_type"
        placeholder="请选择档案类型"
        prop="record_type"
        style="width:200px"
        filterable
      >
        <el-option
          v-for="option in typeSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属地市" prop="regionid">
      <el-select
        v-model="dataForm.regionid"
        placeholder="请选择所属地市"
        style="width:200px"
        prop="regionid"
      >
        <el-option
          v-for="option in regionSelectData"
          :key="option.dxid"
          v-bind:value="option.dxid"
          v-bind:label="option.xzqhmc"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属项目" prop="projectid">
      <el-select v-model="dataForm.projectid" placeholder="所属项目">
        <el-option label="项目一" value="项目一"></el-option>
        <el-option label="项目二" value="项目二"></el-option>
        <el-option label="项目三" value="项目三"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="登记人" prop="creater">
      <el-input v-model="dataForm.creater" style="width:200px" placeholder="请输入登记人"></el-input>
    </el-form-item>
    <el-form-item label="档案室" prop="roomid">
      <el-select v-model="dataForm.roomid" filterable placeholder="请选择档案室" prop="roomid">
        <el-option
          v-for="option in roomSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="状态" prop="is_enabled">
      <el-radio-group v-model="dataForm.is_enabled" placeholder="请选择档案状态">
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
         placeholder="请输入文档备注"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      dataForm: {
        record_code: '',
        record_name: '',
        creater: '',
        create_time: '',
        remark: '',
        is_enabled: '1',
        record_type: '',
        is_del: '0',
        regionid: '',
        projectid: '',
        roomid: ''
      },
      rules: {
        record_name: [
          { required: true, message: '请输入档案名称', trigger: 'blur' }
        ],
        record_code: [
          { required: true, message: '请输入档案编号', trigger: 'blur' }
        ],
        record_type: [
          { required: true, message: '请选择档案类型', trigger: 'blur' }
        ],
        roomid: [{ required: true, message: '请选择档案室', trigger: 'blur' }],
        creater: [{ required: true, message: '请输入登记人', trigger: 'blur' }],
        is_enabled: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择所属地区', trigger: 'blur' }],
        project: [{ required: true, message: '请选择所属项目', trigger: 'blur' }],
        remark: [{ required: false, message: '请输入备注', trigger: 'blur' }]
      }
    }
  },
  props: {
    typeSelectData: { type: Array, default: () => [] },
    roomSelectData: { type: Array, default: () => [] },
    data: { type: Object, default: () => {} },
    regionSelectData: { type: Array, default: () => [] }
  },
  mounted() {
    for (var key in this.data) {
      this.dataForm[key] = this.data[key]
    }
  },
  methods: {
    submitForm(that) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.dataForm.modify_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        this.api.post(this, 'record_update', (data) => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          })
          that.modalClose()
          that.reLoad()
        }, this.dataForm)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>