FROM mcr.microsoft.com/devcontainers/base:alpine

# Set root user as default
USER root

# Install required packages
RUN apk update && apk add --no-cache \
    bash \
    git \
    openssh \
    curl \
    nodejs \
    npm \
    docker \
    docker-cli \
    openrc

# Initialize openrc (needed for service management in Alpine)
RUN openrc && touch /run/openrc/softlevel

# Create workspace directory
WORKDIR /workspace

# Expose SSH port
EXPOSE 22

# Set default user back to root
USER root
