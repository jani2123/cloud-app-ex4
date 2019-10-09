# This line fetches the Node Docker image with tag "10"
# from Docker Hub.
FROM node:10

# Create directory for server2
WORKDIR /usr/src/server2

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Map to port 8002
EXPOSE 8002

# Run the app
CMD [ "npm", "start" ]