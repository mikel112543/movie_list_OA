# Base image
FROM node:18

WORKDIR /app
# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the backend and frontend code
COPY src/backend ./backend
COPY src/frontend ./frontend

RUN ls -la /app/backend
RUN ls -la /app/frontend

# Expose ports
EXPOSE 3000 5000

# Start both backend and frontend
CMD ["npm run dev"]
