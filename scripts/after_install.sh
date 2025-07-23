#!/bin/bash

echo "AfterInstall hook - installing dependencies"

# Navigate to app directory
cd /home/ec2-user/app

# Ensure correct ownership (in case files are owned by root from CodeDeploy)
sudo chown -R ec2-user:ec2-user /home/ec2-user/app

# Install npm dependencies using ec2-user
sudo -u ec2-user npm install
