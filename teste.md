Banco de Dados

O banco de dados deve ser estruturado à escolha do(a) candidato(a), mas minimamente deve conter:
usuários: email, senha;
clientes: nome, cpf;
endereço: todos os campos de endereço;
telefones: cliente, número;
produtos: colocar os dados necessários para um tipo de produto, além de preço.
vendas: cliente, produto, quantidade, preço unitário, preço total, data e hora.
Rotas do Sistema
O sistema deve contar com rotas para:
cadastro de usuário do sistema (signup);
login com JWT de usuário cadastrado (login);
clientes:
listar todos os clientes cadastrados (index)
apenas dados principais devem vir aqui;
ordenar pelo id;
detalhar um(a) cliente e vendas a ele(a) (show):
trazer as vendas mais recentes primeiro;
possibilidade de filtrar as vendas por mês + ano;
adicionar um(a) cliente (store);
editar um(a) cliente (update);
excluir um(a) cliente e vendas a ele(a) (delete);
produtos:
listar todos os produtos cadastrados (index):
apenas dados principais devem vir aqui;
ordenar alfabeticamente.
detalhar um produto (show);
criar um produto (store);
editar um produto (update);
exclusão lógica ("soft delete") de um produto (delete);
vendas:
registrar venda de 1 produto a 1 cliente (store).
Observação: as rotas em clientes, produtos e vendas só devem poder ser acessadas por usuário logado.