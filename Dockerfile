FROM node:18-slim as deps
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install --omit=dev

FROM node:18-slim as builder
WORKDIR /usr/src/app
# Install dev-dependencies
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY ./package.json .
RUN npm install
# Copy files used in build process
COPY tsconfig*.json ./
COPY ./scripts ./scripts
COPY tailwind.config.js .
COPY ./src ./src
# Build
ENV NODE_ENV=production
RUN sed -i -z -E 's/  \"exports\"\:.*\n.*\n.*\n.*\n.*\n//mg' ./node_modules/esbuild-plugin-inline-worker/package.json
RUN npm run build

FROM node:18-slim as runtime
WORKDIR /usr/src/app
# COPY --chown=node:node --from=deps /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/package.json .
COPY --chown=node:node --from=builder /usr/src/app/production ./production
USER node
EXPOSE 80
CMD node ./production/server/index.js
