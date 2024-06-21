# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose a port (if your application needs it)
EXPOSE 3000

# Start the application
CMD [ "npm", "run","dev"]