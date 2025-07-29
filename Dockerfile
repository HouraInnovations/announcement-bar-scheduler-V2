FROM node:20-alpine
RUN apk add --no-cache openssl

EXPOSE 3000

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* ./

# ✅ FIX: install all deps, including remix
RUN npm install && npm cache clean --force

# Optional: remove CLI if not needed at runtime
RUN npm remove @shopify/cli

COPY . .

# ✅ remix will now be available here
RUN npm run build

CMD ["npm", "run", "docker-start"]
