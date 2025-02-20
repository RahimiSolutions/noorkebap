<script lang="ts">
	import pizza from '$lib/images/option_pizza.webp';
	import burger from '$lib/images/option_burger.webp';
	import gelato from '$lib/images/option_gelato.webp';
	import kebab from '$lib/images/option_kebab.webp';
	import banner from '$lib/images/noorkebap-banner.webp';
	import CircularFoodType from '../cards/circularFoodType.svelte';
	
</script>

<div class="container">
	<div class="options">
		<div class="row">
			<div class="banner">
				<img src={banner} alt="Noor Kebap Restaurant | Pizzas | Hamburguesas" />
			</div>
			<div class="one"><CircularFoodType img={pizza} text="Pizzas" type="Pizza"/></div>
			<div class="two"><CircularFoodType img={kebab} text="Kebaps" type="Kebab"/></div>
			<div class="three"><CircularFoodType img={gelato} text="Gelatos" type="Gelato"/></div>
			<div class="four"><CircularFoodType img={burger} text="Hamburguesas" type="Burger"/></div>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		
		max-width: 1920px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 100px 0;

		.options {
			display: flex;
			flex-direction: column;
			.row {
				padding: 150px 0;
				display: flex;
				position: relative;

				.banner {
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 5;
					img{
						width: clamp(31.25rem, 15.5357rem + 24.5536vw, 45rem);
					}
				}
				.one,
				.two,
				.three,
				.four {
					position: absolute;
				}
				.one {
					top: -15%;
					left: -30%;
				}
				.two {
					top: -40%;
					right: 0;
				}
				.three {
					bottom: -30%;
					left: 0;
				}
				.four {
					bottom: 0;
					right: -35%;
				}
			}
		}
	}
</style>
