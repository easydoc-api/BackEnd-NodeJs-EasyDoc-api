import { MigrationInterface, QueryRunner } from "typeorm";

export class fixMigrationConsultaZero1662745952692 implements MigrationInterface {
    name = 'fixMigrationConsultaZero1662745952692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consultas_zero" DROP COLUMN "dataMestruacao"`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" DROP COLUMN "primeiroUltrasom"`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ADD "dataMenstruacao" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ADD "primeiroUltrassom" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicos" DROP COLUMN "criadoEm"`);
        await queryRunner.query(`ALTER TABLE "medicos" ADD "criadoEm" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicos" DROP COLUMN "atualizadoEm"`);
        await queryRunner.query(`ALTER TABLE "medicos" ADD "atualizadoEm" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "medicos" DROP COLUMN "atualizadoEm"`);
        await queryRunner.query(`ALTER TABLE "medicos" ADD "atualizadoEm" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "medicos" DROP COLUMN "criadoEm"`);
        await queryRunner.query(`ALTER TABLE "medicos" ADD "criadoEm" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" DROP COLUMN "primeiroUltrassom"`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" DROP COLUMN "dataMenstruacao"`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ADD "primeiroUltrasom" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ADD "dataMestruacao" date NOT NULL`);
    }

}
