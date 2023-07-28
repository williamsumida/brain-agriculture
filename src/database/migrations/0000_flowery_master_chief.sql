CREATE TABLE IF NOT EXISTS "crop" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "farm" (
	"id" text PRIMARY KEY NOT NULL,
	"city" text,
	"province" text,
	"area" numeric,
	"crop_area" numeric,
	"vegetation_area" numeric
);

CREATE TABLE IF NOT EXISTS "farm_crop" (
	"crop_id" text,
	"farm_id" text
);

CREATE TABLE IF NOT EXISTS "farmer" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"cpf" text,
	"cnpj" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "farmer_farm" (
	"farmer_id" text,
	"farm_id" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);

DO $$ BEGIN
 ALTER TABLE "farm_crop" ADD CONSTRAINT "farm_crop_crop_id_crop_id_fk" FOREIGN KEY ("crop_id") REFERENCES "crop"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "farm_crop" ADD CONSTRAINT "farm_crop_farm_id_farm_id_fk" FOREIGN KEY ("farm_id") REFERENCES "farm"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "farmer_farm" ADD CONSTRAINT "farmer_farm_farmer_id_farmer_id_fk" FOREIGN KEY ("farmer_id") REFERENCES "farmer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "farmer_farm" ADD CONSTRAINT "farmer_farm_farm_id_farm_id_fk" FOREIGN KEY ("farm_id") REFERENCES "farm"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

INSERT INTO crop(id, name) VALUES('SOJA', 'Soja');
INSERT INTO crop(id, name) VALUES('MILHO', 'Milho');
INSERT INTO crop(id, name) VALUES('ALGODAO', 'Algodão');
INSERT INTO crop(id, name) VALUES('CAFE', 'Café');
INSERT INTO crop(id, name) VALUES('CANA_DE_ACUCAR', 'Cana de açúcar');
