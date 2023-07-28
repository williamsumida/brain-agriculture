ALTER TABLE "farmer" ADD CONSTRAINT "farmer_cpf_unique" UNIQUE("cpf");
ALTER TABLE "farmer" ADD CONSTRAINT "farmer_cnpj_unique" UNIQUE("cnpj");

INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '1', 'Victor Correia Lima', null, '83924614369'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '1', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('1', '1');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('1', 'SOJA');


INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '2', 'Julia Cunha Correia', null, '54766508904'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '2', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('2', '2');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('2', 'SOJA');


INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '3', 'Leonardo Carvalho Azevedo', null, '73070128203'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '3', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('3', '3');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('3', 'ALGODAO');


INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '4', 'Enzo Souza Pereira', null, '442.485.157-50'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '4', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('4', '4');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('4', 'MILHO');


INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '5', 'Eduardo Fernandes Barbosa', null, '562.822.640-81'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '5', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('5', '5');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('5', 'SOJA');


INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '6', 'Laura Alves Silva', null, '839.216.903-40'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '6', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('6', '6');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('6', 'SOJA');


INSERT INTO farmer(id, name, cnpj, cpf)
VALUES(
  '7', 'Lucas Lima Carvalho', null, '452.466.474-20'
);
INSERT INTO farm(id, city, province, area, crop_area, vegetation_area)
VALUES(
  '7', 'Sao Paulo', 'Sao Paulo', 50000, 30000, 20000
);
INSERT INTO farmer_farm(farmer_id, farm_id) VALUES('7', '7');
INSERT INTO farm_crop(farm_id, crop_id) VALUES('7', 'CANA_DE_ACUCAR');
