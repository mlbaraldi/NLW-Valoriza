Código feito através de aula da NLW06

Api de sistema de Elogios com login e token



#NLW Valoriza

## Regras de Negócio

- Cadastro de Usuário
  - Não é permitido cadastrar mais de um usuário com mesmo email
  - Não é permitido cadastrar usuário sem email

- Cadastro de Tag
  - Não é permitido cadastrar mais de uma tag com o mesmo nome
  - Não é permitido cadastrar tag sem nome
  - Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios
  - Não é permitido um usuário cadastrar um elogio para si
  - Não é permitido cadastrar elogios para usuários inválidos
  - O usuário precisa estar autenticado na aplicação.
