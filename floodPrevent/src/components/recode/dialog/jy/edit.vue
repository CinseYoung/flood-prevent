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
    <el-form-item label="借阅人" prop="borrow_user">
      <el-select v-model="dataForm.borrow_user" placeholder="请选择" style="width: 370px;">
        <el-option
            v-for="item in this.usersData"
            :key="item.dxid"
            :label="item.xm"
            :value="item.dxid"
          ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="借阅期限" prop="limit_time">
      <el-date-picker
        v-model="dataForm.limit_time"
        type="datetime"
        placeholder="选择借阅期限"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="借阅时间" prop="borrow_time">
      <el-date-picker
        v-model="dataForm.borrow_time"
        type="datetime"
        placeholder="选择借阅时间"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="申请说明" prop="remark">
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
      roleSelectData: [],
      dataForm: {
        borrow_user: '',
        limit_time: '',
        borrow_time: '',
        creater: '',
        create_time: '',
        remark: ''
      },
      rules: {
        borrow_user: [
          { required: true, message: '请输入借阅人', trigger: 'blur' }
        ],
        limit_time: [
          { required: true, message: '请输入借阅期限', trigger: 'blur' }
        ],
        borrow_time: [
          { required: true, message: '请输入借阅时间', trigger: 'blur' }
        ],
        creater: [{ required: true, message: '请输入操作人', trigger: 'blur' }],
        create_time: [{ required: true, message: '请输入操作时间', trigger: 'blur' }],
        remark: [{ required: true, message: '请输入申请描述', trigger: 'blur' }]
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} },
    usersData: { type: Array, default: () => [] }
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
        this.dataForm.limit_time = moment(this.dataForm.limit_time).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.borrow_time = moment(this.dataForm.borrow_time).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.creater = localStorage.getItem('kpst-username')
        this.api.post(this, 'record_borrow_update', (data) => {
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