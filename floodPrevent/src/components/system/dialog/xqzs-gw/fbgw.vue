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
    <el-form-item label="标题" prop="title">
      <el-input v-model="dataForm.title" style="width:200px" clearable></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <el-select
        v-model="dataForm.type"
        placeholder="请选择类型"
        style="width:200px"
      >
        <el-option
          v-for="option in option_type"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="接收人员" prop="recive">
      <el-select
        v-model="dataForm.jsry"
        placeholder="请选择接收人员"
        style="width:200px"
      >
        <el-option
          v-for="option in option_jsry"
          :key="option.value"
          v-bind:value="option.value"
          v-bind:label="option.label"
        ></el-option>
      </el-select>
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
        :accept="'.pdf'"
        :limit="1" 
     
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload_text" >
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传PDF文件,且文件小于100M,一次最多上传1个文件</div>
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
        // title: '',
        // type: '',
        // content: '',
        // jsry: ''
        GWGL: {
          dxid: '112138qw',
          xzqhdxid: ' 876456',
          bt: '43243',
          lx: '1',
          nr: '内容',
          fbr: '1313',
          djsj: '2019-9-24 15:22:22',
          fj: ''
        },
        GWJSRY: {
          dxid: '112888839qw',
          jsry: '12113213',
          jssj: '2019-9-24 15:22:22'
        }
      },
      option_type: [],
      option_jsry: [],
      rules: {
        title: [
          { required: false, message: '请输入标题', trigger: 'blur' }
        ],
        content: [{ required: false, message: '请输入内容', trigger: 'blur' }],
        type: [{ required: false, message: '请选择类型', trigger: 'blur' }],
        recive: [{ required: false, message: '请选择接收人员', trigger: 'blur' }]
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
    submitForm(than) {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.$refs.upload.submit()
        than.modalClose()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    uploadFiles(file) {
      const fd = new FormData()
      fd.append('multipartFiles', file)
      this.axios.post('http://192.168.0.5:8001/api/sl/handle/gwgl_fbgw', fd).then(res => {
        if (res.msg) {
          this.dataForm.GWGL.fj = res.msg
          this.axios.post('http://192.168.0.5:8001/api/sl/crud/rainfall/gwgl_insert', this.dataForm).then(res => {

          })
        }
      })
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