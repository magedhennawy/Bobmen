FROM node

RUN mkdir -p /home/nodejs/app
COPY /home/nodejs/hosts/Bobmen/app /home/nodejs/app
WORKDIR /home/nodejs/app
RUN npm install --production

EXPOSE 3000
CMD NODE_ENV=production npm start
