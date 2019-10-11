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
    <el-form-item label="记录人" prop="person">
      <el-input v-model="dataForm.person" style="width:200px" clearable></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="内容" prop="content">
      <el-input
        v-model="dataForm.content"
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 6}"
        style="width:510px;"
      ></el-input>
    </el-form-item>
    <el-form-item label="档案文件">
      <el-upload
        ref="upload"
        class="uploadFile"
        drag
        action
        multiple
        :auto-upload="false"
        :before-upload="uploadFiles"
        :on-success="uploadSuccess"
        :accept="'.mp3,.wma,.ape,.midi'"
        :limit="5" 
     
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload_text" >
          将录音文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传.mp3,.wma,.ape,.midi文件,且文件小于100M,一次最多上传5个文件</div>
      </el-upload>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      dataForm: {
        person: '',
        content: ''
      },
      rules: {
        person: [
          { required: true, message: '请输入人物名称', trigger: 'blur' }
        ],
        content: [{ required: false, message: '请输入内容', trigger: 'blur' }]
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
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    uploadFiles(file) {
      const fd = new FormData()
      fd.append('multipartFiles', file)
      this.axios.post('/record/business/common/upload', fd).then({})
      return false // 已发送请求，阻止实际上传
    },
    uploadSuccess() {
      this.$message({
        type: 'success',
        message: '上传成功'
      })
    }
  }
}
</script>