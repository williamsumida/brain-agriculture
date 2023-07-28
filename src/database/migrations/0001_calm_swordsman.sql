ALTER TABLE "farm" ADD COLUMN "created_at" timestamp DEFAULT now();
ALTER TABLE "farm" ADD COLUMN "updated_at" timestamp DEFAULT now();
ALTER TABLE "farm_crop" ADD COLUMN "created_at" timestamp DEFAULT now();
ALTER TABLE "farm_crop" ADD COLUMN "updated_at" timestamp DEFAULT now();
