# Gunakan base image Alpine
FROM mcr.microsoft.com/devcontainers/base:alpine-3.20

# Set user ke root
USER root

# Instal paket yang diperlukan
RUN apk update && \
    apk add --no-cache \
    bash \
    bat \
    curl \
    nano \
    navi \
    nodejs \
    npm \
    docker \
    docker-compose \
    openssh

# Instal pnpm versi spesifik
RUN npm install -g pnpm@9.4.0

# Aktifkan corepack untuk manajemen paket
RUN corepack enable 

# Tetapkan user default ke root
USER root

# Setel direktori kerja
WORKDIR /workspace 
