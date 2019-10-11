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
    <el-form-item label="日期" prop="createTime">
      <el-date-picker
        v-model="dataForm.createTime"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions1"
      ></el-date-picker>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="带班领导" prop="lead">
      <el-select
        v-model="dataForm.lead"
        placeholder="请选择带班领导"
        style="width:200px"
        multiple
      >
        <el-option
          v-for="option in lead_name"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="值班人员" prop="person">
      <el-select
        v-model="dataForm.person"
        placeholder="请选择值班人员"
        style="width:200px"
        multiple
      >
        <el-option
          v-for="option in person_name"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      lead_name: [
        { value: '赵武', label: '赵武' },
        { value: '王蒙', label: '王蒙' }
      ],
      person_name: [
        { value: '孙兵', label: '孙兵' },
        { value: '郑武', label: '郑武' }
      ],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      dataForm: {
        createTime: [],
        lead: [],
        person: []
      },
      rules: {
        createTime: [
          { required: true, message: '请选择日期', trigger: 'blur' }
        ],
        lead: [
          { required: true, message: '请选择带班领导', trigger: 'blur' }
        ],
        person: [{ required: true, message: '请选择值班人员', trigger: 'blur' }]
      }
    }
  },
  props: {
    data: { type: Object, default: {}}
  },
  mounted() {
    if (this.data.id) {
      this.dataForm.createTime.push(this.data.start)
      this.dataForm.createTime.push(this.data.end)
      var list = this.data.title.split('，')
      this.dataForm.lead = list[0].split('：')[1].split(',')
      this.dataForm.person = list[1].split('：')[1].split(',')
    }
  },
  methods: {
    submitForm(than) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        var data = Object.assign({}, this.dataForm)
        if (this.dataForm.createTime !== '') {
          data.st = this.dataForm.createTime[0]
          data.et = this.dataForm.createTime[1]
        }
        delete data.createTime
        than.$parent.reload(data)
        than.modalClose()
      })
    },
    deleteDate(than) {
      than.$parent.deleteDate()
      than.modalClose()
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>