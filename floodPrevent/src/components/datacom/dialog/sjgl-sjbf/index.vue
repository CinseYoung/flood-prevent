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
    <el-form-item label="表名" prop="table_name">
      <el-cascader @change="handlechange" v-model="dataForm.table_name" :options="inidata" :props="SetKesDept" clearablev style="width:200px"></el-cascader>
    </el-form-item>
    <el-form-item label="标识符" prop="identifier">
      <el-input v-model="dataForm.identifier" disabled style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="备份类型" prop="type">
      <el-input v-model="dataForm.type" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="自定以SQL" prop="sql">
      <el-input
        v-model="dataForm.sql"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        style="width:510px;"
      ></el-input>
    </el-form-item>
    <el-form-item label="数据源说明" prop="describe">
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
      initObj: {},
      inidata: [],
      SetKesDept: {
        value: 'lable',
        label: 'name'
        // children: 'children'
      },
      parent_lablename: [
        { name: '流域模型对象表结构', lable: 'LY' },
        { name: '湖泊模型对象表结构', lable: 'HP' },
        { name: '河流模型对象表结构', lable: 'HL' },
        { name: '测站模型对象表结构', lable: 'CZ' },
        { name: '大坝模型对象表结构', lable: 'DB' },
        { name: '水电站模型对象表结构', lable: 'SDZ' },
        { name: '水闸模型对象表结构', lable: 'SZ' },
        { name: '橡胶坝模型对象表结构', lable: 'XJB' },
        { name: '泵站模型对象表结构', lable: 'BZ' },
        { name: '堤防（段）模型对象表结构', lable: 'DF' },
        { name: '渠道模型对象表结构', lable: 'QD' },
        { name: '涵洞模型对象表结构', lable: 'HD' },
        { name: '桥梁模型对象表结构', lable: 'QL' },
        { name: '水厂模型对象表结构', lable: 'SC' },
        { name: '取水口模型对象表结构', lable: 'QSK' },
        { name: '排污口模型对象表结构', lable: 'PWK' },
        { name: '水库工程模型对象表结构', lable: 'SK' },
        { name: '灌区工程模型对象表结构', lable: 'GQ' },
        { name: '农村供水工程模型对象表结构', lable: 'NCGS' },
        { name: '闸站工程模型对象表结构', lable: 'ZZ' },
        { name: '自然人模型对象表结构', lable: 'ZRR' },
        { name: '单位模型对象表结构', lable: 'DW' },
        { name: '行政区划模型对象表结构', lable: 'XZQH' },
        { name: '流域片区模型对象表结构', lable: 'LYPQ' },
        { name: '水资源分区模型对象表结构', lable: 'SZY' },
        { name: '水功能区模型对象表结构', lable: 'SGNQ' },
        { name: '地表水水源地模型对象表结构', lable: 'SYDB' },
        { name: '地下水水源地模型对象表结构', lable: 'SYDX' },
        { name: '水土保持分区模型对象表结构', lable: 'STBC' },
        { name: '采砂分区模型对象表结构', lable: 'CS' },
        { name: '监控点模型对象表结构', lable: 'JKD' },
        { name: '多媒体模型对象表结构', lable: 'DMT' }
      ],
      dataForm: {
        table_name: '',
        identifier: '',
        type: '',
        sql: '',
        describe: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        table_name: [
          { required: true, message: '请填写数据源名称', trigger: 'change' }
        ],
        identifier: [
          { required: true, message: '请填写模型名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择', trigger: 'change' }
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
    this.load()
  },
  methods: {
    load() {
      this.api.get(this, 'data_sjgl_alllist', this.result)
    },
    result(data) {
      this.resetArray(data)
    },
    resetArray(data) {
      for (var val of this.parent_lablename) {
        for (var b of data) {
          const lablename = b.lable.split('_')[0]
          if (val.lable === lablename) {
            if (val.children) {
              val.children.push(b)
            } else {
              val.children = [b]
            }
          }
        }
      }
      this.inidata = this.parent_lablename
      // this.$set(this.parent_lablename, initdata)
      console.log(this.inidata)
    },
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        console.log(this.dataForm)
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    handlechange(val) {
      this.dataForm.identifier = val[1]
    }
  }
}
</script>