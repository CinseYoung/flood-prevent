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
    <el-form-item label="处理日期" prop="start_time">
      <el-date-picker
      v-model="dataForm.start_time"
      type="datetime"
      :picker-options="pickerOptions1"
      value-format="yyyy-MM-dd HH:mm:ss"
      format="yyyy-MM-dd HH:mm:ss"
      placeholder="选择日期时间"
      style="width:200px">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="标题" prop="title">
      <el-input v-model="dataForm.title" style="width:200px" readonly></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="应急等级" prop="yjdj">
      <el-select
        v-model="dataForm.yjdj"
        placeholder="请选择应急等级"
        style="width:200px"
        disabled
      >
        <el-option
          v-for="option in yj_levle"
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
        readonly
      ></el-input>
    </el-form-item>
    <el-form-item label="处理措施" prop="handle_step">
      <el-input
        v-model="dataForm.handle_step"
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
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      dataForm: {
        start_time: '',
        title: '',
        yjdj: '',
        content: '',
        handle_step: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        yjdj: [
          { required: true, message: '请选择应急等级', trigger: 'blur' }
        ],
        content: [{ required: false, message: '请输入内容', trigger: 'blur' }],
        start_time: [{ required: true, message: '请选择日期', trigger: 'blur' }],
        handle_step: [{ required: false, message: '请输入处理措施', trigger: 'blur' }]
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
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>