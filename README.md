# HOW TO RUN

## start the db with docker-compose

- edit the port in the docker-compose.yml file if port 5432 is already being used
- run "npm run start-db"
- add an env file and add DATABASE_URL=postgresql://postgres:password@localhost:{PORT DEFINED IN docker-compose.yml}/db

## start the app with npm run dev
