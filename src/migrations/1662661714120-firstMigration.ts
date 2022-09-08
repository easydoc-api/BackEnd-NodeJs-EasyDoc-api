import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1662661714120 implements MigrationInterface {
    name = 'firstMigration1662661714120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "consultas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "idadeGestacional" integer NOT NULL, "peso" numeric(4,3) NOT NULL, "pressãoArterial" character varying(50) NOT NULL, "uteroFita" character varying(10) NOT NULL, "apresentacao" character varying(10) NOT NULL, "movimentacaoFetal" boolean NOT NULL, "batimentoCardFetal" character varying(10) NOT NULL, "edema" character varying(10) NOT NULL, "toqueVaginal" character varying(200) NOT NULL, "conduta" character varying(200) NOT NULL, "retorno" date NOT NULL, "prontuarioId" uuid, CONSTRAINT "PK_889a9011f1854a60a6aae1c6d80" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consultas_zero" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "data" TIMESTAMP NOT NULL DEFAULT now(), "paridade" character varying(20) NOT NULL, "consanguinidade" character varying(100) NOT NULL, "idadeGestacional" integer NOT NULL, "dataMestruacao" date NOT NULL, "primeiroUltrasom" date NOT NULL, "semanaGestacional" integer NOT NULL, "diaGestacional" integer NOT NULL, "historiaPregressa" character varying(2000) NOT NULL, "historiaGinecologicaObstetrica" character varying(2000) NOT NULL, CONSTRAINT "PK_d86d8176ced886b8c5b34118d54" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exames_de_imagem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "laudo" character varying(2000) NOT NULL, "anexos" character varying NOT NULL, "prontuarioId" uuid, CONSTRAINT "PK_f6b57a253f7a9e480e93bfe89ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exames_laboratoriais" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "data" TIMESTAMP NOT NULL DEFAULT now(), "gs_rh" character varying(20) NOT NULL, "coombs" character varying(20) NOT NULL, "hb_ht" character varying(20) NOT NULL, "plaq" character varying(20) NOT NULL, "gj" character varying(20) NOT NULL, "gpd" character varying(20) NOT NULL, "vdrl" character varying(20) NOT NULL, "hbsag" character varying(20) NOT NULL, "antiHiv" character varying(20) NOT NULL, "antiHcv" character varying(20) NOT NULL, "antiHtlv" character varying(20) NOT NULL, "toxop" character varying(20) NOT NULL, "rubeola" character varying(20) NOT NULL, "cmv" character varying(20) NOT NULL, "tsh" character varying(20) NOT NULL, "eas" character varying(20) NOT NULL, "urocult" character varying(20) NOT NULL, "strep" character varying(20) NOT NULL, "eletro" character varying(20) NOT NULL, "prontuarioId" uuid, CONSTRAINT "PK_25ba8616f9471fa3a8598d3f24c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medicos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "criadoEm" date NOT NULL, "atualizadoEm" date NOT NULL, "nome" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "senha" character varying(200) NOT NULL, "categoria" character varying(200) NOT NULL, "estaAtivo" boolean NOT NULL DEFAULT true, "adm" boolean NOT NULL DEFAULT false, "prontuarioId" uuid, CONSTRAINT "UQ_c12f2495d17fc6428bb6dfdbad7" UNIQUE ("email"), CONSTRAINT "PK_f16d578e9fd6df731d5e8551725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prontuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pacienteId" uuid, "consultaZeroId" uuid, CONSTRAINT "REL_836d540c88b70704037f9fc35d" UNIQUE ("pacienteId"), CONSTRAINT "REL_27fb6fb9baff8da7eac56ef4e8" UNIQUE ("consultaZeroId"), CONSTRAINT "PK_1c9bdb8e627734fe730830832f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pacientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "estaAtivo" boolean NOT NULL DEFAULT true, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "dataNascimento" date NOT NULL, "cidadeOrigem" character varying NOT NULL, "idade" integer NOT NULL, "nomeBebe" character varying NOT NULL, "nomePai" character varying NOT NULL, "diagnostico" character varying NOT NULL, "procedimentos" character varying NOT NULL, "cariotipo" character varying NOT NULL, "prontuario_id" uuid, CONSTRAINT "UQ_d6737b831d4e311678dfce056b6" UNIQUE ("cpf"), CONSTRAINT "REL_2a3fb53e23dd71aed1115166cc" UNIQUE ("prontuario_id"), CONSTRAINT "PK_aa9c9f624ff22fc06c44d8b1609" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arquivos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL DEFAULT now(), "anexos" character varying NOT NULL, "pacienteId" uuid NOT NULL, CONSTRAINT "PK_6c281400746e01a6bf85eacbf34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "consultas" ADD CONSTRAINT "FK_f7e4e8fa98c4a1567a012ada19c" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" ADD CONSTRAINT "FK_d1b0a81dcdcccd0d4f95dff2f6d" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ADD CONSTRAINT "FK_e2d03fca5bba23a0a048222df20" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medicos" ADD CONSTRAINT "FK_9119fe4fa436e3e0064c05c9102" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuarios" ADD CONSTRAINT "FK_836d540c88b70704037f9fc35d7" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuarios" ADD CONSTRAINT "FK_27fb6fb9baff8da7eac56ef4e85" FOREIGN KEY ("consultaZeroId") REFERENCES "consultas_zero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "FK_2a3fb53e23dd71aed1115166cc0" FOREIGN KEY ("prontuario_id") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "arquivos" ADD CONSTRAINT "FK_d34405a572aec74fe8ac11fa75f" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "arquivos" DROP CONSTRAINT "FK_d34405a572aec74fe8ac11fa75f"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "FK_2a3fb53e23dd71aed1115166cc0"`);
        await queryRunner.query(`ALTER TABLE "prontuarios" DROP CONSTRAINT "FK_27fb6fb9baff8da7eac56ef4e85"`);
        await queryRunner.query(`ALTER TABLE "prontuarios" DROP CONSTRAINT "FK_836d540c88b70704037f9fc35d7"`);
        await queryRunner.query(`ALTER TABLE "medicos" DROP CONSTRAINT "FK_9119fe4fa436e3e0064c05c9102"`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" DROP CONSTRAINT "FK_e2d03fca5bba23a0a048222df20"`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" DROP CONSTRAINT "FK_d1b0a81dcdcccd0d4f95dff2f6d"`);
        await queryRunner.query(`ALTER TABLE "consultas" DROP CONSTRAINT "FK_f7e4e8fa98c4a1567a012ada19c"`);
        await queryRunner.query(`DROP TABLE "arquivos"`);
        await queryRunner.query(`DROP TABLE "pacientes"`);
        await queryRunner.query(`DROP TABLE "prontuarios"`);
        await queryRunner.query(`DROP TABLE "medicos"`);
        await queryRunner.query(`DROP TABLE "exames_laboratoriais"`);
        await queryRunner.query(`DROP TABLE "exames_de_imagem"`);
        await queryRunner.query(`DROP TABLE "consultas_zero"`);
        await queryRunner.query(`DROP TABLE "consultas"`);
    }

}
