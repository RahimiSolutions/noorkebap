<script>
	import { fly, slide } from 'svelte/transition';
	import Button from '../buttons/button.svelte';
	import MediaQuery from '../MediaQuery/MediaQuery.svelte';

	let { number, title, description, img } = $props();

	let buttonOpened = $state(false);

	function buttonClicked() {
		buttonOpened = !buttonOpened;
	}
</script>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
		<div class="container">
			<img src={img} alt={title} />
			<div class="info">
				<p class="number">{number}.</p>
				<div class="top">
					<h3>{title}</h3>
					<p class="description">{description}</p>
				</div>
			</div>
			<div class="button">
				<Button
					text="Pedido Ahora"
					bgColor="#e44961"
					fontweight="600"
					borderRadius="100vw"
					fontsize="var(--fs-500)"
					link="tel:+34-615-73-32-30"
				/>
			</div>
		</div>
	{/if}
</MediaQuery>
<MediaQuery query="(max-width: 1023px)" let:matches>
	<!-- svelte-ignore a11y_no_static_element_interactions --><!-- svelte-ignore a11y_click_events_have_key_events -->
	{#if matches}
		<div class="mobile-container" onclick={buttonClicked}>
			<img src={img} alt={title} />
			<div class="info">
				<p class="number">{number}.</p>
				<div class="top">
					<h3>{title}</h3>
					<p class="description">{description}</p>
				</div>
			</div>
			{#if buttonOpened}
				<div class="button" transition:fly={{ x: 200 }}>
					<Button
						text="Pedido Ahora"
						bgColor="#e44961"
						fontweight="600"
						borderRadius="100vw"
						fontsize="var(--fs-400)"
						link="tel:+34-615-73-32-30"
					/>
				</div>
			{/if}
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	.container {
		display: flex;
		gap: 16px;
		max-width: 1200px;
		margin-top: 24px;
		img {
			width: 100px;
			border-radius: 100vw;
		}

		.info {
			display: flex;
			gap: 8px;
			.number {
				font-size: var(--fs-600);
				font-weight: 600;
			}
			.top {
				display: flex;
				flex-direction: column;
				gap: 8px;

				h3 {
					font-size: var(--fs-600);
					font-weight: 600;
				}
				.description {
					font-size: var(--fs-500);
					font-weight: 500;

					width: 30ch;
				}
			}
		}

		.button {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.mobile-container {
		display: flex;
		gap: 16px;
		max-width: clamp(18.75rem, 2.4981rem + 74.2942vw, 50rem);
		margin-top: 24px;
		position: relative;
		img {
			align-self: center;
			width: 64px;
			height: 64px;
			border-radius: 100vw;
		}

		.info {
			display: flex;
			gap: 8px;
			.number {
				font-size: var(--fs-500);
				font-weight: 700;
			}
			.top {
				display: flex;
				flex-direction: column;
				gap: 8px;

				h3 {
					font-size: var(--fs-500);
					font-weight: 700;
				}
				.description {
					font-size: var(--fs-400);
					font-weight: 500;
				}
			}
		}

		.button {
			height: 100%;
			right: 0;
			transform: translateX(25%);
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
