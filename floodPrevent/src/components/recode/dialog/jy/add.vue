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
    <el-form-item label="借阅人" prop="lender">
      <el-input v-model="dataForm.lender" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="借阅期限" prop="lend_period">
      <el-date-picker
        v-model="dataForm.lend_period"
        type="datetime"
        placeholder="选择借阅期限"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="借阅时间" prop="lend_time">
      <el-date-picker
        v-model="dataForm.lend_time"
        type="datetime"
        placeholder="选择借阅时间"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="操作人" prop="operator">
      <el-input v-model="dataForm.operator" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="操作时间" prop="operation_time">
      <el-date-picker
        v-model="dataForm.operation_time"
        type="datetime"
        placeholder="选择创建时间"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="申请说明" prop="remark">
      <el-input v-model="dataForm.remark" style="width:200px"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      roleSelectData: [],
      dataForm: {
        lender: '',
        lend_period: '',
        lend_time: '',
        operator: '',
        operation_time: '',
        remark: ''
      },
      rules: {
        lender: [
          { required: true, message: '请输入借阅人', trigger: 'blur' }
        ],
        lend_period: [
          { required: true, message: '请输入借阅期限', trigger: 'blur' }
        ],
        lend_time: [
          { required: true, message: '请输入借阅时间', trigger: 'blur' }
        ],
        operator: [{ required: true, message: '请输入操作人', trigger: 'blur' }],
        operation_time: [{ required: true, message: '请输入操作时间', trigger: 'blur' }],
        remark: [{ required: true, message: '请输入申请描述', trigger: 'blur' }]
      }
    }
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