<script lang="ts">
	import { language, locale } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';
    import '../lib/styles/fonts.css';

	var userLang = navigator.language;
	// nb-NO

	function setLanguage() {
		if (userLang === 'nb-NO' || userLang === 'no' || userLang === 'nn') {
			$language = 'no';
			$locale = 'no';
		} else {
			$language = 'en';
			$locale = 'en';
		}
	}

	onMount(() => {
		userLang = navigator.language || 'en'; // Default to 'en' if navigator.language is not defined.
		setLanguage();
	});
</script>

<svelte:head>
	<title>FILL IN TITLE</title>
	<meta name="description" content="FILL IN DESCRIPTION" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />
	<meta name="content-language" content="en" />
	<meta name="keywords" content="FILL IN KEYWORDS" />
	<meta property="og:title" content="FILL IN TITLE" />
	<meta property="og:description" content="FILL IN DESCRIPTION" />
	<meta property="og:type" content="website" />
	<!--<meta property="og:url" content="https://www.domain.com" />
	 <meta property="og:image" content="https://www.domain.com/images/og-image.jpg" /> 
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />-->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<slot />

<style>
	:global(*) {
		--white: #fdfdfd;
        font-family: 'Sfpro';

		/* Smallest size, suitable for small print or tags */
		--fs-300: 12px;
		/* Small text, good for body copy or less emphasized text */
		--fs-400: 14px;
		/* Medium text, good for body copy or subtitles */
		--fs-500: 16px;
		/* Large text, good for subtitles or small headings */
		--fs-600: 20px;
		/* Extra large, good for titles */
		--fs-700: 24px;
		/* 2X large, good for main headings */
		--fs-800: 32px;

		/* // MOBILE */
		/* Smallest size, suitable for small print or tags */
		--mfs-300: 10px;
		/* Small text, good for body copy or less emphasized text */
		--mfs-400: 12px;
		/* Medium text, good for body copy or subtitles */
		--mfs-500: 14px;
		/* Large text, good for subtitles or small headings */
		--mfs-600: 18px;
		/* Extra large, good for titles */
		--mfs-700: 20px;
		/* 2X large, good for main headings */
		--mfs-800: 28px;

		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
	:global(body) {
		background-color: var(--white);
	}
</style>
