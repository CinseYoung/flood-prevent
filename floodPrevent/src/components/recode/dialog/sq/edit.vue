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
    <el-form-item label="被授权人" prop="user">
      <el-select v-model="dataForm.user" multiple placeholder="请选择" style="width: 370px;">
        <el-option
            v-for="item in this.usersData"
            :key="item.dxid"
            :label="item.xm"
            :value="item.dxid"
          ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="权限"  prop="authorization">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="dataForm.authorization" @change="handleCheckedCitiesChange" style="display: inline-block;margin-left: 15px;">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script>
import moment from 'moment'
const cityOptions = ['查看', '修改', '删除', '下载']
export default {
  data() {
    return {
      checkAll: false,
      cities: cityOptions,
      isIndeterminate: false,
      roleSelectData: [],
      dataForm: {
        user: '',
        authorization: []
      },
      rules: {
        user: [
          { required: true, message: '请选择被授权用户', trigger: 'blur' }
        ],
        authorization: [{ required: true, message: '请选择权限', trigger: 'blur' }]
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} },
    usersData: { type: Array, default: () => [] }
  },
  mounted() {
    for (var key in this.data) {
      this.dataForm[key] = this.data[key]
    }
  },
  methods: {
    submitForm(that) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.dataForm.modify_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
        this.dataForm.record_id = this.$route.params.row.id
        this.dataForm.user = this.dataForm.user.join(',')
        this.dataForm.authorization = this.dataForm.authorization.join(',')
        this.dataForm.creater = localStorage.getItem('kpst-username')
        this.api.post(this, 'record_auth_update', (data) => {
          this.$message({
            type: 'success',
            message: '新增成功!'
          })
          that.modalClose()
          that.reLoad()
        }, this.dataForm)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    handleCheckAllChange(val) {
      this.dataForm.authorization = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>