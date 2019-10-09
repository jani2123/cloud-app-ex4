# This line fetches the Node Docker image with tag "10"
# from Docker Hub.
FROM node:10

# Create directory for server1
WORKDIR /usr/src/server1

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Map to port 8001
EXPOSE 8001

# Run the app
CMD [ "npm", "start" ]
