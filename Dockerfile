FROM node:20
WORKDIR /src
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
