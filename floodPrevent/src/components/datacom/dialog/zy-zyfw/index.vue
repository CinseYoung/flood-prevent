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
    <el-form-item label="对象编码" prop="code">
      <el-input v-model="dataForm.code" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="对象类型" prop="object_type">
      <el-select
        v-model="dataForm.object_type"
        placeholder="请选择应急等级"
        style="width:200px"
        clearable
      >
        <el-option
          v-for="option in yj_levle"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="接口名称" prop="interface_name">
      <el-input v-model="dataForm.interface_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="访问地址" prop="address">
      <el-input v-model="dataForm.address" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="请求类型" prop="request_type">
      <el-select
        v-model="dataForm.request_type"
        placeholder="请选择应急等级"
        style="width:200px"
        clearable
      >
        <el-option
          v-for="option in yj_levle"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否可变参" prop="variable">
      <el-select
        v-model="dataForm.variable"
        placeholder="请选择应急等级"
        style="width:200px"
        clearable
      >
        <el-option
          v-for="option in yj_levle"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所有权ID" prop="provider">
      <el-input v-model="dataForm.provider" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="审核权ID" prop="audit_unit">
      <el-input v-model="dataForm.audit_unit" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="describe">
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
        code: '',
        object_type: '',
        interface_name: '',
        address: '',
        request_type: '',
        variable: '',
        provider: '',
        audit_unit: '',
        describe: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        code: [
          { required: true, message: '请输入编码', trigger: 'blur' }
        ],
        object_type: [
          { required: true, message: '请选择对象类型', trigger: 'change' }
        ],
        interface_name: [{ required: true, message: '请输入内容', trigger: 'blur' }],
        address: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        request_type: [
          { required: true, message: '请输入标题', trigger: 'change' }
        ],
        variable: [
          { required: true, message: '请输入标题', trigger: 'change' }
        ],
        provider: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        audit_unit: [
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