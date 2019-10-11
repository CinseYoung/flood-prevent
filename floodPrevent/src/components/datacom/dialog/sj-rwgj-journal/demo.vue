<template>
  <el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template
      slot="dateCell"
      slot-scope="{date, data}">
      <p :class="data.isSelected ? 'is-selected' : ''" >
        {{ data.day.split('-').slice(1).join('-') }} 
        <span v-for="val in dataarray" :key="val">
          {{val.date==data.day?val.deta:''}}
        </span>
      </p>
    </template>
  </el-calendar>
</template>
<script>
export default {
  data() {
    return {
      dataarray: [
        {
          date: '2019-09-07',
          deta: '123'
        },
        {
          date: '2019-09-07',
          deta: '123'
        },
        {
          date: '2019-09-20',
          deta: '456'
        }
      ],
      yj_levle: [
        { value: '1级', label: '1级' },
        { value: '2级', label: '2级' }
      ],
      dataForm: {
        task_name: '',
        execution_frequency: '',
        state: '',
        addtime: '{datetime}',
        timestamp: '{datetime}'
      },
      rules: {
        data_source_name: [
          { required: true, message: '请填写数据源名称', trigger: 'blur' }
        ],
        model_name: [
          { required: true, message: '请填写模型名称', trigger: 'blur' }
        ],
        model_image: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        state: [
          { required: true, message: '请选择状态', trigger: 'change' }
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
        console.log(this.dataForm)
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>