# easy-doc-api
Uma aplicação para gerenciamento de hisórico de consultas de pacientes.

# ROTAS

## Paciente

### POST – /pacientes/register 
Responsável por cadastrar um novo paciente. 

**Requisitos**: 
  - Autenticação: O usuário precisa estar autenticado para poder cadastrar um paciente

Os dados solicitados pela API são:

    {
   	"nome": "",
	"dataNascimento": "01/01/2000",
	"cidadeOrigem": "", 
	"idade": 22,
	"nomeBebe": "",
	"nomePai": "",
	"diagnostico": "", 
	"procedimentos": "",
	"caritotipo": "",
	"cpf": "",
	"email": "", 
	"arquivos_id": ""
    }

| Campos NOT NULL | Mensagem |
|--|--|
|nome | "" |
|dataNascimento|""|
|cidadeOrigem|""|
|diagnostico|""|
|idade|""|

   
**Retornos:**

| Status | Mensagem | Descrição |
|--|--|--|
|200 |Sucesso	Paciente |cadastrado com sucesso. |
|401 |Falha na requisição |Falta algum dado na requisição. |
|403 |Não autorizado |Verifique a autenticação de ADM ou Token. |
|500 |Erro interno |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte. | 



### GET – /pacientes
Rota responsável por listar todos os pacientes. O usuário precisa estar autenticado e ter permissão. Ser R4, ADM ou professor.

**Requisitos:**
- Autenticação
- Ser ADM, professor ou R4
  

### GET – /pacientes/:id 
Rota responsável por listas um paciente especifico com base no ID. O usuário precisa apenas estar autenticado;

**Requisitos:**
- Autenticação

### PATCH – /pacientes/:id 
Rotas responsável por editar dados dos pacientes. O usuário precisa apenas estar autenticada para fazer alterações

**Requisitos:**
- Autenticação

### DELETE – /pacientes/:id
Rotas responsável por apagar todos os dados de uma paciente. O usuário precisar estar autenticado e apenas ADMs podem deletar.

**Requisitos:**
- Autenticação
- Ser ADM.

---

## Médico

### POST – /medicos/register
Responsável por cadastrar um novo médico. Não é necessário autenticação nem permissão para se cadastrar

**Requisitos:** 
- Nenhum

Os dados solicitados pela API são:

    {
    "nome": "kamila",
    "email": "kamila@gmail.com" ,
    "password": "1234", 
    "categoria": "string" 
    }
| Campos NOT NULL | Mensagem |
|--|--|
|nome | "" |
|email|""|
|password|""|
|categooria|""|

**Retornos:**

| Status | Mensagem | Descrição |
|--|--|--|
|200 |Sucesso |	Medico cadastrado com sucesso. |
|401 |Falha na requisição |Falta algum dado na requisição. |
|500 |Erro interno |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte. | 

### GET – /medicos/
Responsável por listar todos os médicos. É necessário estar autenticado e permissão de ADM ou Professor

**Requisitos:**
- Autenticação
- Ser ADM ou professor.

###  GET – /medicos/:id
Responsável por listar um medico especifico por meio do ID. É necessário estar autenticado e permissão de ADM ou Professor.

**Requisitos:** 
- Autenticação
- Ser ADM ou professor

### PATCH – /medicos/:id 
Responsável por alterar os dados de um médico especifico. É necessário autenticação e apenas o próprio médico ou ADMs tem permissão.

**Requisitos:** 
- Autenticação
- Ser o próprio usuário;
- Ser ADM.

### DELETE – /medicos/id
Rotas responsável por apagar todos os dados de um médico O usuário precisar estar autenticado e apenas ADMs podem deletar.

**Requisitos:** 
- Autenticação.
- Ser ADM.

---

## Exame de imagem

### POST – /exame_imagem/register
Responsável por cadastra um novo exame.

**Requisitos:** 
- Autenticação.

Os dados solicitados pela API são:

    {    
   	"laudo": "uma string",
	"anexos": "strings"
    }

| Campos NOT NULL | Mensagem |
|--|--|
|Data | "" |
|idadeGestacional|""|
|peso|""|
|pressaoArterial|""|
|conduta|""|

**Retornos:**

| Status	| Mensagem	| Descrição |
|--|--|--|
200 | Sucesso | cadastrado com sucesso.
401 | Falha | na requisição	Falta algum dado na requisição.
403 | Não autorizado | Verifique a autenticação do Token
500 | Erro interno | Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /exame_imagem
Responsável por listrar todos os exames de imagem. 

**Requisitos:** 
- Autenticação.

### GET – /exame_imagem/:id
Responsável por listar um exame especifico. 

**Requisitos:** 
- Autenticação.

### PATCH – /exame_imagem/:id
Responsável por editar um exame especifico. 

**Requisitos:**
- Autenticação.

### DELETE -  /exame_imagem/:id
Responsável por deletar um exame especifico. 

**Requisitos:** 
- Autenticação
- Ser ADM.

---

## Exame Laboratorial

