#!/bin/bash

echo "AfterInstall hook - setting up React app"

# Navigate to app directory
cd /home/ec2-user/app

# Ensure correct ownership
sudo chown -R ec2-user:ec2-user /home/ec2-user/app

# Switch to ec2-user and install dependencies
sudo -u ec2-user npm install

# Build the production version
sudo -u ec2-user npm run build

# Install 'serve' globally if not already installed
sudo -u ec2-user npm install -g serve

# Kill any existing 'serve' process (if running)
pkill -f "serve" || true

# Start the React app on port 80 using 'serve'
nohup sudo -u ec2-user serve -s build -l 80 > /home/ec2-user/serve.log 2>&1 &
