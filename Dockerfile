FROM node

RUN mkdir -p /home/nodejs/ng2angle
COPY ./app /home/nodejs/ng2angle
WORKDIR /home/nodejs/ng2angle
RUN npm install --production

EXPOSE 3000
CMD NODE_ENV=production node server.js