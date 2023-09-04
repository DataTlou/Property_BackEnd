import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1693834110923 implements MigrationInterface {
    name = 'SecondMigration1693834110923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "properties" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "Num_Room" integer NOT NULL, "ownerId" integer)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "surname" varchar NOT NULL, "cellnumber" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_properties" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "Num_Room" integer NOT NULL, "ownerId" integer, CONSTRAINT "FK_47b8bfd9c3165b8a53cd0c58df0" FOREIGN KEY ("ownerId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_properties"("id", "Num_Room", "ownerId") SELECT "id", "Num_Room", "ownerId" FROM "properties"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`ALTER TABLE "temporary_properties" RENAME TO "properties"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" RENAME TO "temporary_properties"`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "Num_Room" integer NOT NULL, "ownerId" integer)`);
        await queryRunner.query(`INSERT INTO "properties"("id", "Num_Room", "ownerId") SELECT "id", "Num_Room", "ownerId" FROM "temporary_properties"`);
        await queryRunner.query(`DROP TABLE "temporary_properties"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "properties"`);
    }

}
