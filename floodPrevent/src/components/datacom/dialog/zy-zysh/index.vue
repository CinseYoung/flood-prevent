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
    <el-form-item label="接口名称" prop="name">
      <el-input v-model="dataForm.name" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="审核时间" prop="time">
      <el-date-picker
        v-model="dataForm.time"
        type="date"
        :picker-options="pickerOptions"
        style="width:200px"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="审核人" prop="examine">
      <el-select
        v-model="dataForm.examine"
        placeholder="请选择应急等级"
        style="width:200px"
        clearable
      >
        <el-option
          v-for="option in yj_levle"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
        <el-form-item label="是否通过" prop="pass">
      <el-select
        v-model="dataForm.pass"
        placeholder="请选择应急等级"
        style="width:200px"
        clearable
      >
        <el-option label="是" value="1"></el-option>
        <el-option label="否" value="0"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="备注" prop="describe">
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
      yj_levle: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      dataForm: {
        name: '',
        time: '',
        examine: '',
        pass: '',
        describe: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        name: [
          { required: true, message: '请填写接口名称', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请选择审核时间', trigger: 'blur' }
        ],
        examine: [
          { required: true, message: '请选择审核人', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '是否通过', trigger: 'change' }
        ],
        describe: [{ required: false, message: '', trigger: 'blur' }]
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      }
    }
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  mounted() {
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