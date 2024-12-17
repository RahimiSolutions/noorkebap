<script>
	import Star from '$lib/icons/Star.svelte';

	import manOne from '$lib/images/man1.png';
	import manTwo from '$lib/images/man2.png';
	import womanOne from '$lib/images/woman1.png';
</script>

<div class="reviews">
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
</style>
