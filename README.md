# Playwright Automation framework (Page object model)

This framework is designed to be used as a boilerplate template to start automation testing quickly for any web application. The page object model is used to structure the test.

## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## Installation

Prerequisites:
NodeJS 14(or above) and Java 8 (or above)

- Clone the repo using the below URL
https://github.com/jagota-s/playwright-typescript-pom.git
- Navigate to the folder and install npm packages using:
```bash
- npm install
```

- Install Playwright browsers
```bash
- npx @playwright/test install
```

## Usage

- Run all the spec files present in the "./tests" directory by using the below command
```bash
npm run test
```
- Run specific spec file
```bash
npx playwright test tests/{specfile_name.ts}
```

- To generate allure report 
```bash
npm run test:reporter 
npm run open:allure-report
```

## Docker 
- Directly use docker compose file with below command
````bash
docker-compose -f docker-compose.yml up
````
OR use below
- To run tests in docker containers, install docker and use the below commands to compose the docker image from the docker file;
```bash
docker build -t {give image name} .   
```
- To create the container and launch it use:
```bash
docker run -it -d {same image name as in the previous command}
```
- Check the container is up and running; copy the container id
```bash
docker ps -a 
```
- Login in to the running container 
```bash
docker exec -it {container id} bash
```
- Run the commands as per need in the docker bash;
```bash
npm run test
```

## GitHub Actions

- The workflow file is in directory .github/workflows named playwright.yml
- Every push or pull request action will trigger the workflow
- Results can be seen on the 'Actions' tab in the repo. 


## Contributing

Pull requests are welcome. For significant changes, please open an issue first
to discuss what you would like to change.

