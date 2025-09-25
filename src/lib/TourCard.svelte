<script>
    import { createEventDispatcher } from 'svelte';

    export let tour;

    const dispatch = createEventDispatcher();

    function handleBookClick() {
        dispatch('book', { tour });
    }
</script>

<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer overflow-hidden">
    <img src={tour.image} alt={tour.name} class="w-full h-52 object-cover" />
    <div class="p-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-2">{tour.name}</h3>
        <p class="text-gray-600 mb-4">{tour.description}</p>
        <button on:click|stopPropagation={handleBookClick} class="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Pesan Sekarang
        </button>
    </div>
</div>