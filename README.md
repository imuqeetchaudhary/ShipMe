# ShipMe Rest Api

## Routes for User

### to register a new user

- user/register : post

```
{
    firstName:
    lastName:
    email:
    password:
}
```

### to login an existing user

- user/login :post

```
{
    email:
    password:
}
```

### to view the profile of an authenticated user

- user/profile :post
