import { MigrationInterface, QueryRunner } from "typeorm";

export class consultasProntuario1663186415265 implements MigrationInterface {
    name = 'consultasProntuario1663186415265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exames_de_imagem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "laudo" character varying(2000), "anexos" character varying, "estaAtivo" boolean NOT NULL DEFAULT true, "prontuarioId" uuid, CONSTRAINT "PK_f6b57a253f7a9e480e93bfe89ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exames_laboratoriais" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "data" TIMESTAMP NOT NULL DEFAULT now(), "gs_rh" character varying(200), "coombs" character varying(200), "hb_ht" character varying(200), "plaq" character varying(200), "gj" character varying(200), "gpd" character varying(200), "vdrl" character varying(200), "hbsag" character varying(200), "antiHiv" character varying(200), "antiHcv" character varying(200), "antiHtlv" character varying(200), "toxop" character varying(200), "rubeola" character varying(200), "cmv" character varying(200), "tsh" character varying(200), "eas" character varying(200), "urocult" character varying(200), "strep" character varying(200), "eletro" character varying(200), "estaAtivo" boolean NOT NULL DEFAULT true, "prontuarioId" uuid, CONSTRAINT "PK_25ba8616f9471fa3a8598d3f24c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medicos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "criadoEm" TIMESTAMP NOT NULL, "atualizadoEm" TIMESTAMP NOT NULL, "nome" character varying(2000) NOT NULL, "email" character varying(2000) NOT NULL, "senha" character varying(200) NOT NULL, "categoria" character varying(200) NOT NULL, "estaAtivo" boolean NOT NULL DEFAULT true, "adm" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_c12f2495d17fc6428bb6dfdbad7" UNIQUE ("email"), CONSTRAINT "PK_f16d578e9fd6df731d5e8551725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arquivos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "estaAtivo" boolean NOT NULL DEFAULT true, "data" TIMESTAMP NOT NULL DEFAULT now(), "anexos" character varying NOT NULL, "pacienteId" uuid NOT NULL, CONSTRAINT "PK_6c281400746e01a6bf85eacbf34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pacientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "criadoEm" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "estaAtivo" boolean NOT NULL DEFAULT true, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying NOT NULL, "dataNascimento" date NOT NULL, "cidadeOrigem" character varying NOT NULL, "idade" integer NOT NULL, "nomeBebe" character varying(2000), "nomePai" character varying(2000), "diagnostico" character varying NOT NULL, "procedimentos" character varying NOT NULL, "cariotipo" character varying(200), CONSTRAINT "UQ_d6737b831d4e311678dfce056b6" UNIQUE ("cpf"), CONSTRAINT "PK_aa9c9f624ff22fc06c44d8b1609" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prontuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "estaAtivo" boolean NOT NULL DEFAULT true, "pacienteId" uuid, CONSTRAINT "REL_836d540c88b70704037f9fc35d" UNIQUE ("pacienteId"), CONSTRAINT "PK_1c9bdb8e627734fe730830832f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consultas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "data" TIMESTAMP NOT NULL DEFAULT now(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "idadeGestacional" integer NOT NULL, "peso" numeric(4,3) NOT NULL, "pressaoArterial" character varying(500) NOT NULL, "uteroFita" character varying(1000), "apresentacao" character varying(1000), "movimentacaoFetal" boolean, "batimentoCardFetal" character varying(100), "edema" character varying(1000), "toqueVaginal" character varying(2000), "conduta" character varying(2000) NOT NULL, "retorno" date, "estaAtivo" boolean NOT NULL DEFAULT true, "prontuarioId" uuid, CONSTRAINT "PK_889a9011f1854a60a6aae1c6d80" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consultas_zero" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "atualizadoEm" TIMESTAMP NOT NULL DEFAULT now(), "data" TIMESTAMP NOT NULL DEFAULT now(), "paridade" character varying(2000) NOT NULL, "consanguinidade" character varying(1000) NOT NULL, "idadeGestacional" integer NOT NULL, "dataMenstruacao" date, "primeiroUltrassom" date, "semanaGestacional" integer NOT NULL, "diaGestacional" integer NOT NULL, "historiaPregressa" character varying(2000) NOT NULL, "historiaGinecologicaObstetrica" character varying(2000) NOT NULL, "estaAtivo" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_d86d8176ced886b8c5b34118d54" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prontuarios_medicos_medicos" ("prontuariosId" uuid NOT NULL, "medicosId" uuid NOT NULL, CONSTRAINT "PK_f87c7cdd1fd1d12a7c7dabce3b4" PRIMARY KEY ("prontuariosId", "medicosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a1fb52c57d29ba3d606fa0c08c" ON "prontuarios_medicos_medicos" ("prontuariosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ad44aea75f56c327a837a4938d" ON "prontuarios_medicos_medicos" ("medicosId") `);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" ADD CONSTRAINT "FK_d1b0a81dcdcccd0d4f95dff2f6d" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" ADD CONSTRAINT "FK_e2d03fca5bba23a0a048222df20" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "arquivos" ADD CONSTRAINT "FK_d34405a572aec74fe8ac11fa75f" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuarios" ADD CONSTRAINT "FK_836d540c88b70704037f9fc35d7" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultas" ADD CONSTRAINT "FK_f7e4e8fa98c4a1567a012ada19c" FOREIGN KEY ("prontuarioId") REFERENCES "prontuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuarios_medicos_medicos" ADD CONSTRAINT "FK_a1fb52c57d29ba3d606fa0c08ca" FOREIGN KEY ("prontuariosId") REFERENCES "prontuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "prontuarios_medicos_medicos" ADD CONSTRAINT "FK_ad44aea75f56c327a837a4938d3" FOREIGN KEY ("medicosId") REFERENCES "medicos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prontuarios_medicos_medicos" DROP CONSTRAINT "FK_ad44aea75f56c327a837a4938d3"`);
        await queryRunner.query(`ALTER TABLE "prontuarios_medicos_medicos" DROP CONSTRAINT "FK_a1fb52c57d29ba3d606fa0c08ca"`);
        await queryRunner.query(`ALTER TABLE "consultas" DROP CONSTRAINT "FK_f7e4e8fa98c4a1567a012ada19c"`);
        await queryRunner.query(`ALTER TABLE "prontuarios" DROP CONSTRAINT "FK_836d540c88b70704037f9fc35d7"`);
        await queryRunner.query(`ALTER TABLE "arquivos" DROP CONSTRAINT "FK_d34405a572aec74fe8ac11fa75f"`);
        await queryRunner.query(`ALTER TABLE "exames_laboratoriais" DROP CONSTRAINT "FK_e2d03fca5bba23a0a048222df20"`);
        await queryRunner.query(`ALTER TABLE "exames_de_imagem" DROP CONSTRAINT "FK_d1b0a81dcdcccd0d4f95dff2f6d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ad44aea75f56c327a837a4938d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a1fb52c57d29ba3d606fa0c08c"`);
        await queryRunner.query(`DROP TABLE "prontuarios_medicos_medicos"`);
        await queryRunner.query(`DROP TABLE "consultas_zero"`);
        await queryRunner.query(`DROP TABLE "consultas"`);
        await queryRunner.query(`DROP TABLE "prontuarios"`);
        await queryRunner.query(`DROP TABLE "pacientes"`);
        await queryRunner.query(`DROP TABLE "arquivos"`);
        await queryRunner.query(`DROP TABLE "medicos"`);
        await queryRunner.query(`DROP TABLE "exames_laboratoriais"`);
        await queryRunner.query(`DROP TABLE "exames_de_imagem"`);
    }

}
