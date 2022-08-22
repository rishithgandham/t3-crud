-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL DEFAULT 'developer',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
