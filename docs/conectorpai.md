# Configuração de conector pai (encademaento de conectores)

Existe a possibilidade de encadear conectores para enriquecimento de dados ou até mesmo por questão de sequência lógica.

Exemplo:
Sua empresa está integrando pedidos de um ecommerce. Obrigatoriamente, antes de descer o pedido é necessário cadastrar o cliente. Aqui, poderia ser configurado para o conector de pedidos chamar o conector de clientes primeiramente e só após esse processo, o cliente ser integrado para descer o pedido de venda.
É possível informar ao conector pai, qual é o tipo de execução: se é executado registro a registro ou somente após o último registro integrado ao conector pai ou, até mesmo, se deve seguir em caso de erro no conector pai ou não.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/conectorpai.png" width="1000"/>
    </td>
  </tr>
</table>