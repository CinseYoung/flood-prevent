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
      <el-select v-model="dataForm.lender" multiple placeholder="请选择" style="width: 370px;">
        <el-option label="电子文档" value="dz"></el-option>
        <el-option label="纸质文档" value="zz"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="权限">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="dataForm.checkedCities" @change="handleCheckedCitiesChange" style="display: inline-block;margin-left: 15px;">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script>
const cityOptions = ['查看', '修改', '删除', '下载']
import moment from 'moment'
export default {
  data() {
    return {
      checkAll: false,
      cities: cityOptions,
      isIndeterminate: false,
      roleSelectData: [],
      dataForm: {
        lender: '',
        lend_period: '',
        lend_time: '',
        operator: '',
        operation_time: '',
        remark: '',
        checkedCities: []
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
    submitForm(that) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.dataForm.create_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.record_id = this.$route.params.row.id
        this.dataForm.user = this.dataForm.user.join(',')
        this.dataForm.authorization = this.dataForm.authorization.join(',')
        this.dataForm.creater = localStorage.getItem('kpst-username')
        this.api.post(this, 'record_auth_insert', (data) => {
          this.$message({
            type: 'success',
            message: '新增成功!'
          })
          that.modalClose()
          that.reLoad()
        }, this.dataForm)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    handleCheckAllChange(val) {
      this.dataForm.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>