<template>
	<div class="comics-section container">
		<h3>{{title}}</h3>
		<div class="comics-con">
			<div class="comics-card" v-for="(comic, index) in comics" :key="index" @click="openModal(index)">
				<img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" loading="lazy" width=170 alt="">
				<p class="text-small text-bold">
{{comic.title}}</p>
<p class="text-tiny test-grey">{{comic.dates[0].date | luxon:format('yyyy')}}</p>
			</div>
		</div>
		<slot></slot>
		<section id="masonry-13" class="page__component page__component--detail-movie page__component--masonry section__color__ " data-top-component="masonry" data-page-position="15">
	<div class="masonry--root" style="max-width:1240px;padding:0px 30px 20px 30px;margin:0 auto">
		<div class="inlineModuleHeader ">
			<div class="inlineModuleHeader__titleWrapper">
				<h3 class="inlineModuleHeader__header">Gallery</h3>
			</div>
			<div class="inlineModuleHeader__innerComponent">
				<div class="tabs__component ">
					<ul class="tabs__container">
						<li class="tabs__btns active">
							<a role="button" tabindex="0">Stills</a>
						</li>
						<li class="tabs__btns ">
							<a role="button" tabindex="0">Posters</a>
						</li>
						<li class="tabs__btns ">
							<a role="button" tabindex="0">EW Cover</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div style="margin:0 auto">
			<div class="masonry-grid__wrapper">
				<div class="display-grid">
					<div class="masonry-grid__column">
						<div class="masonry-grid__item" style="top: 0px; height: 180.294px; margin-bottom: 12px;">
							<div class="column-item--image--wrapper">
								<div style="height: 180.294px;">
									<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-15891_r2_0.jpg">
									</div>
								</div>
							</div>
							<div class="masonry-grid__item" style="top: 192.294px; height: 190.667px; margin-bottom: 12px;">
								<div class="column-item--image--wrapper">
									<div style="height: 190.667px;">
										<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-09639_r_1_0.jpg">
										</div>
									</div>
								</div>
							</div>
							<div class="masonry-grid__column">
								<div class="masonry-grid__item" style="top: 0px; height: 190.585px; margin-bottom: 12px;">
									<div class="column-item--image--wrapper">
										<div style="height: 190.585px;">
											<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-16473_r2_0.jpg">
											</div>
										</div>
									</div>
									<div class="masonry-grid__item" style="top: 202.585px; height: 190.667px; margin-bottom: 12px;">
										<div class="column-item--image--wrapper">
											<div style="height: 190.667px;">
												<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-10279_r_0.jpg">
												</div>
											</div>
										</div>
									</div>
									<div class="masonry-grid__column">
										<div class="masonry-grid__item" style="top: 0px; height: 149.536px; margin-bottom: 12px;">
											<div class="column-item--image--wrapper">
												<div style="height: 149.536px;">
													<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/dbr1520_cmp_v710.1032_0.jpg">
													</div>
												</div>
											</div>
											<div class="masonry-grid__item" style="top: 161.536px; height: 190.667px; margin-bottom: 12px;">
												<div class="column-item--image--wrapper">
													<div style="height: 190.667px;">
														<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-06977_r_0_0.jpg">
														</div>
													</div>
												</div>
											</div>
											<div class="masonry-grid__column">
												<div class="masonry-grid__item" style="top: 0px; height: 190.667px; margin-bottom: 12px;">
													<div class="column-item--image--wrapper">
														<div style="height: 190.667px;">
															<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-04698_r_0.jpg">
															</div>
														</div>
													</div>
													<div class="masonry-grid__item" style="top: 202.667px; height: 190.712px; margin-bottom: 12px;">
														<div class="column-item--image--wrapper">
															<div style="height: 190.712px;">
																<img class="column-item--image column-item--image-animation" alt="Image from Captain Marvel " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/opw-16329_r_0.jpg">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
								<br><br>
	</div>
</template>

<script>
export default {
	props:[
		"title","comics"
	],
	data(){
		return{
		}
	},
	methods:{
		openModal(i){
			this.$emit('openModal',this.comics[i])
		}
	}
}
</script>

<style scoped lang="scss">
.comics{
	&-section{
	margin:30px 0;
}
&-con{
	display:flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
&-card{
	img{
		width:170px;
	}
	p{
		width:170px;
	}
}
}
h3{
	margin-bottom:40px;
}
.inlineModuleHeader {
    position: relative;
    width: 100%;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
	list-style: none;
    flex-wrap: wrap;
    justify-content: space-between;
}
li{
	list-style: none;
	display: inline-block;
}
.display-grid{
	display: grid; column-gap: 12px; grid-template-columns: 286px 286px 286px 286px;
}
	@media screen and (max-width:767px){
		.comics{
			&-con{
				display:flex;
				justify-content: center;
				/* flex-wrap: wrap; */
			}
			&-card{
				margin:0 10px;
			}
		}
		.display-grid{
			display: block;
		}
	}
</style>