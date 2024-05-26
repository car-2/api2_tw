FROM node
RUN mkdir -p /home/app
COPY . /home/app
EXPOSE 3864
CMD ["node", "/home/app/app.js"]