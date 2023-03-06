API ENDPOINTS

Base URL  /trips

|    HTTP Method  | URI Path         |     Description           |
|-----------------|------------------|---------------------------|
|       GET       |  /getAllTrips    | All trips list            |
|       POST      |  /saveTrip       | Create a trip             |
|       POST      |  /join/:id       |    join trip              |
|       POST      |  /leave/:id      |   leave trip              |
|       GET        |  /getOneTrip/:id | Matching ID trip details  |
|       PUT        |  /editTrip/:id   | Matching ID trip edition  |
|      DELETE      |  /deleteTrip/:id | Matching ID trip deletion |




Base URL  /auth

|      HTTP Method      | URI Path     |     Description      |
|-----------------------|--------------|----------------------|
|           POST        |  /signup     |      Signup user     |
|           POST        |  /login      |      Login user      |
|           GET         |  /verify     |   Verify Auth token  |

Base URL /users

|    HTTP Method  | URI Path         |     Description           |
|-----------------|------------------|---------------------------|
|       GET       |  /getAllUsers    | All users list            |
|      GET        |  /getOneUser/:id | Matching ID user details  |
|      PUT        |  /editUser/:id   | Matching ID user edition  |
|     DELETE      |  /deleteUser/:id | Matching ID user deletion |


