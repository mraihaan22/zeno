module.exports = {
    approval: {
        num: "6283809358811", // Nomor yang diizinkan untuk menyetujui script
        text: "setujui", // Kata kunci untuk menyetujui script
        set: "ANDA HARUS MENDAPATKAN PERSETUJUAN OLEH SKYZO",
        greet: "ANDA TELAH BERHASIL DI SETUJUI SILAHKAN GUNAKAN SEBAIK MUNGKIN"
    },
    creatorScript: '6283809358811', // Jangan Hapus Ini
    filePath: './approval', // Path untuk file approval
    checkFilePath: './anyaforger.js', // Path untuk file yang dicek integritasnya dan juga itu sesuai kan dengan case milik kalian yak
    codeToDetect: `main();` // Kode yang dicek integritasnya
};
