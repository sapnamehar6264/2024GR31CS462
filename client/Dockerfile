# Use Node.js image to build the React app
FROM node:16 AS frontend

# Set working directory for React
WORKDIR /app

# Copy React package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the React app source code
COPY . .

# Build the React app
RUN npm run build

# Expose the port that React will run on
EXPOSE 3000

# Command to run React app
CMD ["npm", "start"]
