import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1679185896219 implements MigrationInterface {
  name = 'CreateProductTable1679185896219';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "visibility" character varying NOT NULL DEFAULT 'public', "status" character varying NOT NULL DEFAULT 'active', "name" character varying NOT NULL, "imageUrl" character varying NOT NULL, "process_price" integer NOT NULL, "description" character varying NOT NULL, "calc_type" character varying NOT NULL, "short_description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
