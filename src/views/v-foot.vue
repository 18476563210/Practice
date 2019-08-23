<template>
	<div class="foot">
		<div class="bg">
			<div class="footText">
				<div v-for="text in textList" :key="text.id" class="four">
					<img :src="text.textImg">
					<h2>{{text.content}}</h2>
				</div>
			</div>
		</div>
		<div class="bg2">
			<div class="footMiddle">
				<div class="footLeft">
					<div class="official">
						<h3>官方客服电话</h3>
						<h3>400-060-2008</h3>
						<p>周一至周日：9:00-22:00</p>
					</div>

					<div class="telphone">
						<div class="weibo">
							<img src="../assets/search.png" alt="">
							<p>微博：168888@.com</p>
						</div>
						<div class="qq">
							<img src="../assets/search.png" alt="">
							<p>QQ：1268888</p>
						</div>
					</div>
				</div>

				<div class="footCenter">
					<div v-for="(tip,index) in tipList" :key="tip.id">
							<h3>{{tip.title}}</h3>
							<ul v-if="index==3" style="border:none;">
								<li><a href="">{{tip.one}}</a></li>
								<li><a href="">{{tip.two}}</a></li>
								<li><a href="">{{tip.three}}</a></li>
								<li><a href="">{{tip.four}}</a></li>
							</ul>
							<ul v-else>
								<li><a href="">{{tip.one}}</a></li>
								<li><a href="">{{tip.two}}</a></li>
								<li><a href="">{{tip.three}}</a></li>
								<li><a href="">{{tip.four}}</a></li>
							</ul>

					</div>
				</div>
					<div class="footRight">
						<img src="../assets/ad10.jpg" alt="">
						<p>官方微信</p>
					</div>
			</div>
			<div class="bottom">
				<div class="bottomLeft">
					<ul>
						<li>网页地图</li>|&nbsp;&nbsp;&nbsp;
						<li>法律声明</li>|&nbsp;&nbsp;&nbsp;
						<li>隐私条款</li>|&nbsp;&nbsp;&nbsp;
						<li>服务条款</li>
					</ul>
				</div>
				<div class="bottomCenter">
					<p>鲁ICP备15042201号-1 Copyright ©2016 康丽妍 版权所有</p>
				</div>
				<div class="bottomRight"></div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'foot',
		data() {
			return {
				textList: [{
						id: 1,
						textImg: require("../assets/com_01.png"),
						content: '100%正品保证',
					},
					{
						id: 2,
						textImg: require("../assets/com_02.png"),
						content: '新人首单免邮',
					},
					{
						id: 3,
						textImg: require("../assets/com_03.png"),
						content: '7天无理由退换货',
					},
					{
						id: 4,
						textImg: require("../assets/com_04.png"),
						content: '首次退换货免邮',
					}
				],
	
				tipList: [{
						id: 1,
						title: '购物指南',
						one: '免费注册',
						two: '购物流程',
						three: '会员介绍',
						four: '常见问题',
					},
					{
						id: 2,
						title: '配送方式',
						one: '上门自提',
						two: '配送服务查询',
						three: '配送费收取标准',
						four: '海外配送',
					},
					{
						id: 3,
						title: '支付方式',
						one: '货到付款',
						two: '在线支付',
						three: '分期付款',
						four: '公司转账',
					},
					{
						id: 4,
						title: '售后服务',
						one: '售后政策',
						two: '价格保护',
						three: '返修/退换货',
						four: '取消订单',
					}
				],
			}
		}
	}
</script>

<style>
</style>
