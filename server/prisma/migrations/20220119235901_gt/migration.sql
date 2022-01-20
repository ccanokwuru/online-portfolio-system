/*
  Warnings:

  - You are about to alter the column `token` on the `Token` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.

*/
-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "expired" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "token" SET DATA TYPE VARCHAR(500);
