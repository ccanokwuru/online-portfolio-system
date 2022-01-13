/*
  Warnings:

  - You are about to drop the column `reactionId` on the `Studio` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Studio" DROP CONSTRAINT "Studio_reactionId_fkey";

-- AlterTable
ALTER TABLE "Studio" DROP COLUMN "reactionId";

-- CreateTable
CREATE TABLE "_ReactionToStudio" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ReactionToStudio_AB_unique" ON "_ReactionToStudio"("A", "B");

-- CreateIndex
CREATE INDEX "_ReactionToStudio_B_index" ON "_ReactionToStudio"("B");

-- AddForeignKey
ALTER TABLE "_ReactionToStudio" ADD FOREIGN KEY ("A") REFERENCES "Reaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReactionToStudio" ADD FOREIGN KEY ("B") REFERENCES "Studio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
