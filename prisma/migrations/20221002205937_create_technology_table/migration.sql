-- CreateTable
CREATE TABLE "technologies" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "technologyName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "technologies" ADD CONSTRAINT "technologies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
