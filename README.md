Documentação da Resolução dos Exercícios da Aula 3

1) Criação do Projeto React: Inicialmente, um novo projeto React deve ser criado com o nome aula3. Caso os passos para a criação de um projeto React tenham sido esquecidos, a "Aula 1 sobre configuração de ambiente e primeiros passos" pode ser consultada.

2) Limpeza do App.js: O arquivo App.js gerado com o projeto React deve ser limpo, removendo o conteúdo padrão para iniciar a construção da aplicação do zero.

3) Entendimento da PokeAPI: A PokeAPI "(https://pokeapi.co/api/v2/)" será utilizada como fonte de dados. Ao acessar a URL base e adicionar /pokemon/[nome-do-pokemon] (por exemplo, https://pokeapi.co/api/v2/pokemon/ditto), a API retorna um objeto JSON contendo diversas informações sobre o Pokemon. Para facilitar a visualização e compreensão dessa estrutura JSON, a utilização de uma extensão como o JSON Viewer é recomendada.

4) Criação do Formulário: Dentro do componente App (em App.js), um formulário HTML (form) será criado. Este formulário deverá conter um elemento de entrada de texto (input type="text") onde o usuário poderá digitar o nome do Pokemon e um botão de envio (button type="submit") para acionar a busca.

5) Gerenciamento do Estado do Input: Utilizando o Hook useState, um estado será criado para armazenar o valor digitado no campo de entrada do formulário. Uma função de atualização de estado será associada ao evento onChange do input para capturar em tempo real o texto inserido pelo usuário.

6) Implementação da Função de Busca: Uma função será criada para ser chamada quando o formulário for submetido. Esta função deverá:

◦ Prevenir o comportamento padrão de recarregamento da página ao submeter o formulário.
◦ Construir a URL da requisição HTTP para a PokeAPI, utilizando o nome do Pokemon armazenado no estado do input. A URL será no formato https://pokeapi.co/api/v2/pokemon/[nome-do-pokemon].
◦ Utilizar a função fetch para realizar uma requisição HTTP do tipo GET para a URL construída.
◦ Tratar a resposta da API, que estará em formato JSON, utilizando o método .json() para converter a resposta para um objeto JavaScript.
◦ Atualizar um novo estado (criado também com useState) com os dados do Pokemon recebidos da API, utilizando a função de atualização de estado (setPokemon, por exemplo).
◦ Implementar tratamento de erros (caso a API retorne um erro, como Pokemon não encontrado) e possivelmente um estado de "carregando" para melhorar a experiência do usuário (estes últimos não explicitamente mencionados no PDF, mas são boas práticas).

7) Exibição das Informações do Pokemon: Com os dados do Pokemon armazenados no estado, a interface do usuário será atualizada para mostrar diversas informações sobre o Pokemon pesquisado. Isso pode ser feito utilizando condicionais para renderizar os dados somente quando eles estiverem disponíveis no estado. Elementos HTML como div, span, etc., podem ser utilizados para exibir informações como nome, número, peso e outras propriedades presentes no objeto JSON retornado pela PokeAPI. A estrutura do JSON, que pode ser explorada com um JSON Viewer, ditará quais dados podem ser exibidos.
Resultado Esperado:

Ao concluir a implementação desta atividade, espera-se obter uma aplicação React que funcione como uma Pokedex com a seguinte funcionalidade principal:

• Um formulário visível na interface do usuário contendo um campo de texto para a inserção do nome de um Pokemon e um botão de busca.

• A capacidade do usuário de digitar o nome de um Pokemon no campo de texto.

• Ao submeter o formulário (clicando no botão), a aplicação deverá:

◦ Construir dinamicamente a URL correta para a PokeAPI com o nome do Pokemon fornecido.

◦ Realizar uma requisição HTTP para essa URL utilizando a função fetch.

◦ Receber a resposta da API em formato JSON.

◦ Processar o JSON para extrair os dados do Pokemon.


◦ Armazenar esses dados em um estado do React.

• A aplicação deverá exibir na tela diversas informações sobre o Pokemon pesquisado, como nome, número, peso, habilidades, etc., utilizando os dados armazenados no estado. A interface deverá ser atualizada dinamicamente cada vez que um novo Pokemon for pesquisado e encontrado na PokeAPI.

Resultado:

![Image](https://github.com/user-attachments/assets/0c9ee4b8-2b29-4fc7-92c8-22173fd6d8df)

![Image](https://github.com/user-attachments/assets/fe8b9a6d-58ae-4636-9359-24dd370d11ca)

![Image](https://github.com/user-attachments/assets/3886ff27-4bba-4d3f-9a6e-d7800dc2835c)
