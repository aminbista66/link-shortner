# Use a Node.js base image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN yarn install

# Copy the rest of your application files to the container
COPY . .

# Expose the port your NestJS application listens on
EXPOSE 3001

# Start your NestJS application
CMD ["yarn", "start", "dev"]
