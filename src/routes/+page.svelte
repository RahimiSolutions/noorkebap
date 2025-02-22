<script lang="ts">
	import pizza from '$lib/images/option_pizza.webp';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { onDestroy, onMount } from 'svelte';
	import Button from '../components/buttons/button.svelte';
	import Geo from '$lib/icons/geo.svelte';
	import wave from '$lib/images/wave.svg';
	import PolaroidMarquee from '../components/marquees/PolaroidMarquee.svelte';
	import Reviews from '../components/cards/reviews.svelte';
	import MediuaQuery from '../components/MediaQuery/MediaQuery.svelte';
	import MediaQuery from '../components/MediaQuery/MediaQuery.svelte';
	import OptionsSection from '../components/sections/OptionsSection.svelte';
	import MenuItem from '../components/cards/menuItem.svelte';
	import MenuSection from '../components/sections/menuSection.svelte';
	import FaqSection from '../components/sections/faqSection.svelte';
	import redWave from '$lib/images/redwave.svg';
	import geopin from '$lib/images/geopin.webp';
	import Phone from '$lib/icons/phone.svelte';

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

<svelte:head>
	<script src="https://cdn.lordicon.com/lordicon.js"></script>
</svelte:head>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
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
								<span class="highlight-red">Comida Deliciosa</span><br />Momentos Inolvidables
							</h1>
							<h3 class="sub-header">Burgers, pizzas y helados que te harán volver por más</h3>
						</div>
						<div class="buttons">
							<Button
								text="Menú"
								borderRadius="100vw"
								bgColor="#fff"
								color="#000"
								fontweight="600"
								link="#menú"
							/>
							<Button
								text="Pedido"
								borderRadius="100vw"
								bgColor="#e44961"
								fontweight="600"
								link="#menú"
							/>
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
			<section class="options">
				<OptionsSection />
			</section>
			<section class="reviews">
				<h2>Reseñas</h2>
				<div class="review-container">
					<script src="https://static.elfsight.com/platform/platform.js" async></script>
					<div
						class="elfsight-app-6e29feb6-1bb7-4be5-9c22-f37ab9370d4d"
						data-elfsight-app-lazy
					></div>
				</div>
				<Button
					text="Danos tu reseña"
					bgColor="#e44961"
					fontweight="600"
					borderRadius="100vw"
					link="https://search.google.com/local/writereview?placeid=ChIJ9xFOPE1MYg0RHiatsBs1HkI"
				/>
			</section>
			<section class="menu" id="menú">
				<h2>Menus</h2>
				<div class="menu-container">
					<MenuSection />
				</div>
			</section>

			<div class="faq-section">
				<h2>Preguntas Frecuentes</h2>
				<div class="faq-container">
					<FaqSection />
				</div>
				<p>¿todavía tienes preguntas?</p>
				<Button
					text="llamanos"
					bgColor="#e44961"
					fontweight="600"
					borderRadius="100vw"
					link="tel:+34-615-73-32-30"
				/>
			</div>
			<div class="contact-section" id="contacto">
				<img src={redWave} alt="Red Svg vector of wave" />
				<div class="container">
					<h2>Puedes encontrarnos aquí</h2>
					<div class="location">
						<lord-icon
							src="https://cdn.lordicon.com/onmwuuox.json"
							trigger="hover"
							stroke="bold"
							colors="primary:#ffffff,secondary:#ffffff"
							style="width:48px;height:48px"
						>
						</lord-icon>
						<a href="https://maps.app.goo.gl/smj5KHx4oxqAaPaj6" target="_blank">
							<p>Noor Kebap Heladeria, Av. Gonzalez Vicen, 12, 03130</p>
						</a>
					</div>
					<div class="phone">
						<Phone width="36" />
						<a href="tel:+34-615-73-32-30" target="_blank">
							<p>llamanos (10:00 - 00:00)</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 1023px)" let:matches>
	{#if matches}
		<div class="mobile-wrapper">
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
								<span class="highlight-red">Comida Deliciosa</span><br />Momentos Inolvidables
							</h1>
							<h3 class="sub-header">Burgers, pizzas y helados que te harán volver por más</h3>
						</div>
						<div class="buttons">
							<Button
								text="Menú"
								borderRadius="100vw"
								bgColor="#fff"
								color="#000"
								fontweight="600"
								link="#menú"
								fontsize="var(--fs-600)"
							/>
							<Button
								text="Pedido"
								borderRadius="100vw"
								bgColor="#e44961"
								fontweight="600"
								link="#menú"
								fontsize="var(--fs-600)"
							/>
						</div>
					</div>
					<div class="rating">
						<Reviews />
					</div>
				</div>
				<div class="right">
					<img class="top-wave" src={wave} alt="White Svg vector of wave" />
					<PolaroidMarquee />
					<img class="bottom-wave" src={wave} alt="White Svg vector of wave" />
				</div>
			</section>
			<section class="options">
				<OptionsSection />
			</section>
			<section class="reviews">
				<h2>Reseñas</h2>
				<div class="review-container">
					<script src="https://static.elfsight.com/platform/platform.js" async></script>
					<div
						class="elfsight-app-6e29feb6-1bb7-4be5-9c22-f37ab9370d4d"
						data-elfsight-app-lazy
					></div>
				</div>
				<Button
					text="Danos tu reseña"
					bgColor="#e44961"
					fontweight="600"
					fontsize="var(--fs-600)"
					borderRadius="100vw"
					link="https://search.google.com/local/writereview?placeid=ChIJ9xFOPE1MYg0RHiatsBs1HkI"
				/>
			</section>
			<section class="menu" id="menú">
				<h2>Menus</h2>
				<div class="menu-container">
					<MenuSection />
				</div>
			</section>

			<div class="faq-section">
				<h2>Preguntas Frecuentes</h2>
				<div class="faq-container">
					<FaqSection />
				</div>
				<p>¿todavía tienes preguntas?</p>
				<Button
					text="llamanos"
					bgColor="#e44961"
					fontweight="600"
					fontsize="var(--fs-600)"
					borderRadius="100vw"
					link="tel:+34-615-73-32-30"
				/>
			</div>
			<div class="contact-section" id="contacto">
				<img src={redWave} alt="Red Svg vector of wave" />
				<div class="container">
					<h2>Puedes encontrarnos aquí</h2>
					<div class="location">
						<lord-icon
							src="https://cdn.lordicon.com/onmwuuox.json"
							trigger="click"
							stroke="bold"
							colors="primary:#ffffff,secondary:#ffffff"
							style="width:24px;height:24px"
						>
						</lord-icon>
						<a href="https://maps.app.goo.gl/smj5KHx4oxqAaPaj6" target="_blank">
							<p>Noor Kebap Heladeria, Av. Gonzalez Vicen, 12, 03130</p>
						</a>
					</div>
					<div class="phone">
						<Phone width="24" />
						<a href="tel:+34-615-73-32-30" target="_blank">
							<p>llamanos (10:00 - 00:00)</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	.wrapper {
		width: 100%;
		max-width: 2000px;
		margin: auto;
		.hero {
			height: 100vh;
			display: flex;
			.left {
				padding-top: 100px;
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
						margin-bottom: 36px;
						box-shadow: 4px 4px 12px 0 rgba(114, 9, 25, 0.25);

						a {
							text-decoration: none;
							color: var(--red-600);
							font-weight: 600;
							font-size: var(--fs-400);
						}

						transition: 0.3s ease-in-out;
						&:hover {
							transform: translateY(-1px);
						}
					}
					.main {
						margin-bottom: 64px;
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
						width: 100%;
						display: flex;
						justify-content: center;
						gap: 64px;
					}
				}
				.rating {
					margin-top: 40px;
					width: 80%;
				}
			}
			.right {
				height: 100%;
				flex: 1;
				background-color: hsla(0, 100%, 50%, 1);
				background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 2300 2300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
					radial-gradient(circle at 40% 20%, hsla(0, 100%, 63%, 1) 0%, transparent 50%),
					radial-gradient(
						circle at 80% 0%,
						hsla(352.80547661132937, 100%, 30%, 1) 0%,
						transparent 50%
					),
					radial-gradient(
						circle at 0% 50%,
						hsla(355.00000000000017, 100%, 97%, 1) 0%,
						transparent 50%
					),
					radial-gradient(circle at 80% 50%, hsla(359, 100%, 76%, 1) 0%, transparent 50%),
					radial-gradient(circle at 0% 100%, hsla(22, 100%, 77%, 1) 0%, transparent 50%),
					radial-gradient(circle at 80% 100%, hsla(0, 100%, 27%, 1) 0%, transparent 50%),
					radial-gradient(circle at 0% 0%, hsla(10.99999999999998, 0%, 99%, 1) 0%, transparent 50%);
				background-blend-mode: overlay, normal, normal, normal, normal, normal, normal, normal;
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
			z-index: 5;
		}
		.reviews {
			margin: 150px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				text-align: center;
				font-size: var(--fs-800);
				font-weight: 900;
				color: var(--red-300);
			}
			.review-container {
				margin-bottom: 24px;
			}
		}
		.menu {
			margin: 100px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				text-align: center;
				font-size: var(--fs-800);
				font-weight: 900;
				color: var(--red-300);
			}
			.menu-container {
				margin-bottom: 24px;
			}
		}
		.faq-section {
			margin: 100px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				text-align: center;
				font-size: var(--fs-800);
				font-weight: 900;
				color: var(--red-300);
			}
			p {
				margin: 24px 0;
				font-size: var(--fs-700);
				font-weight: 600;
			}
		}
		.contact-section {
			position: relative;
			padding-top: 120px;
			img {
				position: absolute;
				top: -100px;
				width: 100%;
				z-index: -1;
			}
			.container {
				background-color: var(--red-300);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				z-index: 5;
				h2 {
					text-align: center;
					font-size: var(--fs-800);
					font-weight: 900;
					color: var(--white);
				}
				.location,
				.phone {
					display: flex;
					align-items: center;
					a {
						text-decoration: none;
						p {
							font-size: var(--fs-600);
							font-weight: 600;
							color: var(--white);
						}
					}
				}
			}
		}
	}
	.mobile-wrapper {
		overflow-x: hidden;
		width: 100%;
		max-width: 2000px;
		margin: auto;
		.hero {
			display: flex;
			flex-direction: column;
			.left {
				padding-top: 100px;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 64px;
				.content {
					height: fit-content;
					width: 90%;
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
						margin-bottom: 36px;
						box-shadow: 4px 4px 12px 0 rgba(114, 9, 25, 0.25);

						a {
							text-decoration: none;
							color: var(--red-600);
							font-weight: 600;
							font-size: var(--fs-300);
						}

						transition: 0.3s ease-in-out;
						&:hover {
							transform: translateY(-1px);
						}
					}
					.main {
						margin-bottom: 64px;
						display: flex;
						flex-direction: column;
						gap: 16px;
						.main-header {
							font-size: var(--fs-700);
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
						width: 100%;
						display: flex;
						justify-content: center;
						gap: 64px;
					}
				}
				.rating {
					margin-top: 40px;
					width: 80%;
				}
			}
			.right {
				position: relative;
				.top-wave {
					position: absolute;
					top: 0;
					width: 100%;
					transform: rotate(180deg) translateY(2px);
					z-index: 2;
				}
				.bottom-wave {
					position: absolute;
					bottom: 0;
					transform: translateY(50%);
					width: 100%;
				}
			}
		}
		.options {
			z-index: 5;
		}
		.reviews {
			margin: 10px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				text-align: center;
				font-size: var(--fs-800);
				font-weight: 900;
				color: var(--red-300);
			}
			.review-container {
				margin-bottom: 24px;
			}
		}
		.menu {
			margin: 100px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				text-align: center;
				font-size: var(--fs-800);
				font-weight: 900;
				color: var(--red-300);
			}
			.menu-container {
				margin-bottom: 24px;
			}
		}
		.faq-section {
			margin: 100px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				text-align: center;
				font-size: var(--fs-800);
				font-weight: 900;
				color: var(--red-300);
			}
			p {
				margin: 24px 0;
				font-size: var(--fs-700);
				font-weight: 600;
			}
		}
		.contact-section {
			position: relative;
			padding-top: 120px;
			img {
				position: absolute;
				top: clamp(1.25rem, 5.1504rem + -17.8306vw, -6.25rem);
				width: 100%;
				z-index: -1;
			}
			.container {
				background-color: var(--red-300);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;
				z-index: 5;
				h2 {
					text-align: center;
					font-size: var(--fs-700);
					font-weight: 900;
					color: var(--white);
				}
				.location,
				.phone {
					display: flex;
					align-items: center;
					a {
						text-decoration: none;
						p {
							font-size: var(--fs-400);
							font-weight: 600;
							color: var(--white);
						}
					}
				}
			}
		}
	}
</style>
