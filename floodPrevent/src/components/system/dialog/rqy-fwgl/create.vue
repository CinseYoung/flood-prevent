<template>
  <el-form :model="dataForm" label-width="100px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px" :inline="true" label-position="right">
    <el-form-item label="服务名称" prop="fwmc">
      <el-input v-model="dataForm.fwmc" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="端口名称" prop="dkmc">
      <el-input v-model="dataForm.dkmc" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="容器端口" prop="rqdk">
      <el-input v-model="dataForm.rqdk" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="选择应用" prop="xzyy">
      <el-select filterable v-model="dataForm.xzyy" placeholder="选择应用" style="width:200px">
        <el-option label="选项一" value="1"></el-option>
        <el-option label="选项二" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="协议类型" prop="xylx">
      <el-select filterable v-model="dataForm.xylx" placeholder="协议类型" style="width:200px">
        <el-option label="TCP" value="1"></el-option>
        <el-option label="UDP" value="0"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        fwmc: '',
        dkmc: '',
        rqdk: '',
        xzyy: ''
      },
      rules: {
        dkmc: [
          { required: true, message: '请输入端口名称', trigger: 'blur' }
        ],
        rqdk: [
          { required: true, message: '请输入容器端口', trigger: 'blur' }
        ],
        fwmc: [
          { required: true, message: '请输入服务名称', trigger: 'blur' }
        ],
        xzyy: [
          { required: true, message: '请选择应用', trigger: 'blur' }
        ],
        xylx: [
          { required: true, message: '请选择协议类型', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
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
    },
    loadAll() {
      return [
        { value: '码头镇' },
        { value: '九江' },
        { value: '马鞍山' },
        { value: '南京' },
        { value: '总管田' },
        { value: '鹤庆' }
      ]
    }
  }
}
</script>