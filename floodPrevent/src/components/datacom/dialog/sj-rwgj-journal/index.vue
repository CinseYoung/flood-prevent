<template>
  <div class="lorem">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, rerum dolorem, ab reiciendis quos natus eum sit placeat odio impedit iste maiores obcaecati magnam eveniet doloribus id? Labore, itaque repellat!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores aspernatur ut sequi, dolorum magni fugiat voluptatem natus eos qui vero suscipit consequuntur ad error at magnam aliquam ducimus labore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit, rerum minima tenetur tempore, adipisci dolorem atque quibusdam eius nisi laborum? Alias, natus. Esse, repellendus! Ipsam possimus doloremque corporis corrupti.
  </div>
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
      // this.$refs.dataForm.validate(valid => {
      //   if (!valid) {
      //     return false
      //   }
      //   // this.login()
      // })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.lorem{
  text-indent: 20px;
}
</style>