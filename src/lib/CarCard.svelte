<script>
    import { createEventDispatcher } from 'svelte';
    import { CarIcon, Users, Gearshift, Luggage } from 'lucide-svelte';

    export let car;

    const dispatch = createEventDispatcher();

    function handleBookClick() {
        dispatch('book', { car });
    }
</script>

<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer overflow-hidden group">
    <img src={car.image} alt={car.name} class="w-full h-52 object-cover" />
    <div class="p-6">
        <h3 class="text-2xl font-semibold text-gray-800 mb-1">{car.name}</h3>
        <p class="text-sm text-gray-500 mb-4">{car.type}</p>
        
        <div class="grid grid-cols-2 gap-y-2 mb-4 text-gray-600">
            <div class="flex items-center space-x-2">
                <Users size={18} class="text-blue-500" />
                <span>{car.passengers} Penumpang</span>
            </div>
            <div class="flex items-center space-x-2">
                <Luggage size={18} class="text-blue-500" />
                <span>{car.luggage} Koper</span>
            </div>
            <div class="flex items-center space-x-2">
                <Gearshift size={18} class="text-blue-500" />
                <span>{car.transmission}</span>
            </div>
        </div>

        <div class="flex items-center justify-between mb-4">
            <span class="text-xl font-bold text-gray-800">Rp {car.price.toLocaleString('id-ID')}</span>
            <span class="text-sm text-gray-500">/ hari</span>
        </div>

        <button on:click|stopPropagation={handleBookClick} class="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Pesan Sekarang
        </button>
    </div>
</div>