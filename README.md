# Prática de laboratório - Elevação de estado - Aplicação web

## Informações gerais
- **Tema**: Fundamentos de React
- **Subtema**: Fundamentos - Compartilhar estado entre componentes com elevação de estado
- curso: infoweb
- disciplina: programação orientada a serviços
- conteúdo: [aplicação web](https://github.com/infoweb-pos/react-notas_de_aula)
- instituição: IFRN CNAT
- professor: [Leonardo Ataide Minora](https://github.com/leonardo-minora/)

## Resumo da tarefa
Criar uma aplicação web usando o framework React e a linguagem de programação TypeScript contendo 3 componentes React: (i) AppNavBar, contendo o título da aplicação; (ii) AppEntrada, contendo uma caixa de texto para digitação; e, (iii) AppCloneEntrada, contendo um label ou paragráfo replicando o texto digitado em AppEntrada.

## Tarefas
1. Fork deste repositório https://github.com/infoweb-pos/2023-webapp-07-pratica_de_lab/
2. Criar uma aplicação web com o vite usando react e typescript
3. No arquivo `src/App.tsx`, fazer as tarefas
   1. Criar o compnente `AppNavBar` com um título fixo;
   2. Colocar uma instância de `AppNavBar` em `App`;
   3. Criar o compnente `AppEntrada` com uma entrada de texto (não precisa de um botão, precisa de pelo menos 1 `input`);
   4. Colocar uma instância de `AppEntrada` em `App`;
   5. Criar o compnente `AppCloneEntrada` com um label ou paragráfo `html`;
   6. Usar propriedade `texto` para determinar o conteúdo que irá aparecer em `AppCloneEntrada`;
   7. Colocar uma instância de `AppCloneEntrada` em `App` usando uma variável (constante) para atribuir valor a propriedade `texto`;
   9. Adicionar as propriedades `texto` e `mudarTexto` no componente `AppEntrada`;
   10. Adicionar `value` e `onChange` em `input` do componente `AppEntrada`;
   11. Criar um estado `entrada` no componente `App`;
   12. Adicionar nas propriedades `texto` e `mudarTexto` de `AppEntrada` o estado `entrada` e o `setEntrada`;
   13. Modificar a propriedade `texto` da instância de `AppCloneEntrada` com `entrada`.
