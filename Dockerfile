FROM alpine

LABEL "owner"="Anish"

#this will install noe packge from the alpine environment
RUN apk add --update nodejs nodejs-npm

ENV NODE_ENV=production

ENV PORT=3000

COPY . /var/www

#COPY ./public /var/www/public //copy local public to docker www public 

WORKDIR /var/www

#VOLUME ["/var/www"]

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm","start"]