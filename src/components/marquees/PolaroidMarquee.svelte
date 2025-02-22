<script>
	import Polaroid from '../cards/polaroid.svelte';
	import burger from '$lib/images/marquee_burger.webp';
	import pizza from '$lib/images/marquee_pizza.webp';
	import kebab from '$lib/images/marquee_kebab.webp';
	import girl from '$lib/images/marquee_girl.webp';
	import gelato from '$lib/images/marquee_gelato.webp';
	import woman from '$lib/images/marquee_woman.webp';
	import MediaQuery from '../MediaQuery/MediaQuery.svelte';

	let isPaused = false;

	// Base height of each polaroid and rotation buffer
	const polaroidHeight = 400;
	const rotationBuffer = 50; // Extra space for rotation effects
	const effectiveHeight = polaroidHeight + rotationBuffer;

	const polaroidWidth = 300;
	const effectiveWidth = polaroidWidth + rotationBuffer;

	// Image array with alternation for positioning
	const images = [
		{ image: burger, description: 'Description 1' },
		{ image: kebab, description: 'Description 2' },
		{ image: pizza, description: 'Description 3' },
		{ image: girl, description: 'Description 4' },
		{ image: gelato, description: 'Description 5' },
		{ image: woman, description: 'Description 6' }
	].map((img, index) => ({
		...img,
		rotation: Math.random() * 10 - 5, // Random rotation between -5 and 5 degrees
		isLeft: index % 2 === 0 // Alternate left/right
	}));

	const mobileImages = [
		{ image: burger, description: 'Description 1' },
		{ image: kebab, description: 'Description 2' },
		{ image: pizza, description: 'Description 3' },
		{ image: girl, description: 'Description 4' },
		{ image: gelato, description: 'Description 5' },
		{ image: woman, description: 'Description 6' }
	].map((img, index) => ({
		...img,
		rotation: Math.random() * 10 - 5, // Random rotation between -5 and 5 degrees
		isTop: index % 2 === 0 // Alternate top/bottom
	}));

	// Total height of all images in the stack
	const stackHeight = images.length * effectiveHeight;
	const stackWidth = mobileImages.length * effectiveWidth;

	// Animation duration scales with the total height
	const animationDuration = (stackHeight / 100) * 3; // Adjust duration for desired speed
	const animationDurationMobile = (stackWidth / 100) * 3; // Adjust for desired speed
	function pauseAnimation() {
		isPaused = true;
	}

	function resumeAnimation() {
		isPaused = false;
	}
</script>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
		<div class="polaroid-stack">
			{#each images as img, index}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="polaroid-wrapper"
					style="--index: {index}; 
			--rotation: {img.rotation}deg; 
            --animation-duration: {animationDuration}s; 
            --total-images: {images.length}; 
            --effective-height: {effectiveHeight}px;"
					class:left={img.isLeft}
					class:right={!img.isLeft}
					on:mouseenter={pauseAnimation}
					on:mouseleave={resumeAnimation}
					class:paused={isPaused}
				>
					<Polaroid image={img.image} description={img.description} />
				</div>
			{/each}
		</div>
	{/if}
</MediaQuery>
<MediaQuery query="(max-width: 1023px)" let:matches>
	{#if matches}
		<div class="mobile-polaroid-stack">
			{#each mobileImages as img, index}
				<div
					class="polaroid-wrapper"
					style="--index: {index}; 
				   --rotation: {img.rotation}deg; 
				   --animation-duration: {animationDuration}s; 
				   --total-images: {mobileImages.length}; 
				   --effective-width: {effectiveWidth}px;"
					class:top={img.isTop}
					class:bottom={!img.isTop}
				>
					<Polaroid image={img.image} description={img.description} />
				</div>
			{/each}
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	.polaroid-stack {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		height: 100vh;
		overflow: hidden;

		.polaroid-wrapper {
			position: absolute;
			animation: marquee var(--animation-duration) linear infinite;
			animation-delay: calc(
				var(--index) * calc(-1 * var(--animation-duration) / var(--total-images))
			);
			&.left {
				margin-left: 250px; /* Left alignment */
			}
			&.right {
				margin-left: -250px; /* Right alignment */
			}
			&.paused {
				animation-play-state: paused;
			}
		}
	}
	.mobile-polaroid-stack {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
		height: 60vh; // Adjust as needed
		overflow: hidden;
		background-color: hsla(0, 100%, 50%, 1);
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 2300 2300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
			radial-gradient(circle at 40% 20%, hsla(0, 100%, 63%, 1) 0%, transparent 50%),
			radial-gradient(circle at 80% 0%, hsla(352.80547661132937, 100%, 30%, 1) 0%, transparent 50%),
			radial-gradient(circle at 0% 50%, hsla(355.00000000000017, 100%, 97%, 1) 0%, transparent 50%),
			radial-gradient(circle at 80% 50%, hsla(359, 100%, 76%, 1) 0%, transparent 50%),
			radial-gradient(circle at 0% 100%, hsla(22, 100%, 77%, 1) 0%, transparent 50%),
			radial-gradient(circle at 80% 100%, hsla(0, 100%, 27%, 1) 0%, transparent 50%),
			radial-gradient(circle at 0% 0%, hsla(10.99999999999998, 0%, 99%, 1) 0%, transparent 50%);
		background-blend-mode: overlay, normal, normal, normal, normal, normal, normal, normal;

		.polaroid-wrapper {
			position: absolute;
			animation: horizontal-marquee var(--animation-duration) linear infinite;
			animation-delay: calc(
				var(--index) * calc(-1 * var(--animation-duration) / var(--total-images))
			);
			&.top {
				margin-top: -50px; // Adjust for desired vertical offset
			}
			&.bottom {
				margin-top: 50px; // Adjust for desired vertical offset
			}
		}
	}

	@keyframes horizontal-marquee {
		0% {
			transform: translateX(calc(100vw + var(--effective-width))) rotate(var(--rotation));
		}
		100% {
			transform: translateX(calc(-1 * var(--effective-width))) rotate(var(--rotation));
		}
	}
	/* Smooth and continuous flow of images */
	@keyframes marquee {
		0% {
			transform: translateY(calc(100vh + var(--effective-height))) rotate(var(--rotation));
		}
		100% {
			transform: translateY(calc(-1 * var(--effective-height))) rotate(var(--rotation));
		}
	}
</style>
