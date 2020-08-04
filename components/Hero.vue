<template>
	<div>
		<div class="hero-bg">
		<div class="container">
				<h6>CAROL DANVERS</h6>
			<h1>CAPTAIN MARVEL</h1>
			<p class="hero-description">Available Now on Digital, Movies Anywhere, Disney+ and Blu-ray!</p>
		</div>
		<div class="bg-black tabs">
			<div class="active-tab">
				<p class="text-tiny">OVERVIEW</p>
			</div>
			<div class="middle-tab">
				<p class="text-tiny">IN COMICS</p> 
				<p class="text-tiny">PROFILE</p>
			</div>
			<div>
				<p class="text-tiny">IN COMICS FULL</p>
				<p class="text-tiny">REPORT</p>
			</div>
		</div>
		</div>
		<div class="bg-black mobile">
			<div class="container text-white">
				<h6>CAROL DANVERS</h6>
			<h1>CAPTAIN MARVEL</h1>
			<p class="text-small">Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</p>
		</div>
		</div>
				<div class="iframe-contain">
              		<iframe title="Marvel Youtube eh_qPcQoFK0" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/eh_qPcQoFK0"> 
              		</iframe>
            	</div>
				<div class="ytp-cued-thumbnail-overlay-image" style="background-image: url(&quot;https://i.ytimg.com/vi/eh_qPcQoFK0/sddefault.jpg&quot;);"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
	.hero{
		&-bg{
		background-image: url('../assets/marvel-hero.jpg');
		height:450px;
		background-size: cover;
		color:#fff;
		display: flex;
		align-items: center;
		position: relative;
		}
		&-description{
			width:600px;
		}
	}
		h1{
			margin:8px 0;
		}
	.tabs{
		display: flex;
		position: absolute;
		left:100px;
		bottom:-30px;
		div{
			padding:20px;
			color:#999;
		}
	}
	.active-tab{
		color:#fff!important;
		border-top:5px solid #e62429;
	}
	.middle-tab{
		border-left:1px solid #393939;
	border-right:1px solid #393939;
	}
	.mobile{
		display: none;
	}
	iframe{
		width: 100%;
		height: 750px;
	}
	.iframe-contain{
		padding: 80px;
	}
	@media screen and (max-width:767px){
		.hero{
			&-description{
			width:auto;
		}
		&-bg{
				background-size: cover;
				height:300px;
				background-position-x:center;
			.container{
				display: none;
			}
		}
		}
		.tabs{
			left:0;
			display: none;
		}
		.mobile{
			display: block;
			padding:10px
		}
		iframe{
			width: 100%;
			height: 200px;
		}	
	}
	
</style>