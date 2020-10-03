#!/usr/bin/env bash

XXXX="week39"
DROPLET_URL="https://www.albertsl.com/"

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@$DROPLET_URL:/var/www/$XXXX

