<script>
    import { quintOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    // State untuk mengontrol visibilitas modal
    export let showModal = true;

    // Fungsi untuk memilih bahasa
    function selectLanguage(lang) {
        // Di sini kita akan menyimpan pilihan bahasa
        localStorage.setItem('selectedLanguage', lang);
        showModal = false;
        // Di sini juga bisa ditambahkan logic untuk mereload halaman
        // dengan bahasa yang sudah dipilih
        location.reload(); 
    }
</script>

{#if showModal}
<div 
    class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[1001]"
    transition:fade={{ duration: 300 }}
>
    <div 
        class="bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full"
        transition:fly={{ y: 50, duration: 500, easing: quintOut }}
    >
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Choose your language</h2>
        <p class="text-lg text-gray-600 mb-8">Pilih bahasa Anda</p>
        
        <div class="space-y-4">
            <button 
                on:click={() => selectLanguage('id')}
                class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-colors"
            >
                🇮🇩 Bahasa Indonesia
            </button>
            <button 
                on:click={() => selectLanguage('en')}
                class="w-full py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg rounded-lg transition-colors"
            >
                🇬🇧 English
            </button>
        </div>
    </div>
</div>
{/if}