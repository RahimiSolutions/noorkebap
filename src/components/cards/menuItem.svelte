<script>
	import Button from '../buttons/button.svelte';

	let { number, title, description, img } = $props();
</script>

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
</style>
