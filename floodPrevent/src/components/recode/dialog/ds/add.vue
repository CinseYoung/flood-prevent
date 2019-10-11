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
    <el-form-item label="档案室名称" prop="office_name">
      <el-input v-model="dataForm.name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="档案室管理员" prop="office_manager">
      <el-input v-model="dataForm.manager" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="所在位置" prop="office_position">
      <el-input v-model="dataForm.place" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="可存放文档总数" prop="storable_number">
      <el-input v-model="dataForm.total" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="当前存在文档数" prop="current_number">
      <el-input v-model="dataForm.current_total" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="档案备注" prop="remark">
      <el-input
        v-model="dataForm.remark"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5}"
        style="width:510px;"
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
        name: '',
        manager: '',
        place: '',
        total: '',
        current_total: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入档案室名称', trigger: 'blur' }
        ],
        manager: [
          { required: true, message: '请输入档案室管理员', trigger: 'blur' }
        ],
        place: [
          { required: true, message: '请输入档案室所在位置', trigger: 'blur' }
        ],
        total: [{ required: true, message: '请输入可存文档总数', trigger: 'blur' }],
        current_total: [{ required: true, message: '请输入当前存在文档数', trigger: 'blur' }]
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
        this.dataForm.modify_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.is_del = 0
        this.api.post(this, 'record_room_insert', (data) => {
          console.log(data)
          this.$message({
            type: 'success',
            message: '新增成功!'
          })
          that.modalClose()
          // this.load({ pagesize: this.pagePize, page: this.currentPage })
        }, this.dataForm)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>