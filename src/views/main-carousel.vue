<template>
	<div>
		<!-- 轮播图开始 -->
		<div class="myCarousal">
			<el-carousel :interval="5000" arrow="always" height="550px">
				<el-carousel-item v-for="item in itemList" :key="item.id">
					<img :src="item.imgPath">
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 轮播图结束 -->

		<!-- 新品热卖开始 -->
		<div class="newstitle">
			<div class="leftTitle">
				<h2>1F</h2>
				<h3>新品热卖</h3>
				<p>New Arrivals</p>
			</div>
			<p style="margin: 50px 20px 0 0;">更多></p>
		</div>
		<div class="floor1">
			<div class="newItem" v-for="news in newsItem" :key="news.id">
				<img :src="news.newsImg">
				<div>
					<h2>{{news.title}}</h2>
					<h4>langliyan</h4>
					<p>{{news.content}}</p>
				</div>
			</div>
		</div>
		<!-- 新品热卖结束 -->

		<!-- 一元秒杀开始 -->
		<div class="seckill">
			<img src="../assets/ad10.jpg" alt="">
		</div>
		<!-- 一元秒杀结束 -->

		<!-- 爆款热卖开始 -->
		<div class="newstitle">
			<div class="leftTitle">
				<h2 style="color: purple;">2F</h2>
				<h3>爆款热卖</h3>
				<p>Hot explosion models</p>
			</div>
			<p style="margin: 50px 20px 0 0;">更多></p>
		</div>
		<div class="floor2">
			<div class="fLeft">
				<!-- 爆款热卖左边 -->
				<div class="leftPic">
					<img src="../assets/ad10.jpg" alt="">
				</div>
				<div class="rightPic">
					<img src="../assets/ad10.jpg" alt="">
				</div>
			</div>

			<!-- 爆款热卖右边 -->
			<div class="fRight">
				<div class="fRight_item" v-for="rpic in rpicList" :key="rpic.id">
					<img :src="rpic.rpicImg">
					<p>{{rpic.introduce}}</p>
					<div class="price">
						<p class="red">{{rpic.price}}</p>
						<p class="black">￥168.00</p>
					</div>

				</div>
			</div>
		</div>
		<!-- 爆款热卖结束 -->

		<!-- 推荐商品开始 -->
		<div class="newstitle">
			<div class="leftTitle">
				<h2 style="color: orange;">3F</h2>
				<h3>爆款热卖</h3>
				<p>Hot explosion models</p>
			</div>
			<p style="margin: 50px 20px 0 0;">更多></p>
		</div>
		<div class="total">
			<div class="floor3">
				<div class="fLeft">
					<!-- 爆款热卖左边 -->
					<div class="leftPic">
						<img src="../assets/ad10.jpg" alt="">
					</div>
					<div class="rightPic2">
						<div class="special">
							<img src="../assets/ad10.jpg" alt="">
						</div>
						<div class="font">
							<h1>新品抢先购</h1>
							<p>百款冬装限时优惠</p>
						</div>
					</div>
				</div>
				<div class="pick">
					<div class="pick_item" v-for="picks in pickItem" :key="picks.id">
						<img :src="picks.picksImg">
						<div class="pickText">
							<h2>{{picks.pickstitle}}</h2>
							<h4>langliyan</h4>
							<p>{{picks.pickscontent}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="aside">
				<div class="pic">
					<img src="../assets/ad10.jpg" alt="">
				</div>
				<div class="fontaside">
					<h1 style="color:purple;font-size: 24px;">皮绒狂欢盛宴</h1>
					<p>最高满399减100</p>
					<button>立即进入</button>
				</div>
			</div>
		</div>
		<!-- 推荐商品结束 -->

		<!-- 性感风情开始 -->
		<div class="newstitle">
			<div class="leftTitle">
				<h2 style="color: yellowgreen;">4F</h2>
				<h3>性感风情</h3>
				<p>Sexy amorous feelings</p>
			</div>
			<p style="margin: 50px 20px 0 0;">更多></p>
		</div>
		<div class="floor4">
			<div class="leftF6">
				<div class="sexImg">
					<img src="../assets/ad10.jpg" alt="">
				</div>
			</div>

			<div class="rightF6">
				<div class="sexy_item" v-for="sexy in sexyItem" :key="sexy.id">
					<img :src="sexy.sexyImg">
					<div class="pickText">
						<h2>{{sexy.sexytitle}}</h2>
						<p>{{sexy.sexycontent}}</p>
					</div>
				</div>
			</div>

		</div>
		<!-- 性感风情结束 -->

		<!-- 情路套装开始 -->
		<div class="newstitle">
			<div class="leftTitle">
				<h2 style="color: orangered;">5F</h2>
				<h3>情侣套装</h3>
				<p>Couples dress</p>
			</div>
			<p style="margin: 50px 20px 0 0;">更多></p>
		</div>
		<div class="floor5">
			<div class="lovers_item" v-for="lovers in loversItem" :key="lovers.id">
				<img :src="lovers.loversImg">
				<div class="loversText">
					<h2>{{lovers.loverstitle}}</h2>
					<p>{{lovers.loverscontent}}</p>
				</div>
			</div>
		</div>
		<!-- 情侣套装结束 -->

		<!-- 猜你喜欢开始 -->
		<div class="newstitle">
			<div class="leftTitle">
				<h2 style="color: green;">6F</h2>
				<h3>猜你喜欢</h3>
				<p>Guess you like</p>
			</div>
			<p style="margin: 50px 20px 0 0;">更多></p>
		</div>
		<div class="floor6">
			<div class="guess_item" v-for="guess in guessItem" :key="guess.id">
				<img :src="guess.guessImg">
				<div class="guessText">
					<p>{{guess.guesstitle}}</p>
					<p class="red">{{guess.guesscontent}}</p>
				</div>
				<button>立即购买</button>
			</div>
		</div>
		<div class="girl">
			<img src="../assets/ad10.jpg" alt="">
		</div>
		<!-- 猜你喜欢结束	 -->

	</div>
</template>


<script>
	export default {
		name: 'carousal',
		data() {
			return {
				itemList: null,
				newsItem: [{
						id: 1,
						newsImg: require("../assets/ad10.jpg"),
						title: '康丽妍冬季上新',
						content: '冬季新品发布会',
					},
					{
						id: 2,
						newsImg: require("../assets/ad10.jpg"),
						title: '康丽妍冬季上新',
						content: '冬季新品发布会',
					},
					{
						id: 3,
						newsImg: require("../assets/ad10.jpg"),
						title: '康丽妍冬季上新',
						content: '冬季新品发布会',
					},
					{
						id: 4,
						newsImg: require("../assets/ad10.jpg"),
						title: '康丽妍冬季上新',
						content: '冬季新品发布会',
					},
					{
						id: 5,
						newsImg: require("../assets/ad10.jpg"),
						title: '康丽妍冬季上新',
						content: '冬季新品发布会',
					},
				],
				rpicList: [{
						id: 1,
						rpicImg: require("../assets/ad10.jpg"),
						introduce: '三层加棉睡衣女冬季',
						price: '￥98.00 ',
					},
					{
						id: 2,
						rpicImg: require("../assets/ad10.jpg"),
						introduce: '三层加棉睡衣女冬季',
						price: '￥98.00',
					},
					{
						id: 3,
						rpicImg: require("../assets/ad10.jpg"),
						introduce: '三层加棉睡衣女冬季',
						price: '￥98.00',
					},
					{
						id: 4,
						rpicImg: require("../assets/ad10.jpg"),
						introduce: '三层加棉睡衣女冬季',
						price: '￥98.00',
					},
					{
						id: 5,
						rpicImg: require("../assets/ad10.jpg"),
						introduce: '三层加棉睡衣女冬季',
						price: '￥98.00',
					},
					{
						id: 6,
						rpicImg: require("../assets/ad10.jpg"),
						introduce: '康丽妍冬季上新',
						price: '￥98.00',
					},
				],

				pickItem: [{
						id: 1,
						picksImg: require("../assets/ad10.jpg"),
						pickstitle: '康丽妍',
						pickscontent: '冬装热卖抵制69元',
					},
					{
						id: 2,
						picksImg: require("../assets/ad10.jpg"),
						pickstitle: '康丽妍',
						pickscontent: '冬季新品发布会',
					},
					{
						id: 3,
						picksImg: require("../assets/ad10.jpg"),
						pickstitle: '康丽妍',
						pickscontent: '冬季新品发布会',
					},
					{
						id: 4,
						picksImg: require("../assets/ad10.jpg"),
						pickstitle: '康丽妍',
						pickscontent: '冬季新品发布会',
					},
				],

				sexyItem: [{
						id: 1,
						sexyImg: require("../assets/ad10.jpg"),
						sexytitle: '康丽妍冬季上新',
						sexycontent: '冬季新品发布会',
					},
					{
						id: 2,
						sexyImg: require("../assets/ad10.jpg"),
						sexytitle: '康丽妍冬季上新',
						sexycontent: '冬季新品发布会',
					},
					{
						id: 3,
						sexyImg: require("../assets/ad10.jpg"),
						sexytitle: '康丽妍冬季上新',
						sexycontent: '冬季新品发布会',
					},
					{
						id: 4,
						sexyImg: require("../assets/ad10.jpg"),
						sexytitle: '康丽妍冬季上新',
						sexycontent: '冬季新品发布会',
					},
					{
						id: 5,
						sexyImg: require("../assets/ad10.jpg"),
						sexytitle: '康丽妍冬季上新',
						sexycontent: '冬季新品发布会',
					},
				],
				loversItem: [{
						id: 1,
						loversImg: require("../assets/ad10.jpg"),
						loverstitle: '康丽妍冬季上新',
						loverscontent: '冬季新品发布会',
					},
					{
						id: 2,
						loversImg: require("../assets/ad10.jpg"),
						loverstitle: '康丽妍冬季上新',
						loverscontent: '冬季新品发布会',
					},
					{
						id: 3,
						loversImg: require("../assets/ad10.jpg"),
						loverstitle: '康丽妍冬季上新',
						loverscontent: '冬季新品发布会',
					},
				],

				guessItem: [{
						id: 1,
						guessImg: require("../assets/ad10.jpg"),
						guesstitle: '零售价：',
						guesscontent: '168￥',
					},
					{
						id: 2,
						guessImg: require("../assets/ad10.jpg"),
						guesstitle: '零售价：',
						guesscontent: '168￥',
					},
					{
						id: 3,
						guessImg: require("../assets/ad10.jpg"),
						guesstitle: '零售价：',
						guesscontent: '168￥',
					},
					{
						id: 4,
						guessImg: require("../assets/ad10.jpg"),
						guesstitle: '零售价：',
						guesscontent: '168￥',
					},
					{
						id: 5,
						guessImg: require("../assets/ad10.jpg"),
						guesstitle: '零售价：',
						guesscontent: '168￥',
					},
					{
						id: 6,
						guessImg: require("../assets/ad10.jpg"),
						guesstitle: '零售价：',
						guesscontent: '168￥',
					},
				],
			}
		},
		methods: {
			getBannerList() {
				this.$http.get('http://192.168.31.211:8081/banner/getAll').then(function(data) {
					// console.log(data)
					// console.log(data.body.data)
					this.itemList = data.body.data; //轮播图
					// console.log(this.itemList)
				});
			},

		},
		mounted: function() {
			this.getBannerList()
		},
	}
</script>

<style>
</style>
