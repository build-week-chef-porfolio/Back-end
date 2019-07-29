# Chef Portfolio - Back end


## Description

This project is a RESTful API built using Node and Express. The purpose of this project is to provide a Backend for a Chef Portfolio web application. User registration, login, post creation, deletion, fetching, or editing, are all handled here.

- The server is run using Node.
- Express is a minimalist Node web application framework for building APIs.
- SQLite3 was used for development.
- Knex is a SQL query builder for JavaScript.
- Jsonwebtoken is used for authenticating users.
- Bcrypt is used for hashing passwords.
- Helmet adds a base layer of security by hiding basic info about the API when interacting with it.
- Dotenv allows the server to interact with environment variables.
- Cors is a dependency used to allow Cross Origin Resource Sharing. This allows the Frontend client to interact with the Backend.
- Cross-env allows the developer to set environment variables in a script.
- Jest is the library used for writing tests.
- Supertest is the dependency used for making "requests" in jest tests.

## Dependencies Used

- Node
- Express
- SQLite3 (Development)
- Knex
- Bcryptjs
- Jsonwebtoken
- Cors
- Helmet
- Dotenv
- Nodemon (Development)
- Cross-Env (Development)
- Jest (Development)
- Supertest (Development)
- Eslint (Development)

## Getting Started
Install dependencies
```
npm install
```
Run database migrations
```
knex migrate:latest
```
Run tests
```
npm run test
```
Run the server
```
npm run server
```

## Restrictions
If you would like to make a request to the post endpoint, a valid JSON web token is required in your request headers.authorization. This token is acquired by successfully registering an account and logging in.


# Endpoints

## Registration and Log In

## Registration of user.

    POST /api/users/register

### Parameters

| Name       | Type   | Description                                              |
| ---------- | ------ | -------------------------------------------------------- |
| username   | String | <p>Users username</p>                                    |
| password   | String | <p>Users password</p>                                    |
| email      | String | <p>Users email </p>                                      |

**POST** `http://localhost:5000/api/users/register` will create a new user: username, password and email are required fields.


### Success Response example

Register Success

```

{
    "message": "User created successfully",
    "user": {
        "id": 2,
        "username": "Conan",
        "password": "$2a$10$tFhGw0FHkx4MhiuOBRmOcOEzeRCImhN5t5ejcOJrdCQi5p5yHXMRy",
        "email": "mail@.com"
    }
}
```


## Log a user in.

    POST /api/users/login

### Parameters

| Name     | Type   | Description                |
| -------- | ------ | -------------------------- |
| username | String | <p>Users username</p>      |
| password | String | <p>Users password</p>      |
| email    | String | <p>Users email</p>         |



**POST** `http://localhost:5000/api/users/login` will log the user in, and send back a token: username, password and email are required.



### Success Response example

Login Success

```
{
    "message": "Welcome Conan",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiQ29uYW4iLCJpYXQiOjE1NjQzMjA5NjIsImV4cCI6MTU2NDQwNzM2Mn0.jKuakswxvOglUheZGkAYdZ-31up4_rYmGsqQIJAmvHg"
}
```


## Other Routes:

## Post

**GET** `http://localhost:5000/api/users/post` will return an object with one property('message') and array('posts') that consists of other objects(individual posts).

**GET** `http://localhost:5000/api/users/post/:id` will return an object corresponding to the todo at that ID.

**POST** `http://localhost:5000/api/users/post` will add a new post, and return the created object: title, meal_type, description, ingredients, and directions are required fields.

imgURL, yield, serving, time are optional

**DEL** `http://localhost:5000/api/users/post/:id` will delete the post at this ID, with the message Post has been deleted

**PUT** `http://localhost:5000/api/users/post/:id` will edit the post at this ID, and return the edited object.