### POST – /exame_laboratorial/register
Responsável por cadastra um novo exame. 

**Requisitos:** 
- Autenticação

Os dados solicitados pela API são:

    {
        "gs/rh": "",
        "coombs": "",
        "hb/ht": "",
        "plaq": "",
        "gj": "",
        "gpd": "",
        "vdrl": "",
        "hbsag": "",
        "antihiv": "",
        "antihcv": "",
        "antihtlv": "",
        "toxop": "",
        "rubéola": "",
        "cmv": "",
        "tsh": "",
        "eas": "",
        "urocult": "",
        "strep": "",
        "Eletro": ""
    }

Retornos:
Status | Mensagem | Descrição
| -- | -- | -- |
200 | Sucesso |	 cadastrado com sucesso.
401	| Falha na requisição |	Falta algum dado na requisição.
403 | Não autorizado | Verifique a autenticação de Token
500 | Erro interno | Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /exame_laboratorial
Responsável por listrar todos os exames de imagem. 

**Requisitos:** 
- Autenticação.

### GET – /exame_laboratorial/paciente/:id
Responsável por listar um exame especifico. 

**Requisitos:** 
- Autenticação.

### PATCH – /exame_laboratorial /:id
Responsável por editar um exame especifico. 

**Requisitos:** 
- Autenticação.

### DELETE -  /exame_laboratorial /:id
Responsável por deletar um exame especifico. 

**Requisitos:**
- Autenticação
- Ser ADM.

---

## Consulta Zero

### POST – /consulta_zero/register
Responsável por cadastrar uma nova consulta.

**Requisitos:** 
- Autenticação

Os dados solicitados pela API são:

    {
        "paridade": "" (NOT NULL)
        "consanguinidade": "" (NOT NULL)
        "dataMenstruação": "";
        "primeiroUltrassom": "" 
        "semanaGestacional": number (NOT NULL)
        "diaGestacional": "" (NOT NULL)
        "historiaPregressa": "" (NOT NULL)
        "historiaGinecologicaObstetrica": "" (NOT NULL)
    }

| Campos NOT NULL | Mensagem |
|--|--|
|paridade | "" |
|consanguinidade|""|
|semanaGestacional|""|
|diaGestacional|""|
|historiaPregressa|""|
|historiaGinecologicaObstetrica|""|

Retornos:
Status|Mensagem|Descrição
|--|--|--|
200|Sucesso|cadastrado com sucesso.
401|Falha na requisição|Falta algum dado na requisição.
403|Não autorizado|Verifique a autenticação de Token
500|Erro interno|Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /consulta_zero
Responsável por listar todas as consultas

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4

### GET – /consulta_zero/paciente/:id   
Responsável por listar uma consulta especifica.

**Requisitos:** 
- Autenticação.

### PATCH – /consulta_zero /:id 
Responsável por editar uma consulta especifica.

**Requisitos:** 
- Autenticação.

### DELETE -  /consulta_zero /:id   
Responsável por deletar uma consulta especifica.

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4.

---

## Consultas

### POST – /consultas/register  
Responsável por cadastrar uma nova consulta.

**Requisitos:** 
- Autenticação.

Os dados solicitados pela API são:

    {
        peso: number (NOT NULL)
        pressaoArterial: string
        uteroFita: string
        apresentação: string
        movimentacaoFetal: string
        batimentoCardiacoFetal: string
        edema: string
        toqueVaginal: string
        conduta: string
        retorno: Date ex: 10-12-2022
    }

| Campos NOT NULL | Mensagem |
|--|--|
|peso | "" |


Retornos:
Status|Mensagem|Descrição
|--|--|--|
200|Sucesso|cadastrado com sucesso.
401|Falha na requisição|Falta algum dado na requisição.
403|Não autorizado|Verifique a autenticação de Token
500|Erro interno|Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte.

### GET – /consultas
Responsável por listar todas as consultas.

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4.

### GET – /consultas/paciente/:id
Responsável por listar uma consulta especifica.

**Requisitos:** 
- Autenticação.

### DELETE -  /consultas/:id
Responsável por deletar uma consulta especifica.

**Requisitos:** 
- Autenticação.
- Ser ADM, professor ou R4.

---

## Prontuário

### GET – /prontuarios
Responsável por listar todos os prontuários.

**Requisitos:** 
- Autenticação
- Ser ADM, professor ou R4.

## GET – /prontuarios/pacientes/:id
Responsável por listar um prontuário especifico.

**Requisitos:** 
- Autenticação.

## GET –prontuarios/consultas/:palavra_chave
Responsável por lista todos os prontuários com base em uma palavra chave.

**Requisitos:** 
- Autenticação

### GET – prontuarios/consultas/:idade_gestacional
Responsável por listar todos os prontuários com base na idade gestacional.

**Requisitos:** 
- Autenticação

## PATCH – /prontuarios/:id
Responsável por editar um prontuário especifico.

**Requisitos:** 
- Autenticação

### DELETE -  /prontuarios/:id
Responsável por deletar um prontuário.   

**Requisitos:** 
- Autenticação
