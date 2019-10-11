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
    <el-form-item label="类别名称" prop="type_name">
      <el-input v-model="dataForm.type_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="类别编码" prop="type_code">
      <el-input v-model="dataForm.type_code" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="文档类别" prop="type">
      <el-select v-model="dataForm.type" placeholder="文档类别">
        <el-option label="电子文档" value="0"></el-option>
        <el-option label="纸质文档" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="创建人" prop="creater">
      <el-input v-model="dataForm.creater" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" prop="create_time">
      <el-date-picker
        v-model="dataForm.create_time"
        type="datetime"
        placeholder="选择创建时间"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="类型状态" prop="is_enabled">
      <el-select v-model="dataForm.is_enabled" placeholder="类型状态" style="width:200px">
        <el-option label="启用" value="1"></el-option>
        <el-option label="停用" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="类别描述" prop="description">
      <el-input
        v-model="dataForm.description"
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
      roleSelectData: [],
      dataForm: {
        type_name: '',
        type_code: '',
        description: '',
        creater: '',
        create_time: '',
        is_enabled: '',
        type: ''
      },
      rules: {
        type_name: [
          { required: true, message: '请输入档案类别名称', trigger: 'blur' }
        ],
        type_code: [
          { required: true, message: '请输入档案类别编码', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择文档类型', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入档案类别描述', trigger: 'blur' }
        ],
        creater: [{ required: true, message: '请输入创建人', trigger: 'blur' }],
        create_time: [{ required: true, message: '请输入创建时间', trigger: 'blur' }],
        is_enabled: [{ required: true, message: '请选择类别状态', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(that) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.dataForm.create_time = moment(this.dataForm.create_time).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.modify_time = moment(this.dataForm.create_time).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.is_del = 0
        this.dataForm.is_enabled = Number(this.dataForm.is_enabled)
        this.api.post(this, 'record_type_insert', (data) => {
         // console.log(data)
          this.$message({
            type: 'success',
            message: '新增成功!'
          })
          that.modalClose()
        }, this.dataForm)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>