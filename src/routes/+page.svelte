<script>
	import { Car, MapPin } from 'lucide-svelte';
	import BookingModal from '$lib/BookingModal.svelte';
	import { PUBLIC_WHATSAPP_NUMBER } from '$env/static/public';
	let currentLanguage = $state('id');
	let isMenuOpen = $state(false);
	let selectedService = $state(null);
	let showLanguageModal = $state(true);
	let showBookingModal = $state(false);
	let selectedItem = $state({
		name: '123'
	});

	let modalOpen = $state(false);
    let modalImage = $state('');

	// export const prerender = true;

	const translations = {
		id: {
			home: 'Beranda',
			services: 'Layanan',
			fleet: 'Armada',
			about: 'Tentang',
			contact: 'Kontak',
			chooseLanguage: 'Pilih Bahasa / Choose Language',
			indonesian: 'Bahasa Indonesia',
			english: 'English',
			heroTitle: ' Gowata Rent',
			heroSubtitle:
				'Gowata Rent menyediakan layanan rental mobil terpercaya dengan armada terawat, harga bersaing, dan pelayanan profesional untuk perjalanan aman dan nyaman',
			bookNow: 'Pesan Sekarang',
			ourFleet: 'Lihat Armada',
			servicesTitle: 'Layanan Kami',
			servicesSubtitle: 'Berbagai pilihan layanan untuk memenuhi kebutuhan perjalanan Anda',
			cityRental: 'Rental Dalam Kota',
			cityRentalDesc: 'Solusi transportasi untuk kebutuhan dalam kota Makassar dan sekitarnya',
			outCityRental: 'Rental Luar Kota',
			outCityRentalDesc: 'Perjalanan jarak jauh ke berbagai destinasi di Sulawesi Selatan',
			selfDrive: 'Lepas Kunci',
			selfDriveDesc: 'Kebebasan berkendara sendiri dengan mobil pilihan Anda',
			airportTransfer: 'Antar Jemput Bandara',
			airportTransferDesc: 'Layanan transfer dari/ke Bandara Sultan Hasanuddin',
			tourPackage: 'Paket Wisata',
			tourPackageDesc: 'Paket lengkap ke destinasi populer: Bira, Toraja, Malino, dan lainnya',
			customTrip: 'Custom Trip',
			customTripDesc: 'Rencana perjalanan disesuaikan dengan keinginan Anda',
			destinationsTitle: 'Destinasi Popular',
			bira: 'Pantai Bira',
			toraja: 'Tana Toraja',
			tempe: 'Danau Tempe',
			malino: 'Malino',
			rammang: 'Rammang-Rammang',
			customDest: 'Destinasi Custom',
			fleetTitle: 'Armada Kami',
			fleetSubtitle: 'Pilihan kendaraan berkualitas untuk perjalanan yang nyaman',
			aboutTitle: 'Tentang Kami',
			aboutDesc:
				'Kami adalah penyedia layanan rental mobil terpercaya di Makassar dengan pengalaman bertahun-tahun melayani wisatawan domestik dan internasional.',
			contactTitle: 'Hubungi Kami',
			contactDesc: 'Siap melayani Anda 24/7 untuk kebutuhan rental mobil',
			feature1: 'Mobil Terawat',
			feature1Desc: 'Semua kendaraan dalam kondisi prima',
			feature2: 'Driver Berpengalaman',
			feature2Desc: 'Supir yang menguasai rute wisata',
			feature3: 'Harga Terjangkau',
			feature3Desc: 'Tarif kompetitif tanpa biaya tersembunyi',
			feature4: 'Pelayanan 24/7',
			feature4Desc: 'Siap melayani kapan saja Anda butuhkan',
			footerDesc: 'Rental mobil terpercaya di Makassar untuk semua kebutuhan perjalanan Anda',
			quickLinks: 'Link Cepat',
			followUs: 'Ikuti Kami',
			ctaTitle: 'Siap Memulai Petualangan?',
			ctaDesc: 'Hubungi kami sekarang untuk mendapatkan penawaran terbaik',
			ctaButton: 'Hubungi WhatsApp',
			biraDesc: 'Nikmati pasir putih dan air jernih di Pantai Bira',
			torajaDesc: 'Eksplorasi budaya unik dan pemandangan indah di Tana Toraja',
			tempeDesc: 'Rasakan keindahan Danau Tempe dengan perahu tradisional',
			malinoDesc: 'Dingin dan asri, Malino cocok untuk relaksasi',
			rammangDesc: 'Keajaiban alam di Rammang-Rammang dengan tebing karstnya',
			cta: 'Pesan Sekarang',
			services: 'Layanan Kami',
			carsAvailable: 'Mobil Tersedia',
			destinationSubtitle: 'Jelajahi destinasi indah di Sulawesi Selatan',
			petrol: 'Bensin',
			diesel: 'Diesel'
		},
		en: {
			home: 'Home',
			services: 'Services',
			fleet: 'Fleet',
			about: 'About',
			contact: 'Contact',
			chooseLanguage: 'Choose Language / Pilih Bahasa',
			indonesian: 'Bahasa Indonesia',
			english: 'English',
			heroTitle: ' Gowata Rent',
			heroSubtitle: 'Gowata Rent provides trusted car rental services with a well-maintained fleet, competitive prices, and professional service for safe and comfortable travel',
			bookNow: 'Book Now',
			ourFleet: 'View Fleet',
			servicesTitle: 'Our Services',
			servicesSubtitle: 'Various service options to meet your travel needs',
			cityRental: 'City Rental',
			cityRentalDesc: 'Transportation solution for needs within Makassar city and surroundings',
			outCityRental: 'Out of City Rental',
			outCityRentalDesc: 'Long distance travel to various destinations in South Sulawesi',
			selfDrive: 'Self Drive',
			selfDriveDesc: 'Freedom to drive yourself with your choice of car',
			airportTransfer: 'Airport Transfer',
			airportTransferDesc: 'Transfer service from/to Sultan Hasanuddin Airport',
			tourPackage: 'Tour Package',
			tourPackageDesc: 'Complete packages to popular destinations: Bira, Toraja, Malino, and more',
			customTrip: 'Custom Trip',
			customTripDesc: 'Travel plans customized to your wishes',
			destinationsTitle: 'Popular Destinations',
			bira: 'Bira Beach',
			toraja: 'Tana Toraja',
			tempe: 'Tempe Lake',
			malino: 'Malino',
			rammang: 'Rammang-Rammang',
			customDest: 'Custom Destination',
			fleetTitle: 'Our Fleet',
			fleetSubtitle: 'Quality vehicle options for comfortable travel',
			aboutTitle: 'About Us',
			aboutDesc:
				'We are a trusted car rental service provider in Makassar with years of experience serving domestic and international tourists.',
			contactTitle: 'Contact Us',
			contactDesc: 'Ready to serve you 24/7 for your car rental needs',
			feature1: 'Well-Maintained Cars',
			feature1Desc: 'All vehicles in prime condition',
			feature2: 'Experienced Drivers',
			feature2Desc: 'Drivers who master tourist routes',
			feature3: 'Affordable Prices',
			feature3Desc: 'Competitive rates with no hidden fees',
			feature4: '24/7 Service',
			feature4Desc: 'Ready to serve whenever you need',
			footerDesc: 'Trusted car rental in Makassar for all your travel needs',
			quickLinks: 'Quick Links',
			followUs: 'Follow Us',
			ctaTitle: 'Ready to Start Your Adventure?',
			ctaDesc: 'Contact us now to get the best offer',
			ctaButton: 'Contact WhatsApp',
			biraDesc: 'Enjoy white sand and clear waters at Bira Beach',
			torajaDesc: 'Explore unique culture and beautiful scenery in Tana Toraja',
			tempeDesc: 'Experience the beauty of Tempe Lake with traditional boats',
			malinoDesc: 'Cool and serene, Malino is perfect for relaxation',
			rammangDesc: 'Natural wonder in Rammang-Rammang with its karst cliffs',
			cta: 'Book Now',
			services: 'Our Services',
			carsAvailable: 'Cars Available',
			destinationSubtitle: 'Explore beautiful destinations in South Sulawesi',
			petrol: 'Petrol',
			diesel: 'Diesel'
		}
	};

	const t = (key) => translations[currentLanguage][key] || key;

	const changeLanguage = (lang) => {
		currentLanguage = lang;
		showLanguageModal = false;
	};

	const handleBook = (xServices) => {
		showBookingModal = true;
		selectedService = xServices;
	};

	const car2rows = [
		{
			name: 'Brio',
			category: 'SUV',
			isPterol: true,
			passengers: '5',
			price: '250-350K',
			features: ['AUTOMATIC', 'AC', 'AUDIO', 'COMFORTABLE'],
			image: '/images/brio.webp'
		},
		{
			name: 'Agya',
			category: '4WD SUV',
			isPterol: false,
			passengers: '7',
			price: '250-300K',
			features: ['4WD', 'AC', 'AUDIO', 'COMFORTABLE'],
			image: '/images/agya.webp'
		},
		{
			name: 'Jazz',
			category: '4WD SUV',
			isPterol: false,
			passengers: '7',
			price: '250-300K',
			features: ['4WD', 'AC', 'AUDIO', 'COMFORTABLE'],
			image: '/images/jazz.webp'
		},
		{
			name: 'HRV',
			category: 'SUV',
			isPterol: true,
			passengers: '5',
			price: '300-350K',
			features: ['AUTOMATIC', 'AC', 'AUDIO', 'COMFORTABLE'],
			image: '/images/hrv.webp'
		},
		{
			name: 'City Hatchback',
			category: '4WD SUV',
			isPterol: false,
			passengers: '7',
			price: '350-400K',
			features: ['4WD', 'AC', 'AUDIO', 'COMFORTABLE'],
			image: '/images/city.webp'
		},
		{
			name: 'Raize',
			category: '4WD SUV',
			isPterol: false,
			passengers: '7',
			price: '300-350K',
			features: ['4WD', 'AC', 'AUDIO', 'COMFORTABLE'],
			image: '/images/raize.webp'
		},
	];

	const car3rows = [
		{
			name: 'Xpander',
			price: '250-350K',
			image: '/images/xpander.webp'
		},
		{
			name: 'Rush',
			price: '250-350K',
			image: '/images/rush.webp'
		},
		{
			name: 'BRV',
			price: '250-350K',
			image: '/images/brv.webp'
		},
		{
			name: 'All New Avanza',
			price: '250-350K',
			image: '/images/avanza.webp'
		},
		{
			name: 'Sigra',
			price: '250-350K',
			image: '/images/sigra.webp'
		},
		{
			name: 'Innova Reborn',
			price: '250-350K',
			image: '/images/innova_reborn.webp'
		},
	];

	const premiumCars = [
		{
			name: 'Innova Zenix',
			price: '250-350K',
			image: '/images/innova_zenix.webp'
		},
		{
			name: 'Fortuner',
			price: '250-350K',
			image: '/images/fortuner.webp'
		},
		{
			name: 'Pajero',
			price: '250-350K',
			image: '/images/pajero.webp'
		},
		{
			name: 'Alphard',
			price: '250-350K',
			image: '/images/alphard.webp'
		},
		{
			name: 'Hiace',
			price: '250-350K',
			image: '/images/hiace.webp'
		}
	]

	const cars = [
		...car2rows,
		...car3rows.map(car => ({
			name: car.name,
			price: car.price,
		})),
		...premiumCars.map(car => ({
			name: car.name,
			price: car.price,
		}))
	];
	const destinations = [
		{
			name: t('bira'),
			image: '/images/hero-bira.jpg',
			desc: translations['en'].biraDesc
		},
		{
			name: t('toraja'),
			image: '/images/toraja.jpg',
			desc: translations['en'].torajaDesc
		},
		{
			name: t('malino'),
			image: '/images/malino.jpg',
			desc: translations['en'].malinoDesc
		},
		{
			name: t('rammang'),
			image: '/images/rammang.jpg',
			desc: translations['en'].rammangDesc
		},
		{
			name: t('tempe'),
			image: '/images/tempe.jpg',
			desc: translations['en'].tempeDesc
		}
	];

	// Fungsi untuk membuka modal dan menampilkan gambar yang dipilih (BARU)
    function openModal(imageSrc) {
        modalImage = imageSrc;
        modalOpen = true;
    }

    // Fungsi untuk menutup modal (BARU)
    function closeModal() {
        modalOpen = false;
    }
