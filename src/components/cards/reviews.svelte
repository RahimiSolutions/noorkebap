<script>
	import { goto } from '$app/navigation';
	import Star from '$lib/icons/Star.svelte';

	import manOne from '$lib/images/man1.png';
	import manTwo from '$lib/images/man2.png';
	import womanOne from '$lib/images/woman1.png';
	import MediaQuery from '../MediaQuery/MediaQuery.svelte';

	function clicked() {
		goto('/#reseñas');
	}
</script>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="reviews" onclick={clicked}>
			<div class="images">
				<img src={womanOne} alt="Woman Reviewer profile" />
				<img src={manOne} alt="man Reviewer profile" />
				<img src={manTwo} alt="man Reviewer profile" />
			</div>
			<div class="text">
				<div class="title">
					<h3>Nuestros clientes contentos</h3>
				</div>
				<div class="review">
					<div class="star"><Star width="24" /></div>
					<div class="rating"><p>4.1</p></div>
					<div class="amount"><p>(175 Reseñas)</p></div>
				</div>
			</div>
		</div>
	{/if}
</MediaQuery>
<MediaQuery query="(max-width: 1023px)" let:matches>
	{#if matches}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div class="mobile-reviews" onclick={clicked}>
			<div class="images">
				<img src={womanOne} alt="Woman Reviewer profile" />
				<img src={manOne} alt="man Reviewer profile" />
				<img src={manTwo} alt="man Reviewer profile" />
			</div>
			<div class="text">
				<div class="title">
					<h3>Nuestros clientes contentos</h3>
				</div>
				<div class="review">
					<div class="star"><Star width="20" /></div>
					<div class="rating"><p>4.1</p></div>
					<div class="amount"><p>(175 Reseñas)</p></div>
				</div>
			</div>
		</div>
	{/if}
</MediaQuery>

<style lang="scss">
	.reviews {
		display: flex;
		height: 75px;
		.images {
			display: flex;
			position: relative;
			width: 180px;
			img {
				width: 75px;
				border: 2px solid white;
				border-radius: 100vw;
				position: absolute;

				&:nth-child(1) {
					z-index: 1;
				}
				&:nth-child(2) {
					left: 50px;
					z-index: 2;
				}
				&:nth-child(3) {
					left: 100px;
					z-index: 3;
				}
				&:hover {
					z-index: 999;
				}
			}
		}
		.text {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: start;
			.title {
			}
			.review {
				display: flex;
				gap: 8px;
				.star {
				}
				.rating {
				}
				.amount {
				}
			}
		}
	}
	.mobile-reviews {
		display: flex;
		height: 75px;
		.images {
			display: flex;
			position: relative;
			align-items: center;
			width: 180px;
			img {
				width: 60px;
				border: 2px solid white;
				border-radius: 100vw;
				position: absolute;

				&:nth-child(1) {
					left: 0;
					z-index: 1;
				}
				&:nth-child(2) {
					left: 30px;
					z-index: 2;
				}
				&:nth-child(3) {
					left: 60px;
					z-index: 3;
				}
			}
		}
		.text {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: start;
			.title {
				font-size: var(--fs-500);
			}
			.review {
				display: flex;
				gap: 4px;
				.rating {
					font-size: var(--fs-400);
					font-weight: 600;
				}
				.amount {
					font-size: var(--fs-400);
				}
			}
		}
	}
</style>
