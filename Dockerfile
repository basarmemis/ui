FROM node:14.16.1
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_API_BASE_URL=http://3.122.103.184:3002
EXPOSE 3000
CMD ["npm", "start"]