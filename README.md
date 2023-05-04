# API para aplicação de Gestão Escolar

## Contexto Inicial

Um escola de cursos profissionalizantes que tem 8 horas de aulas por dia, com excessão aos sábados que são apenas 4 horas de aulas. Seguindo a Tabela Abaixo:

|Dias da Semana|8hrs às 11hrs|14hrs às 17hrs|17hrs ás 18hrs|19hrs às 21hrs|
|---|---|---|---|---|
|Segunda,Terça,Quarta,Quinta|Disponível|Disponível|Indisponível|Disponível|
|Sexta|Disponível|Disponível|Disponível|Indisponível|
|Sábado|Disponível|Indisponível|Indisponível|Indisponível|

*Observações:* Os sábados vão até as 12hrs

A escola tem disponível 11 computadores, para os alunos pois os cursos são via plataforma de video aulas. Ou seja, temos 11 vagas para cada horário.

## Necessidades

É necessário controlar os horários disponíveis, e os materias individuais se houve ou não a entrega

## Funcionalidades

- Cadastrar alunos
- Atualizar aluno
- Reagendar horário do aluno
- Inativar aluno
- Cadastrar Professor
- Atualizar professor
- Inativar professor
- Cadastrar curso
- Atualizar curso
- Cadastrar recursos
- Atualizar recurso
- Cadastrar feriados e recesso
- Atualizar feriados
- Realizar agendamento/reserva de horário

## Entidades

Identificação e modelagem das entidades do sistema

### Curso (Curse)

- id (uuid)
- description (string)
- workload (number)
- createdAt (date)

### Recurso (Resource)

- id (uuid)
- status (Disponível | Indisponível | Obsoleto)
- historic (string)
- description (string)
- createdAt (date)
- type (Reutilizável | Distribuível)

### Agendamento (Scheduling)

- id (uuid)
- datetime (date)
- studentId (uuid)
- resourses (uuid[])
- createdAt (date)

### Aluno (Student)

- id (uuid)
- name (string)
- lastname (string)
- email (string)
- birthday (date)
- shift (Manhã | Tarde | Noite)
- Schedulings (Scheduling[])
- resourses (Resourse[])
- curses (Curse[])
- createdAt (date)

#### Curses

Para criar a relação do aluno com o curso que ele irá realizar vamos criar uma tabela na qual registrar o id do aluno e o id do curso essa tabela chamará StudentCurse

##### StudentCurse

- id (uuid)
- studentId (uuid)
- curseId (uuid)

### Professor (Teacher)

- id (uudi)
- name (string)
- lastname (string)
- email (string)

### Feriados/Recessos (holidays)

- id (uuid)
- datetime (date)
- createdAt