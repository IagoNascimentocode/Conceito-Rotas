<h1>Concentos de Rotas</h1>

<h1>Sobre:</h1>
Com o express crio um servidor para escutar uma porta com o metodo "use" e faço com que todas as requisições eu tenha acesso ao corpo da requisição com o "bodyparser".

Criamos um array com alunos para simular um banco de dados.

Na rota "/aluno/all" recebemos todos os alunos do array. 
Criamos uma rota que pode selecionar um aluno pelo nome ou id utilizando um fomulario no corpo da requsição.
Na rota "aluno/:id" podemos retornar um aluno selecionado pelo id pelos parametros passados na url dispensando o uso do formulario no compro da requisição.
Tentando abstrair e organiza o código,  utilizamos o Router do express para ajudar no tratamento dos dados da resposta e separamos todas as funções de alunos dentro de um outro arquivo JS e colocamos dentro de uma pasta router.

obs:Caso no futuro tenha a necessidade de implementar novas rotas é só criar um novo arquvivo JS com suas funções e chamalo no index.js passando o caminho e depois um middleware.

Sugiro utilizar o Insominia para testar a aplicação
