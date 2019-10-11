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
    <el-form-item label="数据源名称" prop="data_source_name">
      <el-input v-model="dataForm.data_source_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="数据库名称" prop="database_name">
      <el-input v-model="dataForm.database_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="数据库类型" prop="database_type">
      <el-select filterable clearable  v-model="dataForm.database_type"   style="width:200px">
        <el-option label="项目一" value="shanghai"></el-option>
        <el-option label="项目二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="IP" prop="IP">
      <el-input v-model="dataForm.IP" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="端口" prop="port">
      <el-input v-model="dataForm.port" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="账号" prop="account_number">
      <el-input v-model="dataForm.account_number" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="数据源说明" prop="describe">
      <el-input
        v-model="dataForm.describe"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        style="width:510px;"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      yj_levle: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      dataForm: {
        data_source_name: '',
        database_name: '',
        database_type: '',
        IP: '',
        port: '',
        account_number: '',
        describe: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        data_source_name: [
          { required: true, message: '请填写数据源名称', trigger: 'blur' }
        ],
        database_name: [
          { required: true, message: '请填写数据库名称', trigger: 'blur' }
        ],
        database_type: [
          { required: true, message: '请填写数据库类型', trigger: 'change' }
        ],
        IP: [{ required: true, message: '请填写IP', trigger: 'blur' }],
        port: [{ required: true, message: '请填写端口号', trigger: 'blur' }],
        account_number: [{ required: true, message: '请填写账号', trigger: 'blur' }],
        describe: [{ required: false, message: '', trigger: 'blur' }]
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  mounted() {
    for (var key in this.data) {
      this.dataForm[key] = this.data[key]
    }
  },
  methods: {
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        console.log(this.dataForm)
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>