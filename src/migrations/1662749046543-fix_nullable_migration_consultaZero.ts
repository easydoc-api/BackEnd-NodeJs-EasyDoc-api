import { MigrationInterface, QueryRunner } from "typeorm";

export class fixNullableMigrationConsultaZero1662749046543 implements MigrationInterface {
    name = 'fixNullableMigrationConsultaZero1662749046543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consultas_zero" ALTER COLUMN "dataMenstruacao" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ALTER COLUMN "primeiroUltrassom" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" ALTER COLUMN "laudo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" ALTER COLUMN "anexos" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "gs_rh" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "coombs" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "hb_ht" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "plaq" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "gj" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "gpd" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "vdrl" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "hbsag" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "antiHiv" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "antiHcv" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "antiHtlv" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "toxop" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "rubeola" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "cmv" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "tsh" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "eas" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "urocult" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "strep" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "eletro" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "nomeBebe"`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "nomeBebe" character varying(200)`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "nomePai"`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "nomePai" character varying(200)`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "cariotipo"`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "cariotipo" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "uteroFita" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "apresentacao" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "movimentacaoFetal" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "batimentoCardFetal" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "edema" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "toqueVaginal" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "retorno" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "retorno" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "toqueVaginal" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "edema" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "batimentoCardFetal" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "movimentacaoFetal" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "apresentacao" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas" ALTER COLUMN "uteroFita" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "cariotipo"`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "cariotipo" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "nomePai"`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "nomePai" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP COLUMN "nomeBebe"`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD "nomeBebe" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "eletro" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "strep" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "urocult" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "eas" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "tsh" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "cmv" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "rubeola" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "toxop" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "antiHtlv" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "antiHcv" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "antiHiv" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "hbsag" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "vdrl" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "gpd" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "gj" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "plaq" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "hb_ht" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "coombs" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ALTER COLUMN "gs_rh" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" ALTER COLUMN "anexos" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" ALTER COLUMN "laudo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ALTER COLUMN "primeiroUltrassom" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "consultas_zero" ALTER COLUMN "dataMenstruacao" SET NOT NULL`);
    }

}
