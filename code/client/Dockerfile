# Pull base docker image from hub
FROM node:10

# Update and install node + react env
RUN apt-get update
RUN npm install -g create-react-app
RUN npm install -g serve

# Copy over the dependencies
COPY package.json package.json

# Install dependencies
RUN npm install

# Copy over repository
COPY . .

# Build the project
RUN npm run build

# Open port for outside connections
EXPOSE 3000

# Run
CMD serve -p 3000 -s build