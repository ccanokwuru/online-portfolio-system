/*
  Warnings:

  - A unique constraint covering the columns `[ref]` on the table `Exhibition` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Exhibition" ADD COLUMN     "ref" UUID NOT NULL DEFAULT gen_random_uuid();

-- CreateIndex
CREATE UNIQUE INDEX "Exhibition_ref_key" ON "Exhibition"("ref");
