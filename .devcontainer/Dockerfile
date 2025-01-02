# Menggunakan image Alpine dengan Node.js versi 18
FROM node:18-alpine

# Mengatur direktori kerja
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin semua file aplikasi
COPY . .

# Menjalankan aplikasi
CMD ["npm", "start"]
