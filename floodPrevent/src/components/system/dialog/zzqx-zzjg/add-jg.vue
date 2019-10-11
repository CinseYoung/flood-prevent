<template>
  <el-form :model="dataForm" label-width="100px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px" :inline="true" label-position="right">
    <el-form-item label="单位名称" prop="name">
      <el-input v-model="dataForm.name" style="width:200px" disabled=""></el-input>
    </el-form-item>
    <el-form-item label="上级单位" prop="sjdw">
      <el-select filterable v-model="dataForm.sjdw" clearable placeholder="上级单位">
        <el-option label="单位一" value="0"></el-option>
        <el-option label="单位二" value="1"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      dataForm: {
        name: '',
        sjdw: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入单位名称', trigger: 'blur' }
        ],
        sjdw: [
          { required: true, message: '请选择上级单位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(that) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        const params = {
          guid: this.data.guid,
          sjdwdxid: this.dataForm.sjdw
        }
        this.api.post(this, 'set_upper_zzjg', () => {
          this.$message({
            type: 'success',
            message: '设置成功!'
          })
          that.modalClose()
          that.reLoad()
        }, params)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    modalClose() {
      this.$emit('update:dialogVisible', false) // 直接修改父组件的属性
    }
  },
  created() {
    this.dataForm.name = this.data.dwmc
  }
}
</script>