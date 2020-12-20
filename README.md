# Backend da aplicação Tech Talks

O objetivo da API é fornecer dados acerca de postagens sobre assuntos diversos.

# Postagens

**RN**

- Devem ser agrupadas de acordo com a Seção e ordenadas pela data de criação.
- Caso a data de publicação da postagem não seja fornecida pelo usuário, agendar para 2 dias depois

**RF**

- A postagem devem conter as seguintes informações: título, capas, conteúdo, seção(relação N-1), data de criação, alteração e de publicação, tags.

# Seções

**RN**

- As seções servem para agrupar as postagens.

**RF**

- As seções devem conter apenas o nome.

# Todos

**RNF**

- A aplicação deve utilizar NodeJS como plataforma de desenvolvimento
- A aplicação deve ser desenvolvida com uso de TypeScript
- A aplicação deve utilizar banco de dados NoSQL(MongoDB)
- A aplicação deve utilizar Mongoose para mapeamento de documentos
