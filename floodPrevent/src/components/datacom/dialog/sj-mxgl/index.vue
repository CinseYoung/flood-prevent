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
    <el-form-item label="数据源名称" prop="data_source_name">
      <el-input v-model="dataForm.data_source_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="模型名称" prop="model_name">
      <el-input v-model="dataForm.model_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="模型镜像" prop="model_image">
      <el-select filterable clearable  v-model="dataForm.model_image"   style="width:200px">
        <el-option
          v-for="option in yj_levle"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="状态" prop="state">
      <el-select filterable clearable  v-model="dataForm.state"   style="width:200px">
        <el-option
          value="1"
          label="开启"
        ></el-option>
        <el-option
          value="0"
          label="关闭"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="数据源说明" prop="describe">
      <el-input
        v-model="dataForm.describe"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        style="width:510px;"
      ></el-input>
    </el-form-item> -->
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
        data_source_name: '',
        model_name: '',
        model_image: '',
        state: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        data_source_name: [
          { required: true, message: '请填写数据源名称', trigger: 'blur' }
        ],
        model_name: [
          { required: true, message: '请填写模型名称', trigger: 'blur' }
        ],
        model_image: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        state: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ]
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
        console.log(this.dataForm)
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>