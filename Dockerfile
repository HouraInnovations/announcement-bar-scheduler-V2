FROM node:20-alpine
RUN apk add --no-cache openssl

EXPOSE 3000

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* ./

# ✅ Install all deps including devDeps like remix
RUN npm install --include=dev && npm cache clean --force

# Optional: remove Shopify CLI in prod
RUN npm remove @shopify/cli

COPY . .

RUN npm run build

CMD ["npm", "run", "docker-start"]
