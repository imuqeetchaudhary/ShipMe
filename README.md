# ShipMe Rest Api

## Backend live link

https://ship-me-restapi.herokuapp.com/

## Routes for User

### to register a new user

- user/register : post

```
{
    firstName:
    lastName:
    email:
    password:
    jobTitle:
    number:
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

### to edit a user profile

- user/edit :post

```
{
    ...body
}
```

### to view the profile of an authenticated user

- user/profile :get

## Routes for company

### to add a new company user

- company/add-user :post

```
{
    companyId:
    userId:
    isManager:
}
```

### to edit a company profile

- company/edit :post

```
{
    ...body
}
```

### to get all companies

- company/all :get

### to delete a company

- company/delete :post

```
{
    companyId:
}
```

### to get companies of a single user

- company/all-user-companies :post

```
{
    userId:
}
```
