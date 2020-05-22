FROM node:12.16.1

# Install libs 
RUN yarn global add nw-gyp
RUN yarn global add sqlite3 

RUN mkdir -p /home/node/PAINEL/backend
WORKDIR /home/node/PAINEL/backend


COPY ./backend/package.json /home/node/PAINEL/backend
RUN npm install

COPY ./backend /home/node/PAINEL/backend

EXPOSE 3333 

CMD [ "npm","run","start"]
