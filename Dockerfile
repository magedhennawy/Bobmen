FROM node

RUN mkdir -p /home/nodejs/app
COPY ./ng2angle /home/nodejs/app
WORKDIR /home/nodejs/ng2angle
RUN npm install --production

EXPOSE 3000
CMD NODE_ENV=production npm start
