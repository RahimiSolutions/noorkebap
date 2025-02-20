<script>
	import Polaroid from '../cards/polaroid.svelte';
	import burger from '$lib/images/marquee_burger.webp';
	import pizza from '$lib/images/marquee_pizza.webp';
	import kebab from '$lib/images/marquee_kebab.webp';
	import girl from '$lib/images/marquee_girl.webp';
	import gelato from '$lib/images/marquee_gelato.webp';
	import woman from '$lib/images/marquee_woman.webp';

	let isPaused = false;

	// Base height of each polaroid and rotation buffer
	const polaroidHeight = 400;
	const rotationBuffer = 50; // Extra space for rotation effects
	const effectiveHeight = polaroidHeight + rotationBuffer;

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

	// Total height of all images in the stack
	const stackHeight = images.length * effectiveHeight;

	// Animation duration scales with the total height
	const animationDuration = (stackHeight / 100) * 3; // Adjust duration for desired speed

	function pauseAnimation() {
		isPaused = true;
	}

	function resumeAnimation() {
		isPaused = false;
	}
</script>

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

<style lang="scss">
	.polaroid-stack {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	height: 100vh;
	overflow: hidden;
}

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
