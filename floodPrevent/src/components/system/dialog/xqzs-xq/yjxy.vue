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
    <el-form-item label="标题" prop="title">
      <el-input v-model="dataForm.title" style="width:200px"></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="应急等级" prop="yj_level">
      <el-select
        v-model="dataForm.yj_level"
        placeholder="请选择应急等级"
        style="width:200px"
      >
        <el-option
          v-for="option in yjdj"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选择模板" prop="mould">
      <el-select
        v-model="dataForm.mould"
        placeholder="请选择模板"
        style="width:200px"
      >
        <el-option
          v-for="option in muban"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="通知人员" prop="select_person">
      <el-select v-model="dataForm.select_person" placeholder="请选择通知人员">
        <el-option
          v-for="option in person"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容" prop="remark">
      <el-input
        v-model="dataForm.remark"
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
      person: [],
      yjdj: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      muban: [],
      dataForm: {
        title: '',
        yj_level: '',
        mould: '',
        select_person: '',
        remark: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        yj_level: [
          { required: true, message: '请选择应急等级', trigger: 'blur' }
        ],
        mould: [{ required: true, message: '请选择模板', trigger: 'blur' }],
        select_person: [{ required: true, message: '请选择通知人员', trigger: 'blur' }],
        remark: [{ required: false, message: '请输入备注', trigger: 'blur' }]
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