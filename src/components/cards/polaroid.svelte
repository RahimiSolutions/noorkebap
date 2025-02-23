<script>
	import MediaQuery from '../MediaQuery/MediaQuery.svelte';

	let { image, description = 'Polaroid Picture' } = $props();
</script>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
		<div class="polaroid">
			<div class="image-container">
				<img src={image} alt={description} />
				<div class="polaroid-overlay"></div>
			</div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query="(max-width: 1023px)" let:matches>
	{#if matches}
		<div class="mobile-polaroid">
			<div class="image-container">
				<img src={image} alt={description} />
				<div class="polaroid-overlay"></div>
			</div>
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	.polaroid {
		width: clamp(18.75rem, 11.6071rem + 11.1607vw, 25rem);
		height: fit-content;

		overflow: hidden;
		.image-container {
			width: clamp(18.75rem, 11.6071rem + 11.1607vw, 25rem);
			height: clamp(18.75rem, 11.6071rem + 11.1607vw, 25rem);
			position: relative;
			img {
				max-width: 100%;
			}
			.polaroid-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: clamp(18.75rem, 11.6071rem + 11.1607vw, 25rem);
				height: clamp(18.75rem, 11.6071rem + 11.1607vw, 25rem);
				border-width: 10px 10px 80px 10px;
				border-style: solid;
				border-color: var(--white);
			}
		}
	}
	.mobile-polaroid {
		width: clamp(15.625rem, 12.3746rem + 14.8588vw, 21.875rem);
		height: fit-content;

		overflow: hidden;
		.image-container {
			width: clamp(15.625rem, 12.3746rem + 14.8588vw, 21.875rem);
			height: clamp(15.625rem, 12.3746rem + 14.8588vw, 21.875rem);
			position: relative;
			img {
				max-width: 100%;
			}
			.polaroid-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: clamp(15.625rem, 12.3746rem + 14.8588vw, 21.875rem);
				height: clamp(15.625rem, 12.3746rem + 14.8588vw, 21.875rem);
				border-width: 10px 10px 60px 10px;
				border-style: solid;
				border-color: var(--white);
			}
		}
	}
</style>
