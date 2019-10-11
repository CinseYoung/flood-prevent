<template>
  <el-form :model="dataForm" label-width="100px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px" :inline="true" label-position="right">
    <el-form-item label="用户账号" prop="account">
      <el-input v-model="dataForm.account" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="dataForm.name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-input v-model="dataForm.sex" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="dataForm.email" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="用户手机" prop="phone">
      <el-input v-model="dataForm.phone" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="行政区划">
      <el-autocomplete v-model="dataForm.area" style="width:200px" :fetch-suggestions="querySearch" placeholder="请输入行政区划"></el-autocomplete>
    </el-form-item>
    <el-form-item label="单位" prop="unit">
      <el-input v-model="dataForm.unit" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="账户状态" prop="status">
      <el-select filterable v-model="dataForm.status" placeholder="账户状态" style="width:200px">
        <el-option label="正常" value="1"></el-option>
        <el-option label="异常" value="0"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [],
      person: [],
      yjdj: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      muban: [],
      dataForm: {
        account: '',
        name: '',
        sex: '',
        phone: '',
        area: '',
        unit: '',
        status: '',
        create_date: '{datetime}'
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请输入性别', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请输入账户状态', trigger: 'blur' }
        ],
        create_date: [
          { required: true, message: '请输入创建时间', trigger: 'blur' }
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