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
    <el-form-item label="模板名称" prop="mb_name">
      <el-input v-model="dataForm.mb_name" style="width:200px"></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="类型" prop="type">
      <el-select
        v-model="dataForm.type"
        placeholder="请选择类型"
        style="width:200px"
      >
        <el-option
          v-for="option in leixing"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="短信签名" prop="dxqm">
      <el-input v-model="dataForm.dxqm" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="模板内容" prop="mb_content">
      <el-input
        v-model="dataForm.mb_content"
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
      leixing: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      dataForm: {
        mb_name: '',
        type: '',
        dxqm: '',
        mb_content: ''
      },
      rules: {
        mb_name: [
          { required: true, message: '请输入模板名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择类型', trigger: 'blur' }
        ],
        dxqm: [{ required: true, message: '请输入签名', trigger: 'blur' }],
        mb_content: [{ required: false, message: '请输入模板内容', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(than) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        than.modalClose()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>