</script>

{#if showBookingModal}
	<BookingModal
		{cars}
		bind:show={showBookingModal}
		item={selectedItem}
		serviceTypes={selectedService}
		{currentLanguage}
	/>
{/if}
<!-- LANGUAGE MODAL -->
{#if showLanguageModal}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
		<div
			class="w-full max-w-md rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-lg"
		>
			<h2 class="mb-8 text-center text-2xl font-light tracking-wide text-gray-800">
				{t('chooseLanguage')}
			</h2>
			<div class="space-y-4">
				<button
					on:click={() => changeLanguage('id')}
					class="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 px-6 py-4 font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:from-red-600 hover:to-rose-600 hover:shadow-xl"
				>
					🇮🇩 {translations.id.indonesian}
				</button>
				<button
					on:click={() => changeLanguage('en')}
					class="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:from-sky-600 hover:to-blue-700 hover:shadow-xl"
				>
					🇺🇸 {translations.en.english}
				</button>
			</div>
		</div>
	</div>
{/if}

{#if modalOpen}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
        on:click|self={closeModal}
    >
        <div class="relative max-w-4xl p-4">
            <button
                class="absolute top-4 right-4 z-50 rounded-full bg-white px-2 text-2xl font-bold text-gray-800 transition-colors duration-200 hover:bg-gray-200"
                on:click={closeModal}
            >
                &times;
            </button>
            <img src={modalImage} alt="Full Preview" class="max-h-[90vh] w-auto rounded-lg shadow-2xl" />
        </div>
    </div>
{/if}
<!-- NAVIGATION -->
<nav class="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
	<div class="mx-auto max-w-7xl px-6">
		<div class="flex items-center justify-between py-4">
			<div class="text-xl font-semibold text-gray-900">Gowata Rent</div>
			<div class="hidden md:flex space-x-6">
				{#each ['home', 'services', 'fleet', 'contact'] as link}
					<a href={`#${link}`} class="text-gray-600 hover:text-red-700 font-medium transition">{t(link)}</a>
				{/each}
			</div>
			<div class="flex items-center space-x-3">
				<button on:click={() => (showLanguageModal = true)} class="text-sm text-gray-600 hover:text-gray-900">
					{currentLanguage === 'id' ? '🇮🇩 ID' : '🇺🇸 EN'}
				</button>
				<button on:click={() => (isMenuOpen = !isMenuOpen)} class="md:hidden text-gray-700">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
		{#if isMenuOpen}
			<div class="md:hidden py-4 border-t border-gray-200">
				{#each ['home', 'services', 'fleet', 'contact'] as link}
					<a href={`#${link}`} class="block py-2 text-gray-700">{t(link)}</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>

<!-- HERO SECTION -->
<!-- HERO SECTION - VERSI BARU -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
	<div class="absolute inset-0 z-0">
		<img 
			src="/images/rammang.webp" 
			alt="Bira Beach" 
			class="w-full h-full object-cover opacity-60"
		/>
	</div>

	<div class="relative z-10 text-center px-6 max-w-4xl">
		<div class="inline-block mb-6 px-4 py-2 bg-red-900/30 backdrop-blur-sm rounded-full border border-red-700/30">
			<span class="text-red-300 font-medium">🚗 Trusted Car Rental in Makassar</span>
		</div>

		<h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
			{t('heroTitle')}
		</h1>

		<p class="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
			{t('heroSubtitle')}
		</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href={"https://wa.me/"+PUBLIC_WHATSAPP_NUMBER}
				target="_blank"
				class="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
			>
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
				WhatsApp Kami
			</a>

			<button
				on:click={() => (showBookingModal = true)}
				class="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300"
			>
				{t('bookNow')}
			</button>
		</div>
	</div>
</section>
<!-- SERVICES SECTION -->
<!-- SERVICES SECTION – VERSI CANGGIH -->
<section id="services" class="py-28 bg-gradient-to-b from-slate-100 to-slate-slate-200">
	<div class="max-w-7xl mx-auto px-6">
		<div class="text-center mb-20">
			<span class="inline-block px-4 py-1 mb-4 text-sm font-medium bg-red-100 text-red-800 rounded-full">
				{t('services')}
			</span>
			<h2 class="text-4xl md:text-5xl font-bold text-slate-900 ">{t('servicesTitle')}</h2>
			<div class="bg-purple-500 h-1 w-42 mx-auto mb-5">

			</div>
			<p class="max-w-2xl mx-auto text-lg text-slate-600">{t('servicesSubtitle')}</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{ key: 'cityRental', icon: Car, color: 'from-blue-500 to-cyan-500', descKey: 'cityRentalDesc' },
				{ key: 'outCityRental', icon: MapPin, color: 'from-emerald-500 to-teal-500', descKey: 'outCityRentalDesc' },
				{ key: 'selfDrive', icon: Car, color: 'from-purple-500 to-fuchsia-500', descKey: 'selfDriveDesc' },
				{ key: 'airportTransfer', icon: MapPin, color: 'from-cyan-500 to-sky-500', descKey: 'airportTransferDesc' },
				{ key: 'tourPackage', icon: MapPin, color: 'from-red-500 to-rose-500', descKey: 'tourPackageDesc' },
				{ key: 'customTrip', icon: Car, color: 'from-rose-500 to-pink-500', descKey: 'customTripDesc' }
			] as service}
				<div
					class="group relative bg-white rounded-2xl p-7 border border-slate-200/60 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/5"
					style="box-shadow: 0 10px 30px -15px rgba(0,0,0,0.05);"
				>
					<!-- Animated background on hover -->
					<div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 {service.color} transition-opacity duration-500"></div>
					
					<!-- Icon container -->
					<div class="relative mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br {service.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
						<svelte:component this={service.icon} class="w-7 h-7" />
					</div>

					<h3 class="text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
						{t(service.key)}
					</h3>
					<p class="text-slate-600 leading-relaxed">
						{t(service.descKey)}
					</p>

					<!-- Subtle underline on hover -->
					<div class="mt-4 w-0 h-0.5 bg-gradient-to-r {service.color} transition-all duration-500 group-hover:w-12"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FLEET SECTION -->
<!-- FLEET CARD BARU -->
<!-- FLEET SECTION – 3 KATEGORI TERPISAH -->
<section id="fleet" class="bg-gradient-to-b from-blue-100 to-slate-green-200 py-24">
	<div class="mx-auto max-w-7xl px-6">

		<!-- Judul Utama -->
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl md:text-5xl font-bold text-gray-900">{t('fleetTitle')}</h2>
			<div class="bg-orange-500 h-1 w-42 mx-auto mb-5"></div>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">{t('fleetSubtitle')}</p>
		</div>

		<!-- === SECTION 1: CITY & ECONOMY CARS === -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold text-slate-800 mb-8 pb-3 border-b border-slate-200">City & Economy Cars</h3>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each car2rows as car}
					<div
						on:click={() => openModal(car.image)}
						class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:border-red-300 hover:-translate-y-1"
					>
						<div class="h-52 overflow-hidden">
							<img
								src={car.image}
								alt={car.name}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
						</div>
						<div class="p-5 space-y-3">
							<div class="flex justify-between items-start">
								<h4 class="font-bold text-slate-800">{car.name}</h4>
								<span class="text-red-700 font-semibold text-sm">{car.price}/day</span>
							</div>
							
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- === SECTION 2: FAMILY & MPV CARS === -->
		<div class="mb-16">
			<h3 class="text-2xl font-semibold text-slate-800 mb-8 pb-3 border-b border-slate-200">Family & MPV Cars</h3>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each car3rows as car}
					<div
						on:click={() => openModal(car.image)}
						class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
					>
						<div class="h-52 overflow-hidden">
							<img
								src={car.image}
								alt={car.name}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
						</div>
						<div class="p-5">
							<div class="flex justify-between items-start">
								<h4 class="font-bold text-slate-800">{car.name}</h4>
								<span class="text-blue-700 font-semibold text-sm">{car.price}/day</span>
							</div>
							<p class="text-xs text-slate-500 mt-2">Ideal for family trips & group travel</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- === SECTION 3: PREMIUM & LUXURY CARS === -->
		<div>
			<h3 class="text-2xl font-semibold text-slate-800 mb-8 pb-3 border-b border-slate-200">Premium & Luxury Cars</h3>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each premiumCars as car}
					<div
						on:click={() => openModal(car.image)}
						class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1"
					>
						<div class="h-52 overflow-hidden">
							<img
								src={car.image}
								alt={car.name}
								class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
						</div>
						<div class="p-5">
							<div class="flex justify-between items-start">
								<h4 class="font-bold text-slate-800">{car.name}</h4>
								<span class="text-purple-700 font-semibold text-sm">{car.price}/day</span>
							</div>
							<p class="text-xs text-slate-500 mt-2">Luxury comfort for special occasions</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>

<section id="contact" class="py-20 bg-red-700 text-white">
	<div class="text-center max-w-3xl mx-auto px-6">
		<h2 class="text-3xl md:text-4xl font-light mb-4">{t('ctaTitle')}</h2>
		<p class="mb-6 text-red-100">{t('ctaDesc')}</p>
		<a
			href={"https://wa.me/"+PUBLIC_WHATSAPP_NUMBER}
			target="_blank"
			class="inline-block bg-white text-red-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
		>
			📱 {t('ctaButton')}
		</a>
	</div>
</section>

<footer class="bg-gray-900 text-gray-400 py-16">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-10">
			<div>
				<div class="text-xl font-semibold text-white mb-4">Gowata Rent</div>
				<p class="text-sm mb-4">{t('footerDesc')}</p>
			</div>
			<div>
				<h4 class="text-red-400 font-medium mb-4">{t('quickLinks')}</h4>
				{#each ['home', 'services', 'fleet', 'contact'] as link}
					<div><a href={`#${link}`} class="hover:text-white block py-1">{t(link)}</a></div>
				{/each}
			</div>
			<div>
				<h4 class="text-red-400 font-medium mb-4">{t('services')}</h4>
				{#each ['cityRental', 'outCityRental', 'selfDrive', 'airportTransfer', 'tourPackage', 'customTrip'] as s}
					<div class="py-1">{t(s)}</div>
				{/each}
			</div>
			<div>
				<h4 class="text-red-400 font-medium mb-4">{t('contact')}</h4>
				<div class="space-y-2">
					<div>📱 +{PUBLIC_WHATSAPP_NUMBER}</div>
					<div>📍 Makassar, Sulawesi Selatan</div>
				</div>
			</div>
		</div>
		<div class="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
			© 2024 Gowata Rent. All rights reserved.
		</div>
	</div>
</footer>

<!-- Floating Button tetap ada -->
<button
	on:click={() => handleBook([t('cityRental'), t('outCityRental'), t('selfDrive'), t('airportTransfer'), t('tourPackage'), t('customTrip')])}
	class="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700 transition z-30"
>
	<Car class="w-6 h-6" />
</button>

<style>
	:global(html) { scroll-behavior: smooth; }
	:global(body) { background-color: #f9fafb; font-family: 'Inter', sans-serif; }
</style>