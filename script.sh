#!/bin/bash

# Parameters
ZIP_FILE=$1
REPO_URL=$2
BRANCH_NAME=$3

# Unzip the file
unzip $ZIP_FILE

# Get the directory name
DIR_NAME=${ZIP_FILE%.zip}

# Change into the directory
cd $DIR_NAME

# Initialize git
git init

# Add all files to git
git add .

# Commit the files
git commit -m "Initial commit"

# Set the remote repository
git remote add origin $REPO_URL

# Create a new branch
git branch $BRANCH_NAME

# Switch to the new branch
git checkout $BRANCH_NAME

# Push to the new branch on the remote repository
git push origin $BRANCH_NAME

