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
    <el-form-item label="上级菜单" prop="sup_name">
      <el-select filterable clearable  v-model="dataForm.sup_name"   style="width:200px">
        <el-option label="项目一" value="shanghai"></el-option>
        <el-option label="项目二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="字典名称" prop="name">
      <el-input v-model="dataForm.name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="字典编码" prop="code">
      <el-input v-model="dataForm.code" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="状态" prop="state">
      <el-select filterable clearable v-model="dataForm.state"  style="width:200px">
        <el-option label="开启" value="1"></el-option>
        <el-option label="禁用" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注" prop="remarks">
      <el-input
        v-model="dataForm.remarks"
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
        up_name: '',
        name: '',
        code: '',
        state: '',
        remarks: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        up_name: [
          { required: false, message: '请选择上级菜单', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请填写字典名称', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请填写字典编码', trigger: 'blur' }
        ],
        state: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ],
        remarks: [
          { required: false, message: '请填写描述', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  mounted() {
    //console.log(this.data)
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