#!/bin/sh

# Start Docker daemon
dockerd &

# Jalankan shell atau command user
exec "$@"
