import { PrismaClient as PrismaClient1 } from "@prisma-client1/client";
import { PrismaClient as PrismaClient2 } from "@prisma-client2/client";
import { getProfile } from "@prisma-client1/client/sql";
import { getUser } from "@prisma-client2/client/sql";

async function main() {
  const prisma1 = new PrismaClient1();
  const prisma2 = new PrismaClient2();

  const profile = await prisma1.$queryRawTyped(getProfile());
  const user = await prisma2.$queryRawTyped(getUser());

  console.log(profile);
  console.log(user);
}

main();
