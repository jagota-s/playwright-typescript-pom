# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.29.0-focal

RUN mkdir /tests
COPY . /tests
WORKDIR /tests

RUN npm install
RUN npx @playwright/test install
