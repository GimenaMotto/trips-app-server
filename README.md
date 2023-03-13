API ENDPOINTS

Base URL  /trips

| HTTP Method | URI Path             | Description               |
| ----------- | -------------------- | ------------------------- |
| GET         | /getAllTrips         | All trips list            |
| GET         | /getOneTrip/:trip_id | Matching ID trip details  |
| POST        | /saveTrip            | Create a trip             |
| PUT         | /join/:trip_id       | join trip                 |
| PUT         | /leave/:trip_id      | leave trip                |
| PUT         | /editTrip/:trip_id   | Matching ID trip edition  |
| DELETE      | /deleteTrip/:trip_id | Matching ID trip deletion |


Base URL  /auth

| HTTP Method | URI Path | Description       |
| ----------- | -------- | ----------------- |
| GET         | /verify  | Verify Auth token |
| POST        | /signup  | Signup user       |
| POST        | /login   | Login user        |

Base URL /users

| HTTP Method | URI Path             | Description               |
| ----------- | -------------------- | ------------------------- |
| GET         | /getAllUsers         | All users list            |
| GET         | /getOneUser/:user_id | Matching ID user details  |
| PUT         | /editUser/:user_id   | Matching ID user edition  |
| DELETE      | /deleteUser/:user_id | Matching ID user deletion |


Base URL  /upload

| HTTP Method | URI Path | Description   |
| ----------- | -------- | ------------- |
| POST        | /images  | Upload images |


