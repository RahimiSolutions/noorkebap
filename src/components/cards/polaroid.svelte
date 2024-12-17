<script>
	let { image, description = 'Polaroid Picture' } = $props();
</script>

<div class="polaroid">
	<div class="image-container">
		<img src={image} alt={description} />
		<div class="polaroid-overlay"></div>
	</div>
</div>

<style lang="scss">
	.polaroid {
		width: 400px;
		height: fit-content;

		overflow: hidden;
		.image-container {
			width: 400px;
			height: 400px;
			position: relative;
			img {
				max-width: 100%;
			}
			.polaroid-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 400px;
				height: 400px;
				border-width: 10px 10px 80px 10px;
				border-style: solid;
				border-color: var(--white);
			}
		}
	}
</style>
