# Gunakan base image Alpine
FROM mcr.microsoft.com/devcontainers/base:alpine-3.20

# Set user ke root
USER root

# Instal dependencies untuk Docker dan alat tambahan
RUN apk update && apk add --no-cache \
    docker \
    docker-compose \
    openrc \
    nodejs \
    npm \
    sudo \
    python3 \
    py3-pip \
    git \
    bash \
    curl \
    nano \
    && rc-update add docker boot

# Konfigurasi Docker untuk root user
RUN mkdir -p /etc/docker && \
    echo '{"debug":true}' > /etc/docker/daemon.json

# Tambahkan script entrypoint untuk memastikan Docker berjalan
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Tetapkan user default ke root
USER root

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
