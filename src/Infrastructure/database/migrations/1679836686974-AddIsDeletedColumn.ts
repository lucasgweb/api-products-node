import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsDeletedColumn1679836686974 implements MigrationInterface {
  name = 'AddIsDeletedColumn1679836686974';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "status" TO "isDeleted"`,
    );
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "isDeleted"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "isDeleted" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "isDeleted"`);
    await queryRunner.query(
      `ALTER TABLE "products" ADD "isDeleted" character varying NOT NULL DEFAULT 'active'`,
    );
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "isDeleted" TO "status"`,
    );
  }
}
