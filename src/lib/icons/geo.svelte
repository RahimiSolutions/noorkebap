<script>
	let {width, color = "#fff", strokewidth= "1.5"} = $props();
</script>

<svg
	{width} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M7.99984 11.8889V1M7.99984 11.8889C8.28979 11.8889 8.52313 11.6225 8.98979 11.0895L10.3332 9.55552M7.99984 11.8889C7.70988 11.8889 7.47655 11.6225 7.00988 11.0895L5.6665 9.55552"
		stroke={color}
		stroke-width={strokewidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M2.55556 10.3333C1.58271 10.8254 1 11.452 1 12.1344C1 13.717 4.13401 14.9999 8 14.9999C11.866 14.9999 15 13.717 15 12.1344C15 11.452 14.4173 10.8254 13.4444 10.3333"
		stroke={color}
		stroke-width={strokewidth}
		stroke-linecap="round"
	/>
</svg>
