FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y nginx
COPY ./hosts/guru-group.client.conf /etc/nginx/sites-enabled/guru-group.client.conf
WORKDIR /data
VOLUME /data
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]