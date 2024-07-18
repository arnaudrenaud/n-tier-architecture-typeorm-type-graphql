# Development

## Start database

With Docker:

```
docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5433:5432 -d postgres
```
