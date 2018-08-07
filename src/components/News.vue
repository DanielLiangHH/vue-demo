<template>
	<div>
		<h3>新闻页</h3>
		<ul>
			<li v-for='(item,index) in news'>
				{{item}}
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name : 'news',
		data(){
			return {
				news : ['111','222','333','444','555']
			}
		}
	}
</script>
<style scoped>
li{
	border-bottom: 1px dashed #ccc;
}
</style>
