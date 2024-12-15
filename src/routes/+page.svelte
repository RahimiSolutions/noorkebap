<script lang="ts">
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { onDestroy, onMount } from 'svelte';
	import Button from '../components/buttons/button.svelte';

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


