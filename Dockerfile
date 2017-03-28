FROM node

RUN mkdir -p /home/nodejs/app
COPY ./ng2angle /home/nodejs/app
WORKDIR /home/nodejs/app
RUN npm install --production
RUN npm install angular-cli -g

EXPOSE 3000
CMD npm start