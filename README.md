# React Hooks Notes

- Conceito : basicamente são uma forma de escrever os componentes react de uma forma menos verbosa e mais perfomatica. Sintaxe muito simples, melhor do que classes.

São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect, useCallback

# useState

Estado sao como variaveis especiais que o react observa e monitora. Toda vez que o valor dessas variaveis mudarem, aí sim que vai renderizar ou exibir o conteudo do componente em tela de novo. Ou seja, nao precisa ficar olhando para todas as variaveis do sistema procurando para saber se algo mudou ou não, ele vai olhar apenas para as variaveis do estado. Toda vez que o estado for alterado, vai exibir o conteudo do componente novamente.

Resumo:
Estado são variáveis que o React monitora e, toda vez que tiver alguma alteração nestas variáveis, o componente que utiliza essa variável vai ser renderizado (atualizado) em tela novamente;

https://www.notion.so/Chapter-1-Joseane-d1ed6f9d793f4c0f9aad022694378b4c?p=34372f9ac38e40cf855e84930ce73738

# useEffect

Da acesso a gente utilizar os ciclos de vida do componente: componentDidMount(carrega info qdo o componente for montado em tela), componentDidUpdate e componentWillMount.

Fases dos Ciclos de Vida em React
O ciclo de vida de um componente possui três fases:

- Montagem: A-componentWillMount; B-componentDidMount C-componentWillMount;
- Atualização:
- Desmontagem:

Resumo:

- UseEffect serve basicamente para disparar uma funcao quando algo acontecer na minha aplicação. Algo acontecer pode ser, por exemplo, "uma variavel mudou", e se essa variavel mudou, eu quero conseguir avisar alguma API que houve mudança nela ou disparar alguma função dentro do meu sistema.

A funcao abaixo recebe dois parametros: 1- Qual funcao quero executar; 2- Qdo quero executar a função?
[] - chama-se dependencias. Quais sao as dependencias ou informações? Se passar vazio, a função, vai executar uma unica vez assim que o componente for exibido em tela. Por que? como esta vazio, nao existe nada que quando alterar vai executar a função novamente.
Alerta: Cuidado. Se esquecer de passar a dependencia [], a função entra em loop eterno.

useEffect (() => {

}, [])

https://www.notion.so/Chapter-1-Joseane-d1ed6f9d793f4c0f9aad022694378b4c?p=33a0f6ecf6e64cff81c4ab1ea0898b5f
