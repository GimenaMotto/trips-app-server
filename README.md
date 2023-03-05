API ENDPOINTS

Base URL  /trips

|    HTTP Method  | URI Path         |     Description           |
|-----------------|------------------|---------------------------|
|       GET       |  /getAllTrips    | All trips list            |
|       POST      |  /saveTrip       | Create a trip             |
|      GET        |  /getOneTrip/:id | Matching ID trip details  |
|      PUT        |  /:id/edit       | Matching ID trip edition  |
|     DELETE      |  /:id/delete     | Matching ID trip deletion |




Base URL  /auth

|      HTTP Method      | URI Path     |     Description      |
|-----------------------|--------------|----------------------|
|           POST        |  /signup     |      Signup user     |
|           POST        |  /login      |      Login user      |
|           GET         |  /verify     |   Verify Auth token  |



