FROM node:22.11.0

# Create app directory
WORKDIR /usr/src/app

# Copy app
COPY . .

# Install
RUN npm install

# Docker Run Command
EXPOSE 3001
CMD [ "node", "server.js" ]
