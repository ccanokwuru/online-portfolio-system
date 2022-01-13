-- DropIndex
DROP INDEX "Skill_name_key";

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Creator" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "slug" SET DATA TYPE VARCHAR(200);

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Studio" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "Work" ALTER COLUMN "ref" SET DEFAULT gen_random_uuid();
