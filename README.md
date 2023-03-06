API ENDPOINTS

Base URL  /trips

|    HTTP Method  | URI Path         |     Description           |
|-----------------|------------------|---------------------------|
|       GET       |  /getAllTrips    | All trips list            |
|       GET       |  /getOneTrip/:id | Matching ID trip details  |
|       POST      |  /saveTrip       | Create a trip             |
|       PUT       |  /join/:id       |    join trip              |
|       PUT       |  /leave/:id      |   leave trip              |
|       PUT       |  /editTrip/:id   | Matching ID trip edition  |
|      DELETE     |  /deleteTrip/:id | Matching ID trip deletion |




Base URL  /auth

|      HTTP Method    | URI Path     |     Description          |
|---------------------|--------------|--------------------------|
|         GET         |  /verify     |   Verify Auth token      |
|         POST        |  /signup     |      Signup user         |
|         POST        |  /login      |      Login user          |

Base URL /users

|    HTTP Method  | URI Path         |     Description           |
|-----------------|------------------|---------------------------|
|      GET        |  /getAllUsers    | All users list            |
|      GET        |  /getOneUser/:id | Matching ID user details  |
|      PUT        |  /editUser/:id   | Matching ID user edition  |
|     DELETE      |  /deleteUser/:id | Matching ID user deletion |


