<script>
	import { goto } from '$app/navigation';
	import { filterMenu } from '$lib/stores.svelte';
	import { stores } from '$lib/stores.svelte';
	import { tick } from 'svelte';
	import MediaQuery from '../MediaQuery/MediaQuery.svelte';

	/**
	 * @param {string} elementId
	 */
	function scrollToElement(elementId) {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	let { text, img, type } = $props();

	async function clickhandler() {
		filterMenu(type);
		stores.selectedFilter = type;

		// Wait for both state propagation AND DOM updates
		await tick();

		// Add RAF to ensure smooth scrolling after full re-render
		requestAnimationFrame(() => {
			scrollToElement('menú');
		});

		// console.log(type + ' was clicked');
	}
</script>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
		<div class="container">
			<div class="circular-food-type">
				<div class="circle">
					<div class="inner-circle">
						<div class="circle-two">
							<div class="inner-circle-two"></div>
						</div>
					</div>
				</div>

				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<img onclick={clickhandler} class="food-image" src={img} alt={text} />
			</div>
			<h2>{text}</h2>
		</div>
	{/if}
</MediaQuery>
<MediaQuery query="(max-width: 1023px)" let:matches>
	{#if matches}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="mobile-container" onclick={clickhandler}>
			<div class="circular-food-type">
				<div class="circle">
					<div class="inner-circle">
						<div class="circle-two">
							<div class="inner-circle-two"></div>
						</div>
					</div>
				</div>

				<img class="food-image" src={img} alt={text} />
			</div>
			<h2>{text}</h2>
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		.circular-food-type {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 2rem;
			flex-direction: column;
			position: relative;

			.circle {
				width: clamp(12.5rem, 8.9286rem + 5.5804vw, 15.625rem);
				height: clamp(12.5rem, 8.9286rem + 5.5804vw, 15.625rem);
				border-radius: 50%;
				background: linear-gradient(var(--red-400), var(--white));
				animation: circleRotate 5s linear infinite;
				display: flex;
				align-items: center;
				justify-content: center;

				.inner-circle {
					width: clamp(12.375rem, 8.8036rem + 5.5804vw, 15.5rem);
					height: clamp(12.375rem, 8.8036rem + 5.5804vw, 15.5rem);
					border-radius: 50%;
					background-color: var(--white);
					display: flex;
					align-items: center;
					justify-content: center;

					.circle-two {
						width: clamp(11.25rem, 7.6786rem + 5.5804vw, 14.375rem);
						height: clamp(11.25rem, 7.6786rem + 5.5804vw, 14.375rem);
						border-radius: 50%;
						background: linear-gradient(var(--red-400), var(--white));
						animation: circleRotate 5s linear infinite;
						display: flex;
						align-items: center;
						justify-content: center;

						.inner-circle-two {
							width: clamp(11.125rem, 7.5536rem + 5.5804vw, 14.25rem);
							height: clamp(11.125rem, 7.5536rem + 5.5804vw, 14.25rem);
							border-radius: 50%;
							background-color: var(--white);
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}

			/** Image stays static while the circles rotate */

			.food-image {
				border-radius: 50%;
				width: clamp(10rem, 6.4286rem + 5.5804vw, 13.125rem);
				height: clamp(10rem, 6.4286rem + 5.5804vw, 13.125rem);
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				cursor: pointer;
			}
		}
		h2 {
			font-size: 1.5rem;
			color: #000;
		}
	}
	.mobile-container {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-top: 16px;
		.circular-food-type {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: relative;

			.circle {
				width: clamp(5.25rem, 1.8696rem + 15.4532vw, 11.75rem);
				height: clamp(5.25rem, 1.8696rem + 15.4532vw, 11.75rem);
				border-radius: 50%;
				background: linear-gradient(var(--red-400), var(--white));
				animation: circleRotate 5s linear infinite;
				display: flex;
				align-items: center;
				justify-content: center;

				.inner-circle {
					width: clamp(5.25rem, 1.9996rem + 14.8588vw, 11.5rem);
					height: clamp(5.25rem, 1.9996rem + 14.8588vw, 11.5rem);
					border-radius: 50%;
					background-color: var(--white);
					display: flex;
					align-items: center;
					justify-content: center;

					.circle-two {
						width: clamp(4.75rem, 1.4996rem + 14.8588vw, 11rem);
						height: clamp(4.75rem, 1.4996rem + 14.8588vw, 11rem);
						border-radius: 50%;
						background: linear-gradient(var(--red-400), var(--white));
						animation: circleRotate 5s linear infinite;
						display: flex;
						align-items: center;
						justify-content: center;

						.inner-circle-two {
							width: clamp(4.5rem, 1.2496rem + 14.8588vw, 10.75rem);
							height: clamp(4.5rem, 1.2496rem + 14.8588vw, 10.75rem);
							border-radius: 50%;
							background-color: var(--white);
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}

			/** Image stays static while the circles rotate */

			.food-image {
				border-radius: 50%;
				width: clamp(4rem, 0.7496rem + 14.8588vw, 10.25rem);

				height: clamp(4rem, 0.7496rem + 14.8588vw, 10.25rem);

				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				cursor: pointer;
			}
		}
		h2 {
			font-size: var(--fs-700);
			color: #000;
		}
	}

	@keyframes circleRotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
