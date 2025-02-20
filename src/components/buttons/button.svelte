<script>
	import { goto } from '$app/navigation';

	export let color = '#ffffff';
	export let bgColor = '#000000';
	export let fontweight = '400';
	export let bgColorHover = '#f5f5f5';
	export let text = 'text';
	export let link = '';
	export let borderRadius = '0px';
	export let borderWidth = '0px';
	export let fontsize ="var(--fs-700)";

	function goToLink() {
		if (link) {
			if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('tel:')) {
				// External link: Open in a new tab
				window.open(link, '_blank');
			} else {
				// Internal link: Use SvelteKit's goto function for internal navigation
				goto(link);
			}
		}
	}
</script>

<button
	class="button"
	style:color={color}
	style:font-size={fontsize}
	style:font-weight={fontweight}
	style:background-color={bgColor}
	style:border-radius={borderRadius}
	style:border-width={borderWidth}
	style:border-color={bgColorHover}
	style="--bgColorHover: {bgColorHover};"
	on:click|preventDefault|stopPropagation={goToLink}
>
	{text}
</button>

<style lang="scss">
	button {
		background-color: var(--red-300);

		border-radius: 100vw;
		padding: 8px 24px;
		box-shadow:
			4px 4px 12px 0 rgba(114, 9, 25, 0.25),
			inset 2px 2px 4px rgba(255, 255, 255, 0.8);

		transition: ease-in-out 0.3s;
		&:hover {
			cursor: pointer;
			transform: translateY(-3px);
			box-shadow:
				4px 4px 12px 0 rgba(114, 9, 25, 0.5),
				inset 2px 2px 4px rgba(255, 255, 255, 0.8);
		}
	}
</style>
