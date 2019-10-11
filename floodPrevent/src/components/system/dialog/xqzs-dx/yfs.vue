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
    <el-form-item label="收信人" prop="recive">
      <el-select
        v-model="dataForm.jsrdxid"
        placeholder="请选择收信人"
        style="width:200px"
      >
        <el-option
          v-for="option in option_recive"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="模板名称" prop="dxmb">
      <el-select
        v-model="dataForm.dxmb"
        placeholder="请选择短信模板"
        style="width:200px"
      >
        <el-option
          v-for="option in option_mb"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容" prop="content">
      <el-input
        v-model="dataForm.content"
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
      option_recive: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      option_mb: [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      dataForm: {
        jsrdxid: '',
        content: '',
        dxmb: '',
        time: '{datetime}',
        dxid: '{uuid}'
      },
      rules: {
        recive: [
          { required: true, message: '请选择收信人', trigger: 'blur' }
        ],
        content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
        dxmb: [{ required: false, message: '请选择短信模板', trigger: 'blur' }]
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