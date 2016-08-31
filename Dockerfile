FROM node:5

ADD *.json /rsk/
ADD src /rsk/src
ADD tools /rsk/tools
WORKDIR /rsk

RUN npm install
RUN npm run build
EXPOSE 3000

CMD node start
