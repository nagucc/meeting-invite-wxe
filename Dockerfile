FROM library/node:5.12.0

ADD *.json /rsk/
ADD src /rsk/src
ADD tools /rsk/tools
WORKDIR /rsk

RUN npm install
RUN npm run build
EXPOSE 3000

CMD npm start
