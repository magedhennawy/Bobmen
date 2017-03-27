FROM node

RUN mkdir -p /home/nodejs/app
COPY ./ng2angle /home/nodejs/app
WORKDIR /home/nodejs/app
RUN npm install --production
RUN ng build

EXPOSE 3000
CMD NODE_ENV=production npm start
