## Instructions

1. Clone this repository.
2. Add two database connection string in `.env` file DATABASE1_URL, DATABASE2_URL.
3. Run these commands to generate PrismaClient

```
npx prisma generate --schema=./prisma/client1/schema.prisma
npx prisma generate --schema=./prisma/client2/schema.prisma
```

4. Push schema changes to database

```
npx prisma db push --schema=./prisma/client1/schema.prisma
npx prisma db push --schema=./prisma/client2/schema.prisma
```

5. Generate SQLs for both PrismaClient

```
npx prisma generate --sql --schema=./prisma/client1/schema.prisma
npx prisma generate --sql --schema=./prisma/client2/schema.prisma
```

4. Run the following command to start the server

```
npm run start
```

You will see the both TypedSQL queries work as expected.
