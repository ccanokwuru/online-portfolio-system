/*
  Warnings:

  - You are about to drop the `Exhibition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExhibitionToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exhibition" DROP CONSTRAINT "Exhibition_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibition" DROP CONSTRAINT "Exhibition_workId_fkey";

-- DropForeignKey
ALTER TABLE "_ExhibitionToUser" DROP CONSTRAINT "_ExhibitionToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExhibitionToUser" DROP CONSTRAINT "_ExhibitionToUser_B_fkey";

-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "currency" VARCHAR(3) DEFAULT E'NGN',
ADD COLUMN     "price" MONEY,
ADD COLUMN     "sellAs" VARCHAR(15),
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "Exhibition";

-- DropTable
DROP TABLE "_ExhibitionToUser";

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
