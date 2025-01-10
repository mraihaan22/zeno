const fs = require('fs');

// Fungsi untuk loading dan menyimpan ke file
function loadingToFile() {
    const outputFile = 'loading.txt'; // Nama file output
    const writeStream = fs.createWriteStream(outputFile); // Membuat stream untuk menulis ke file

    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
            const message = `"*LOADING ${i}%*",\n`; // Pesan yang akan ditulis
            writeStream.write(message); // Menulis pesan ke file
            console.log(message.trim()); // Menampilkan pesan di konsol
        }, i * 100); // Mengatur jeda 100ms untuk setiap persentase
    }

    // Menutup stream setelah selesai menulis
    setTimeout(() => {
        writeStream.end(); // Menutup stream
        console.log(`Selesai! Pesan disimpan di ${outputFile}`);
    }, 10100); // Menutup stream setelah 10100ms (100 * 100ms + sedikit ekstra)
}

loadingToFile();
