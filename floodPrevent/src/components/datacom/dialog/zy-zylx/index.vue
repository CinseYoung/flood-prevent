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
    <!--档案类型动态获取 -->
    <el-form-item label="对象编码" prop="serial_number">
      <el-input v-model="dataForm.serial_number" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="对象名称" prop="type_name">
      <el-input v-model="dataForm.type_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="上级编码" prop="sup_object">
      <el-input v-model="dataForm.sup_object" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="对象描述" prop="describe">
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
        serial_number: '',
        type_name: '',
        sup_object: '',
        describe: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        serial_number: [
          { required: true, message: '请输入编码', trigger: 'blur' }
        ],
        type_name: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        sup_object: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        describe: [{ required: false, message: '请输入处理措施', trigger: 'blur' }]
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
        // console.log(this.dataForm)
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>