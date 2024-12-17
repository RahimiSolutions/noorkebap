<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { onDestroy, onMount } from 'svelte';
	import Button from '../components/buttons/button.svelte';
	import Geo from '$lib/icons/geo.svelte';
	import wave from '$lib/images/wave.svg';
	import PolaroidMarquee from '../components/marquees/PolaroidMarquee.svelte';
	import Reviews from '../components/cards/reviews.svelte';

	let lenis: Lenis | null = null;

	onMount(() => {
		lenis = new Lenis({
			duration: 1.3,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			touchMultiplier: 2,
			infinite: false
		});

		function raf(time: any) {
			lenis?.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	onDestroy(() => {
		if (lenis) {
			lenis.destroy();
		}
	});
</script>

<div class="wrapper">
	<section class="hero">
		<div class="left">
			<div class="content">
				<div class="location-tag">
					<div class="icon">
						<Geo width="20" />
					</div>
					<a href="https://maps.app.goo.gl/smj5KHx4oxqAaPaj6" target="_blank"
						><p>Noor Kebap Heladeria, Av. Gonzalez Vicen, 12, 03130</p></a
					>
				</div>
				<div class="main">
					<h1 class="main-header">
						<span class="highlight-red">Comida deliciosa</span><br />
						momentos inolvidables
					</h1>
					<h3 class="sub-header">Burgers, pizzas y helados que te harán volver por más</h3>
				</div>
				<div class="buttons">
					<Button text="Menu" borderRadius="100vw" bgColor="#fff" color="#000" fontweight="600" />
					<Button text="Pedido" borderRadius="100vw" bgColor="#e44961" fontweight="600" />
				</div>
			</div>
			<div class="rating">
				<Reviews />
			</div>
		</div>
		<div class="right">
			<PolaroidMarquee />
			<img src={wave} alt="White Svg vector of wave" />
		</div>
	</section>
	<section class="options"></section>
	<section class="reviews">
		<script src="https://static.elfsight.com/platform/platform.js" async></script>
		<div class="elfsight-app-6e29feb6-1bb7-4be5-9c22-f37ab9370d4d" data-elfsight-app-lazy></div>
	</section>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		margin: auto;
		.hero {
			height: 100vh;
			display: flex;
			.left {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 64px;
				.content {
					height: fit-content;
					width: 80%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: start;
					.location-tag {
						background-color: var(--red-200);
						padding: 4px 16px;
						border-radius: 100vw;
						display: flex;
						align-items: center;
						gap: 8px;
						margin-bottom: 24px;
						.icon {
						}
						a {
							text-decoration: none;
							color: var(--red-600);
							font-weight: 600;
						}

						transition: 0.3s ease-in-out;
						&:hover {
							transform: translateY(-1px);
						}
					}
					.main {
						margin-bottom: 36px;
						display: flex;
						flex-direction: column;
						gap: 16px;
						.main-header {
							font-size: var(--fs-800);
							font-weight: 900;
							color: var(--black-400);
							.highlight-red {
								color: var(--red-300);
							}
						}
						.sub-header {
							color: var(--black-300);
						}
					}
					.buttons {
						width: 60%;
						display: flex;
						justify-content: space-evenly;
					}
					
				}
				.rating{
					width: 80%;
				}
			}
			.right {
				height: 100%;
				flex: 1;
				background-color: var(--red-600);
				position: relative;
				img {
					position: absolute;
					bottom: 0;
					transform: translateY(50%);
					width: 100%;
				}
			}
		}
		.options {
			height: 60vh;
		}
		.reviews{
			height: 60vh;
		}
	}
</style>
