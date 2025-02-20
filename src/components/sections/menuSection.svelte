<script lang="ts">
	import pizza from '$lib/images/option_pizza.webp';
	import MenuItem from '../cards/menuItem.svelte';
	import { stores, filterMenu } from '$lib/stores.svelte';
	let menu = [
		{
			number: 1,
			title: 'Margherita Pizza',
			description: 'Classic Italian pizza with tomato sauce, fresh mozzarella, and basil leaves',
			img: pizza,
			foodType: 'Pizza'
		},
		{
			number: 2,
			title: 'Pepperoni Pizza',
			description: 'American favorite topped with spicy pepperoni slices and melted cheese',
			img: pizza,
			foodType: 'Pizza'
		},
		{
			number: 3,
			title: 'Quattro Formaggi Pizza',
			description:
				'Indulgent four-cheese pizza featuring mozzarella, gorgonzola, parmesan, and ricotta',
			img: pizza,
			foodType: 'Pizza'
		},
		{
			number: 4,
			title: 'Vegetarian Pizza',
			description:
				'Colorful medley of bell peppers, onions, mushrooms, and olives on a crispy crust',
			img: pizza,
			foodType: 'Pizza'
		},
		{
			number: 5,
			title: 'Doner Kebab',
			description: 'Succulent sliced meat in pita bread with fresh vegetables and tangy sauce',
			img: pizza,
			foodType: 'Kebab'
		},
		{
			number: 6,
			title: 'Shish Kebab',
			description: 'Grilled skewers of marinated meat and vegetables, served with rice and salad',
			img: pizza,
			foodType: 'Kebab'
		},
		{
			number: 7,
			title: 'Adana Kebab',
			description: 'Spicy minced meat kebab seasoned with red pepper and grilled to perfection',
			img: pizza,
			foodType: 'Kebab'
		},
		{
			number: 8,
			title: 'Classic Cheeseburger',
			description: 'Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles',
			img: pizza,
			foodType: 'Burger'
		},
		{
			number: 9,
			title: 'Bacon Avocado Burger',
			description: 'Gourmet burger featuring crispy bacon, creamy avocado, and chipotle mayo',
			img: pizza,
			foodType: 'Burger'
		},
		{
			number: 10,
			title: 'Veggie Burger',
			description: 'Plant-based patty with grilled vegetables and tangy sauce in a whole grain bun',
			img: pizza,
			foodType: 'Burger'
		},
		{
			number: 11,
			title: 'BBQ Burger',
			description: 'Smoky burger topped with crispy onion rings and sweet barbecue sauce',
			img: pizza,
			foodType: 'Burger'
		},
		{
			number: 12,
			title: 'Stracciatella Gelato',
			description: 'Creamy milk-based gelato with fine chocolate shavings throughout',
			img: pizza,
			foodType: 'Gelato'
		},
		{
			number: 13,
			title: 'Pistachio Gelato',
			description: 'Rich, nutty gelato made with premium Sicilian pistachios',
			img: pizza,
			foodType: 'Gelato'
		},
		{
			number: 14,
			title: 'Fragola Gelato',
			description: 'Refreshing strawberry gelato bursting with natural fruit flavor',
			img: pizza,
			foodType: 'Gelato'
		},
		{
			number: 15,
			title: 'Cioccolato Gelato',
			description: 'Intense dark chocolate gelato for true cocoa lovers',
			img: pizza,
			foodType: 'Gelato'
		}
	];

	const itemsPerPage = 6;

	const filteredMenu = $derived(
		menu.filter(
			(item) => stores.selectedFilter === 'All' || item.foodType === stores.selectedFilter
		)
	);

	const totalPages = $derived(Math.ceil(filteredMenu.length / itemsPerPage));
	const paginatedMenu = $derived(
		filteredMenu.slice((stores.currentPage - 1) * itemsPerPage, stores.currentPage * itemsPerPage)
	);

	function changePage(page: number) {
		if (page > 0 && page <= totalPages) {
			stores.currentPage = page;
		}
	}
</script>

<section class="menu">
	<div class="filters">
		<label class="filter">
			<input
				type="checkbox"
				checked={stores.selectedFilter === 'Pizza'}
				onchange={() => filterMenu('Pizza')}
			/>
			Pizzas
		</label>
		<label class="filter">
			<input
				type="checkbox"
				checked={stores.selectedFilter === 'Kebab'}
				onchange={() => filterMenu('Kebab')}
			/>
			Kebaps
		</label>
		<label class="filter">
			<input
				type="checkbox"
				checked={stores.selectedFilter === 'Burger'}
				onchange={() => filterMenu('Burger')}
			/>
			Hamburguesas
		</label>
		<label class="filter">
			<input
				type="checkbox"
				checked={stores.selectedFilter === 'Gelato'}
				onchange={() => filterMenu('Gelato')}
			/>
			Gelatos
		</label>
	</div>

	<div class="menu-container">
		{#each paginatedMenu as item}
			<MenuItem
				img={item.img}
				title={item.title}
				description={item.description}
				number={item.number}
			/>
		{/each}
	</div>

	<div class="pagination">
		<button
			class="button decrement"
			onclick={() => changePage(stores.currentPage - 1)}
			disabled={stores.currentPage === 1}>Previous</button
		>
		<span>Page {stores.currentPage} of {totalPages}</span>
		<button
			class="button increment"
			onclick={() => changePage(stores.currentPage + 1)}
			disabled={stores.currentPage === totalPages}>Next</button
		>
	</div>
</section>

<style lang="scss">
	.menu {
		.filters {
			justify-content: center;
			display: flex;
			.filter {
				background-color: var(--white);
				box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.5);
				border-radius: 100vw;
				padding: 8px 16px;
				margin: 8px;
				cursor: pointer;
				font-size: var(--fs-600);
				font-weight: 600;
				display: flex;
				align-items: center;
				transition: 0.2s ease-in-out;
				input[type='checkbox'] {
					display: none;
				}
				&:hover {
					background-color: var(--red-200);
				}
			}
			.filter:has(input[type='checkbox']:checked) {
				background-color: var(--red-600);
				color: var(--white);
			}
		}
		.pagination {
			margin-top: 24px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 12px;
			font-size: var(--fs-600);
			.button {
				border: 1px solid var(--red-600);
				background-color: transparent;
				padding: 4px 8px;
				border-radius: 100vw;
				cursor: pointer;
				transition: 0.2s ease-in-out;
				font-size: var(--fs-500);
				&:hover {
					background-color: var(--red-600);
					color: var(--white);
				}
				&:disabled {
					cursor: default;
					border: 1px solid var(--black-200);
					background-color: var(--black-100);
					color: var(--black-300);
				}
			}
		}
	}
</style>
