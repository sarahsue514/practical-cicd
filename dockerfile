From node:20-alpine AS base
WORKDIR /app

FROM base AS builder
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM base AS runtime 
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["node","dist/index.js"]
