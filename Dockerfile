FROM node:16 AS node-build
WORKDIR /app
COPY source_code/package.json source_code/server.js ./
RUN npm install
# Stage 2: Expose the Node.js application
FROM node:16
WORKDIR /app
# Copy the Node.js application and dependencies from the build stage
COPY --from=node-build /app /app
# Expose the port the app will run on
EXPOSE 3000
# Start the Node.js application
CMD ["node", "server.js"]
