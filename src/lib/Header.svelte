<script>
    import { fly } from 'svelte/transition';

    // state untuk mengelola menu mobile dan pilihan bahasa
    let showLangMenu = false;
</script>

<header class="bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" class="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo Rental" class="h-10" />
            <span class="font-bold text-xl text-gray-800">Rental Anda</span>
        </a>
        
        <nav class="hidden md:flex items-center space-x-8">
            <a href="/" class="text-gray-600 hover:text-blue-500 font-medium transition-colors">Beranda</a>
            <a href="/services" class="text-gray-600 hover:text-blue-500 font-medium transition-colors">Layanan</a>
            <a href="/fleet" class="text-gray-600 hover:text-blue-500 font-medium transition-colors">Armada</a>
            <a href="/contact" class="text-gray-600 hover:text-blue-500 font-medium transition-colors">Kontak</a>
            
            <div class="relative">
                <button on:click={() => showLangMenu = !showLangMenu} class="text-2xl hover:bg-gray-100 p-2 rounded-lg transition-colors">
                    🇮🇩
                </button>
                {#if showLangMenu}
                    <div class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10" transition:fly={{ y: 5, duration: 200 }}>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">🇮🇩 Bahasa Indonesia</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">🇬🇧 English</a>
                    </div>
                {/if}
            </div>
        </nav>

        </div>
</header>