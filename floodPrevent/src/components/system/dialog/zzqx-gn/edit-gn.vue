<template>
  <el-form :model="dataForm" label-width="110px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px" :inline="true" label-position="right">
    <el-form-item label="功能名称" prop="mc">
      <el-input v-model="dataForm.mc" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="访问路径" prop="fwlj">
      <el-input v-model="dataForm.fwlj" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="默认显示" prop="mrxs">
      <el-select filterable v-model="dataForm.mrxs" placeholder="是否默认显示" style="width:200px">
        <el-option label="是" value="1"></el-option>
        <el-option label="否" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="ICON" prop="ICON">
      <el-input v-model="dataForm.ICON" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="ms">
      <el-input v-model="dataForm.ms" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="显示顺序" prop="xssx">
      <el-input v-model="dataForm.xssx" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="lx">
      <el-input v-model="dataForm.lx" style="width:200px" maxlength="1"></el-input>
    </el-form-item>
    <el-form-item label="是否禁用" prop="sfjy">
      <el-select filterable v-model="dataForm.sfjy" placeholder="是否禁用" style="width:200px">
        <el-option label="是" value="1"></el-option>
        <el-option label="否" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="上级对象" prop="sjdxid">
      <el-select v-model="dataForm.sjdxid" placeholder="选择上级对象" style="width:200px">
        <el-option :label="item.mc" :value="item.dxid" v-for="(item,index) in funList" :key="index"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['data'],
  data() {
    return {
      funList: '',
      dataForm: {
        mc: '',
        fwlj: '',
        mrxs: '',
        ICON: '',
        sfjy: '',
        lx: '',
        xssx: '',
        zhgxsj: '{datetime}',
        dxid: '{uuid}',
        sjdxid: ''
      },
      rules: {
        mc: [
          { required: true, message: '请输入功能名称', trigger: 'blur' }
        ],
        fwlj: [
          { required: true, message: '请输入访问路径', trigger: 'blur' }
        ],
        xssx: [
          { required: true, message: '请输入显示顺序', trigger: 'blur' }
        ],
        lx: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        sfjy: [
          { required: true, message: '请选择是否禁用', trigger: 'blur' }
        ]
      }
    }
  },
  computed: mapState(['currentRow']),
  methods: {
    result(data) {
      this.funList = data
    },
    submitForm(that) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.api.post(this, 'edit_gn', () => {
          this.$message.success('更新成功')
          that.modalClose() // 关闭弹窗
          that.reLoad() // 刷新数据
          this.$store.commit('clearRow') // 重置表格选中状态
        }, this.dataForm)
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  },
  created() {
    for (const key in this.data) {
      this.dataForm[key] = this.data[key]
    }
    this.api.get(this, 'gn_list', this.result)
    this.dataForm.sjdxid = this.currentRow.sjdxid
  }
}
</script>