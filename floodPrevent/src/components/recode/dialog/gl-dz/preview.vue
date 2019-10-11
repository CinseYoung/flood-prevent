<template>
  <iframe :src="encodeURI('/api/da/business/common/previewFile?filePath='+this.data.filePath)" width="100%" height="640px"></iframe>
</template>
<script>
export default {
  props: {
    data: { type: Object, default: () => {} }
  }
}
</script>