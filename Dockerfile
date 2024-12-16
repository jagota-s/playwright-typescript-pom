# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.49.1-noble

RUN mkdir /tests
COPY . /tests
WORKDIR /tests

RUN npm install && \
    npx @playwright/test install

CMD ["npm", "test"]
