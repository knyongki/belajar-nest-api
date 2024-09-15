# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "yongki",
  "password": "123456",
  "name": "Yongki Setiawan"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "yongki",
    "name": "Yongki Setiawan"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "yongki",
  "name": "Yongki Setiawan"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "yongki",
    "name": "Yongki Setiawan",
    "token": "session_id_generated"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username or Password is worng"
}
```

## Get User

Endpoint : POST /api/users/current

Headers :
- authorization: token

Response Body (Success):

```json
{
  "data": {
    "username": "yongki",
    "name": "Yongki Setiawan"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization: token

Request Body :

```json
{
  "password": "123456", // optional, if want change password
  "name": "Yongki Setiawan" // optional, if want change name
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "yongki",
    "name": "Yongki Setiawan"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
- Authorization: token

Response Body (Success):

```json
{
  "data": true
}
```