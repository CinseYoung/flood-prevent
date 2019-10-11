<template>
	<ul :style="{height:heightstyle + 'px'}">
		<li v-for="(val, ind) of list" :key=ind @click="handlecli(val, ind)" :class="[ind == itemindex ? 'chose':null]">
			<span>{{val.name}}</span>
		</li>
	</ul>
</template>

<script>
export default {
  data() {
    return {
      heightstyle: 500,
      list: null,
      itemindex: 0
    }
  },
  created() {
    this.heightstyle = document.body.clientHeight - 100
    this.load()
  },
  methods: {
    handlecli(val, ind) {
      this.$emit('cliitem', val)
      this.itemindex = ind
    },
    load(param) {
      this.api.get(this, 'data_sjgl_left_sjbs', this.result, param)
    },
    result(data) {
      this.list = data
    }
  }
}
</script>

<style scoped lang="scss">
ul{
	padding: 10px;overflow-y: scroll;box-sizing: border-box;margin-top: 3px;
}
li{
	padding: 2px 4px;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;
}
li:hover{
	color: #3083f2;background-color: #f5f7fa;
}
li.chose{
	color: #3083f2;background-color: #f5f7fa;
}
</style>