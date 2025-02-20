export const selectedFilter = $state('All');

export const stores = $state<{selectedFilter:string, currentPage:number}>({
    selectedFilter : "All",
    currentPage: 1
});

export function filterMenu(foodType: string) {
    if (stores.selectedFilter === foodType) {
        stores.selectedFilter = 'All';
    } else {
        stores.selectedFilter = foodType;
    }
    stores.currentPage = 1;
}