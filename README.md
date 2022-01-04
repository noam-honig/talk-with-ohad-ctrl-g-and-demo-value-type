# Angular Starter Project

This project is a starter project for using remult & angular that already has a menu, basic user management and other utilities.

To use in a new project:
```sh
md angular-starter-project
cd angular-starter-project
git init
git pull https://github.com/noam-honig/angular-starter-project.git
npm i
```

To run:
```sh
npm run dev
```

# Tutorial:
See [Creating a Fullstack Angular Remult app for non web developer](https://github.com/noam-honig/angular-starter-project/wiki/Creating-a-Fullstack-Angular-Remult-app-for-non-web-developer)


# Create an Heroku site and deploy to it
```sh
heroku apps:create 
heroku addons:create heroku-postgresql:hobby-dev
heroku config:set TOKEN_SIGN_KEY=some-very-secret-key
git push heroku master 
heroku apps:open
```