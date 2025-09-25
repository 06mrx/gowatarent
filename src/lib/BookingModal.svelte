<script>
    import { quintOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    export let show = false;
    export let item = null; // Data mobil/tur yang dipilih
    export let serviceTypes = []; // Jenis layanan yang tersedia
    export let currentLanguage = 'id'; // Bahasa saat ini
    export let cars = null;
    let name = '';
    let whatsapp = '';
    let pickupDate = '';
    let pickupTime = '';
    let returnDate = '';
    let returnTime = '';
    let message = '';
    let service = '';
    let fleet = '';
    let totalPassenger = 0;

    // Teks terjemahan
    const translations = {
        id: {
            title: 'Pesan',
            nameLabel: 'Nama Lengkap*',
            namePlaceholder: 'Nama Anda',
            serviceLabel: 'Jenis Layanan',
            servicePlaceholder: 'Pilih Jenis Layanan',
            fleetLabel: 'Pilih Kendaraan',
            fleetPlaceholder: 'Pilih Kendaraan',
            whatsappLabel: 'Nomor WhatsApp*',
            whatsappPlaceholder: 'Contoh: 6281234567890',
            pickupDateLabel: 'Tanggal Ambil*',
            pickupTimeLabel: 'Waktu Ambil',
            returnDateLabel: 'Tanggal Kembali*',
            returnTimeLabel: 'Waktu Kembali',
            messageLabel: 'Pesan Tambahan',
            submitButton: 'Kirim ke WhatsApp',
            requiredFieldsAlert: 'Mohon lengkapi semua data wajib!',
            passengerLabel: 'Jumlah Penumpang',
            messagePlaceholder: 'Lokasi Jemput, Tujuan Wisata, dll.'

        },
        en: {
            title: 'Order',
            nameLabel: 'Full Name*',
            namePlaceholder: 'Your Name',
            serviceLabel: 'Service Type',
            servicePlaceholder: 'Select Service Type',
            fleetLabel: 'Choose Vehicle',
            fleetPlaceholder: 'Select Vehicle',
            whatsappLabel: 'WhatsApp Number*',
            pickupDateLabel: 'Pickup Date*',
            pickupTimeLabel: 'Pickup Time',
            returnDateLabel: 'Return Date*',
            returnTimeLabel: 'Return Time',
            messageLabel: 'Additional Message',
            submitButton: 'Send to WhatsApp',
            requiredFieldsAlert: 'Please complete all required fields!',
            passengerLabel: 'Total Passenger',
            messagePlaceholder: 'Pickup Location, Tour Destination, etc.'
        }
    };

    function closeModal() {
        show = false;
        // Reset form
        name = whatsapp = pickupDate = pickupTime = returnDate = returnTime = message = '';
    }
    function getServiceByIndex(index) {
        // switch (index) {
        //     case 0:
        //         return currentLanguage === 'id' ? 'Rental Dalam Kota' : 'City Rental';
        //     case 1:
        //         return currentLanguage === 'id' ? 'Rental Luar Kota' : 'Out Of City Rental';
        //     case 2:
        //         return currentLanguage === 'id' ? 'Lepas Kunci' : 'Self Drive';
        //     case 3:
        //         return currentLanguage === 'id' ? 'Antar Jemput Bandara' : 'Airpot Transfer';
        //     case 4:
        //         return currentLanguage === 'id' ? 'Paket Wisata' : 'Tour Package';
        //     case 5:
        //         return 'Custom Trip';
        //     default:
        //         return '';
        // }

        switch (index) {
            case 0:
                return 'Rental Dalam Kota';
            case 1:
                return 'Rental Luar Kota';
            case 2:
                return 'Lepas Kunci';
            case 3:
                return 'Antar Jemput Bandara';
            case 4:
                return 'Paket Wisata';
            case 5:
                return 'Custom Trip';
            default:
                return '';
        }
    }

    function formatWhatsAppMessage() {
        // Encoding data untuk URL WhatsApp
        const formattedMessage = encodeURIComponent(`Halo, saya ingin memesan ${fleet}.

* Nama Lengkap: ${name}
* Jenis Layanan: ${getServiceByIndex(service)}
* Jumlah Penumpang: ${totalPassenger || '-'} Orang    
* Tanggal Ambil: ${pickupDate}
* Waktu Ambil: ${pickupTime}
* Tanggal Kembali: ${returnDate}
* Waktu Kembali: ${returnTime}
* Pesan Tambahan: ${message || '-'}

Mohon konfirmasi ketersediaan. Terima kasih.`);

        const whatsappNumber = "6282343663454"; // Ganti dengan nomor WhatsApp Anda
        return `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
    }

    function handleSubmit() {
        if (!name || !pickupDate || !returnDate) {
            alert(translations[currentLanguage].requiredFieldsAlert);
            return;
        }

        const whatsappUrl = formatWhatsAppMessage();
        window.open(whatsappUrl, '_blank');
        closeModal();
    }
</script>

{#if show && item}
<div 
    class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-[1001]"
    transition:fade={{ duration: 300 }}
>
    <div 
        class="bg-white p-8 rounded-xl shadow-2xl  w-full  md:max-w-4xl  max-h-[90vh] overflow-y-auto"
        transition:fly={{ y: 50, duration: 500, easing: quintOut }}
    >
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">{translations[currentLanguage].title}</h2>
            <button on:click={closeModal} class="text-gray-500 text-5xl hover:text-gray-800 transition-colors">&times;</button>
        </div>

        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="name" class="block text-gray-700 font-medium">{translations[currentLanguage].nameLabel}</label>
                <input placeholder={translations[currentLanguage].namePlaceholder} type="text" id="name" bind:value={name} class="w-full mt-1 p-2 border border-gray-300 rounded-md" required />
                </div>
                <!-- <div>
                    <label for="whatsapp" class="block text-gray-700 font-medium">{translations[currentLanguage].whatsappLabel}</label>
                    <input type="tel" id="whatsapp" bind:value={whatsapp} class="w-full mt-1 p-2 border border-gray-300 rounded-md" placeholder="Contoh: 6281234567890" required />
                </div> -->
                <div>
                    <label for="totalPassenger" class="block text-gray-700 font-medium">{translations[currentLanguage].passengerLabel}</label>
                <input type="number" id="totalPassenger" bind:value={totalPassenger} class="w-full mt-1 p-2 border border-gray-300 rounded-md" required />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="serviceType" class="block text-gray-700 font-medium">{translations[currentLanguage].serviceLabel}</label>
                    <select bind:value={service} id="serviceType" class="w-full mt-1 p-2 border border-gray-300 rounded-md">
                        <option selected disabled value="">{translations[currentLanguage].servicePlaceholder}</option>
                        {#each serviceTypes as service,index}
                            <option value={index}>{service}</option>
                        {/each}
                    </select>
                </div>
    
                <div>
                    <label for="fleet" class="block text-gray-700 font-medium">{translations[currentLanguage].fleetLabel}</label>
                    <select bind:value={fleet} id="fleet" class="w-full mt-1 p-2 border border-gray-300 rounded-md">
                        <option selected disabled value="">{translations[currentLanguage].fleetPlaceholder}</option>
                        {#each cars as car}
                            <option value={car.name}>{car.name + " | " + car.price + "/day"}</option>
                        {/each}
                    </select>
                </div>

                
            </div>
            

            

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="pickupDate" class="block text-gray-700 font-medium">{translations[currentLanguage].pickupDateLabel}</label>
                    <input type="date" id="pickupDate" bind:value={pickupDate} class="w-full mt-1 p-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label for="pickupTime" class="block text-gray-700 font-medium">{translations[currentLanguage].pickupTimeLabel}</label>
                    <input type="time" id="pickupTime" bind:value={pickupTime} class="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="returnDate" class="block text-gray-700 font-medium">{translations[currentLanguage].returnDateLabel}</label>
                    <input type="date" id="returnDate" bind:value={returnDate} class="w-full mt-1 p-2 border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label for="returnTime" class="block text-gray-700 font-medium">{translations[currentLanguage].returnTimeLabel}</label>
                    <input type="time" id="returnTime" bind:value={returnTime} class="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
            </div>

            <div>
                <label for="message" class="block text-gray-700 font-medium">{translations[currentLanguage].messageLabel}</label>
                <textarea placeholder={translations[currentLanguage].messagePlaceholder} id="message" bind:value={message} rows="3" class="w-full mt-1 p-2 border border-gray-300 rounded-md">

                </textarea>
            </div>

            <button type="submit" class="w-full py-3 mt-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors">
                {translations[currentLanguage].submitButton}
            </button>
        </form>
    </div>
</div>
{/if}
