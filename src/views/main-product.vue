<template>
	<!-- 产品列表页面 -->
	<div id="product">
		<div class="container">
			<!-- 顶部面包屑导航栏 -->
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">全部</el-breadcrumb-item>
				<el-breadcrumb-item>内衣</el-breadcrumb-item>
				<el-breadcrumb-item>情侣睡衣</el-breadcrumb-item>
			</el-breadcrumb>
			<!-- 顶部面包屑导航栏结束 -->
			<!-- 商品导航栏开始 -->
			<div>
				<el-row :gutter="5" class="title" v-for="(item,i) in navTitles" :key="item.id">
					<el-col :span="2" class="left">
						<div class="grid-content bg-purple">
							<font>{{item.cname}}&nbsp;:</font>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple"><span v-for="(list,index) in item.children" class="listVal">{{list.cname}}</span></div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content bg-purple more" ><span>更多+</span></div>
					</el-col>
				</el-row>
				<el-row :gutter="5" class="title">
					<el-col :span="2" class="left">
						<div class="grid-content bg-purple">
							<font>高级选项&nbsp;:</font>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="grid-content bg-purple">
							<el-menu class="el-menu-demo selected" mode="horizontal">
								<el-submenu :index="String(i)" v-for="(item,i) in 10">
									<template slot="title">材质{{i+1}}</template>
									<el-menu-item index="String(i)+'-1'">选项1</el-menu-item>
									<el-menu-item index="String(i)+'-2'">选项2</el-menu-item>
									<el-menu-item index="String(i)+'-3'">选项3</el-menu-item>
								</el-submenu>
							</el-menu>
						</div>
					</el-col>
					<el-col :span="2">
						<div class="grid-content bg-purple more"><span>更多+</span></div>
					</el-col>
				</el-row>
			</div>
			<!-- 商品导航栏结束 -->
			<!-- 商品列表开始 -->
			<div class="productList">
				<el-row :gutter="20" justify="space-between" type="flex">
					<!-- 左侧栏 -->
					<el-col :span="3" style="height: 3080px;border: 1px solid #eee;" class="aside">
						<p>商品精选<span>广告</span></p>
						<div class="grid-content bg-purple" v-for="item in 9">
							<img src="../assets/images/shop01.png" alt="毛衣" class="shopImg" width="130" height="155">
							<p class="price">$1299.00</p>
							<h4 class="shopName"><a href="">芊之雅居家服睡衣女纯棉长袖套装秋冬季</a></h4>
							<p class="evaluate">已有<span>1400+</span>人评价</p>
						</div>
					</el-col>
					<!-- 右侧列表 -->
					<el-col :span="21" style="height: 3080px;margin-left: 10px;border: 1px solid #eee;">
						<div class="grid-content bg-purple shoplist">
							<div class="top">
								<ul>
									<li class="active">综合排序</li>
									<li>销量</li>
									<li>价格</li>
									<li>评论数</li>
									<li>新品</li>
								</ul>
								<a href="" class="next">></a>
								<a href="" class="prev">
									<</a> <p style="float: right;" class="total">共<strong>111.8</strong>万件商品 <i>1</i>/100</p>
							</div>
							<div class="bot">
								<div class="address">
									<span>配送至</span>
									<el-dropdown class="sel" trigger="click" placement="bottom-start">
										<span class="el-dropdown-link">
											<b>请选择你的地址</b><i class="el-icon-arrow-down el-icon--right"></i>
										</span>
										<el-dropdown-menu slot="dropdown" style="width: 150px;">
											<el-dropdown-item>黄金糕</el-dropdown-item>
											<el-dropdown-item>狮子头</el-dropdown-item>
											<el-dropdown-item>螺蛳粉</el-dropdown-item>
											<el-dropdown-item>螺蛳粉</el-dropdown-item>
											<el-dropdown-item>螺蛳粉</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
								</div>
								<ul class="send">
									<li>
										<label class="c-checkbox">
											<input type="checkbox">
											<span></span>
											<i>顺风配送</i>
										</label>
									</li>
									<li>
										<label class="c-checkbox">
											<input type="checkbox">
											<span></span>
											<i>货到付款</i>
										</label>
									</li>
									<li>
										<label class="c-checkbox">
											<input type="checkbox">
											<span></span>
											<i>仅显示有货</i>
										</label>
									</li>
								</ul>
								<div class="search">
									<input type="text" placeholder="在结果中搜索">
									<a href="###" class="sure">确定</a>
								</div>
							</div>
						</div>
						<div class="lists">
							<el-row :gutter="20" class="listsContainer">
								<el-col :span="6" v-for="(item,i) in shopLists" :key="item.id">
									<div class="grid-content bg-purple content">
										<img :src=item.imgPath alt="" class="shopImg">
										<p class="price">${{item.price}}</p>
										<h4 class="shopName"><a href="">{{item.details}}</a></h4>
										<p class="evaluate">已有<span>{{item.evaluateSum}}+</span>人评价</p>
										<a href="" class="deal">月成交<span>{{item.turnover}}+</span>笔
											<img src="../assets/images/user_start.jpg" alt="">
										</a>
									</div>
								</el-col>
							</el-row>
						</div>
						<!-- 分页 -->
						<el-pagination :page-size="20" :pager-count="5" layout="prev, pager, next, total, jumper" :total="1000"
						 prev-text="上一页" next-text="下一页" class="pages" @current-change="handleCurrentChange">
						</el-pagination>
						<div class="bottom">
							<span style="float: left;margin: 0 40px;">你是不是想找</span>
							<ul>
								<li><a href="">睡衣女秋</a>|</li>
								<li><a href="">亲子睡衣</a>|</li>
								<li><a href="">睡衣女纯棉</a>|</li>
								<li><a href="">睡衣女秋</a>|</li>
								<li><a href="">睡衣女秋</a>|</li>
								<li><a href="">睡衣女秋</a>|</li>
								<li><a href="">亲子睡衣</a></li>
							</ul>
						</div>
							<el-input v-model="bottomInput" placeholder="请输入内容" class="botSearch">
								<el-button slot="append">搜索</el-button>
							</el-input>
					</el-col>
				</el-row>

			</div>
			<!-- 商品列表结束 -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'main-product',
		data() {
			return {
				navTitle: 
				[{id: 1,title: "内衣",list: ["睡衣/家居服","情侣睡衣","12","情侣睡衣","12"]},
					{
						id: 2,
						title: "男士",
						list: [
							"睡衣/家居服",
							"情侣睡衣",
							"12",
							"情侣睡衣",
							"12",
							"爱的魔力转圈"
						]
					},
					{
						id: 3,
						title: "季节",
						list: [
							"睡衣/家居服",
							"情侣睡衣",
							"爱的魔力转圈",
						]
					},
				],
				navTitles:null,
				shopLists:null,
				bottomInput:'',
			}
		},
		methods: {
			getshopLists(page){
				page = Number(page);
				this.$http.get('http://192.168.31.211:8081/product/getListByPage',{params:{page:page}}).then(function(result) {
					// console.log(result)
					if(result.status==200){
						this.shopLists = result.body.data.productList
					}else{
						return 404
					}
				})
			},
			handleCurrentChange(val){
				var page = `${val}`;
				this.getshopLists(page)
			},
			getnavTitles(){
				this.$http.get('http://192.168.31.211:8081/category/getAll').then(function(result) {
					console.log(result)
					if(result.status==200){
						this.navTitles = result.body.data
						console.log(this.navTitles)
					}else{
						return 404
					}
				})
				
			}
		},
		mounted: function() {
			this.getshopLists(1),
			this.getnavTitles()
		},
		updated:function(){
			
		}
	}
</script>

<style>
	@import url("../assets/css/main-product.css");
</style>
