<template>
  <el-form :model="dataForm" label-width="100px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px" :inline="true" label-position="right">
    <el-form-item label="名称" prop="mc">
      <el-input v-model="dataForm.mc" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="类型选择" prop="lx">
      <el-select filterable v-model="dataForm.lx" placeholder="类型选择" style="width:200px">
        <el-option label="1类" value="1"></el-option>
        <el-option label="2类" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图标" prop="tb">
      <el-input v-model="dataForm.tb" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="访问地址" prop="fwdz">
      <el-input v-model="dataForm.fwdz" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="bz">
      <el-input v-model="dataForm.bz" style="width:200px"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      person: [],
      yjdj: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      muban: [],
      dataForm: {
        mc: '',
        lx: '',
        tb: '',
        bz: '',
        fwdz: ''
      },
      rules: {
        lx: [
          { required: true, message: '请选择类型', trigger: 'blur' }
        ],
        tb: [
          { required: true, message: '请选择图标', trigger: 'blur' }
        ],
        mc: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        fwdz: [
          { required: true, message: '请输入访问地址', trigger: 'blur' }
        ]
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
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    }
  },
  created() {
    for (const key in this.data) {
      this.dataForm[key] = this.data[key]
    }
  }
}
</script>