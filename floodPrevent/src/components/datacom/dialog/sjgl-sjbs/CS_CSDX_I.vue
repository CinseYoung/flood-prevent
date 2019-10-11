<template>
  <el-form
    :model="dataForm"
    label-width="120px"
    ref="dataForm"
    size="mini"
    :rules="rules"
    style="margin-right: 20px"
    :inline="true"
    label-position="right"
  > 
    <el-form-item label="采砂对象ID" prop="DXID">
      <el-input v-model="dataForm.DXID" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="对象名称" prop="DXMC">
      <el-input v-model="dataForm.DXMC" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="对象编码" prop="DXBM">
      <el-input v-model="dataForm.DXBM" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="是否消亡" prop="SFXW">
      <el-select filterable clearable  v-model="dataForm.SFXW"   style="width:200px">
        <el-option
          value="1"
          label="是"
        ></el-option>
        <el-option
          value="0"
          label="否"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="数据源说明" prop="BZ">
      <el-input
        v-model="dataForm.BZ"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        style="width:530px;"
      ></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        DXID: [
          { required: true, message: '请填写名称', trigger: 'blur' }
        ],
        DXMC: [
          { required: true, message: '请填写数据类型', trigger: 'blur' }
        ],
        DXBM: [
          { required: true, message: '请填写数据类型', trigger: 'blur' }
        ],
        SFXW: [
          { required: true, message: '请选择', trigger: 'change' }
        ]
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  mounted() {
    this.dataForm = Object.assign(this.data)
    // for (var key in this.data) {
    //   this.dataForm[key] = this.data[key]
    // }
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
