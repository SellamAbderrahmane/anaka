# FROM node:16

# WORKDIR /anaka

# COPY package.json .

# #RUN npm config set registry http://registry.npmjs.org/
# #RUN npm config set proxy http://10.28.1.16:3131/
# #RUN npm config set https-proxy http://10.28.1.16:3131/

# RUN yarn install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]

FROM jenkins/jenkins:2.332.3-jdk11
USER root
RUN apt-get update && apt-get install -y lsb-release
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli
USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean:1.25.3 docker-workflow:1.28"