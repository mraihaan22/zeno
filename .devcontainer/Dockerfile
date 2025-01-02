FROM mcr.microsoft.com/devcontainers/base:alpine-3.13

USER root
# Install dependencies
RUN apk update && \
    apk add --no-cache \
    bash \
    git \
    openssh \
    curl \
    nodejs \
    npm

# Set default user to root
USER root

# Set working directory
WORKDIR /workspace

# Expose SSH port
EXPOSE 22
