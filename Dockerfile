FROM node:16

WORKDIR /anaka

COPY package.json .

#RUN npm config set registry http://registry.npmjs.org/
#RUN npm config set proxy http://10.28.1.16:3131/
#RUN npm config set https-proxy http://10.28.1.16:3131/

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]