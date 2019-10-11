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
    <el-form-item label="对象ID" prop="objid">
      <el-input v-model="dataForm.objid" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="上级对象ID" prop="up_objid">
      <el-select filterable clearable  v-model="dataForm.up_objid"   style="width:200px">
        <el-option label="项目一" value="shanghai"></el-option>
        <el-option label="项目二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="对象名称" prop="objname">
      <el-input v-model="dataForm.objname" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="英文名称" prop="e_name">
      <el-input v-model="dataForm.e_name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="对象编码" prop="code">
      <el-input v-model="dataForm.code" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="排序" prop="sort">
      <el-input v-model="dataForm.sort" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="状态" prop="state">
      <el-select filterable clearable  v-model="dataForm.state"   style="width:200px">
        <el-option label="开启" value="1"></el-option>
        <el-option label="关闭" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注" prop="remarks">
      <el-input v-model="dataForm.remarks" style="width:200px"></el-input>
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
        objid: '',
        up_objid: '',
        objname: '',
        e_name: '',
        code: '',
        sort: '',
        state: '',
        remarks: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        objid: [
          { required: true, message: '请填写对象ID', trigger: 'blur' }
        ],
        up_objid: [
          { required: true, message: '请选择上级对象', trigger: 'blur' }
        ],
        objname: [
          { required: true, message: '请填写对象名称', trigger: 'blur' }
        ],
        e_name: [
          { required: true, message: '请填写英文名称', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请填写对象编码', trigger: 'blur' }
        ],
        sort: [
          { required: true, message: '请填写排序', trigger: 'blur' }
        ],
        state: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
        remarks: [
          { required: false, message: '请填写备注', trigger: 'blur' }
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