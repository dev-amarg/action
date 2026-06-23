from node as builder

workdir /app

copy package*.json .

run npm ci

copy . .

from node:18-alpine as runner

workdir /app

copy --from=builder /app/node_modules ./node_modules
copy --from=builder /app/package.json ./package.json
copy --from=builder /app/package-lock.json ./package-lock.json
copy --from=builder /app/app2.js ./app2.js
copy --from=builder /app/.env ./.env


expose 3000

cmd ["node", "app2.js"]

