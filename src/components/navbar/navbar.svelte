<script>
	import logo from '$lib/images/logo.png';
	import Button from '../buttons/button.svelte';
	import MediaQuery from '../MediaQuery/MediaQuery.svelte';
</script>

<MediaQuery query="(min-width: 1024px)" let:matches>
	{#if matches}
		<nav class="navbar">
			<div class="logo">
				<img src={logo} alt="Noor Kebap" />
			</div>
			<div class="menu-container">
				<ul class="menu">
					<li class="menu-item">
						<a href="/#top">Inicio</a>
					</li>
					<li class="menu-item">
						<a href="/#menú">Menú</a>
					</li>
					<li class="menu-item">
						<a href="/#contacto">Contacto</a>
					</li>
				</ul>
			</div>
			<div class="cta">
				<Button
					text="Pedido"
					borderRadius="100vw"
					bgColor="#e44961"
					fontweight="600"
					link="#menú"
				/>
			</div>
		</nav>
	{/if}
</MediaQuery>
<MediaQuery query="(max-width: 1023px)" let:matches>
	{#if matches}
		<nav class="mobile-navbar">
			<div class="logo">
				<img src={logo} alt="Noor Kebap" />
			</div>
			
			<div class="cta">
				<Button
					text="Pedido"
					borderRadius="100vw"
					bgColor="#e44961"
					fontweight="600"
					link="#menú"
					fontsize="var(--fs-500)"
				/>
			</div>
		</nav>
	{/if}
</MediaQuery>

<style lang="scss">
	.navbar {
		z-index: 999;
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100px;
		width: 90%;
		max-width: 1800px;
		top: 25px;
		left: 50%;
		transform: translateX(-50%);
		.logo {
			height: 100%;
			img {
				height: clamp(4.875rem, 3.3036rem + 2.4554vw, 6.25rem);
			}
		}
		.menu-container {
			.menu {
				display: flex;
				gap: 50px;
				background-color: var(--white);
				padding: 5px 25px;
				border-radius: 100vw;
				.menu-item {
					font-size: var(--fs-700);
					padding: 4px 8px;
					list-style-type: none;
					a {
						text-decoration: none;
						color: var(--black-500);
						font-weight: 600;
						transition: 0.2s ease-in-out;

						&:hover {
							color: var(--red-300);
						}
					}
				}
			}
		}
	}
	.mobile-navbar {
		z-index: 999;
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		max-width: 1800px;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		.logo {
			height: 100%;
			img {
				height: clamp(3rem, 1.9599rem + 4.7548vw, 5rem);
			}
		}
		.cta {
		}
	}
</style>
