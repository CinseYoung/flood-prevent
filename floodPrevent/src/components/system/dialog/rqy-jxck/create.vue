<template>
  <el-form :model="dataForm" label-width="100px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px" :inline="true" label-position="right">
    <el-form-item label="仓库名称" prop="ckmc">
      <el-input v-model="dataForm.ckmc" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="环境选择" prop="hjxz">
      <el-select filterable v-model="dataForm.hjxz" placeholder="环境选择" style="width:200px">
        <el-option label="选项一" value="1"></el-option>
        <el-option label="选项二" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属集群" prop="ssjq">
      <el-select filterable v-model="dataForm.ssjq" placeholder="所属集群" style="width:200px">
        <el-option label="TCP" value="1"></el-option>
        <el-option label="UDP" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="认证服务器" prop="rzfwq">
      <el-input v-model="dataForm.rzfwq" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="管理用户" prop="glyh">
      <el-input v-model="dataForm.glyh" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="管理密码" prop="glmm">
      <el-input v-model="dataForm.glmm" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="服务域名" prop="fwym">
      <el-input v-model="dataForm.fwym" style="width:200px" placeholder="需要dns单独解析，指定到集群随便一台服务器即可"></el-input>
    </el-form-item>
    <el-form-item label="服务副本" prop="fwfb">
      <el-input v-model="dataForm.fwfb" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="描述信息" prop="msxx">
      <el-input v-model="dataForm.msxx" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="数据路径" prop="sjlj">
      <el-input v-model="dataForm.sjlj" style="width:200px"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        ckmc: '',
        rzfwq: '',
        glyh: '',
        hjxz: '',
        ssjq: '',
        fwym: '',
        fwfb: '',
        sjlj: ''
      },
      rules: {
        rzfwq: [
          { required: true, message: '请输入认证服务器', trigger: 'blur' }
        ],
        sjlj: [
          { required: true, message: '请输入数据路径', trigger: 'blur' }
        ],
        fwfb: [
          { required: true, message: '请输入服务副本', trigger: 'blur' }
        ],
        fwym: [
          { required: true, message: '请输入服务域名', trigger: 'blur' }
        ],
        glyh: [
          { required: true, message: '请输入容器端口', trigger: 'blur' }
        ],
        ckmc: [
          { required: true, message: '请输入仓库名称', trigger: 'blur' }
        ],
        hjxz: [
          { required: true, message: '请选择环境', trigger: 'blur' }
        ],
        ssjq: [
          { required: true, message: '请选择所属集群', trigger: 'blur' }
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