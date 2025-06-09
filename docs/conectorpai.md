# Configuração de conector pai (encademaento de conectores)

Existe a possibilidade de encadear conectores para enriquecimento de dados ou até mesmo por questão de sequencia lógica, exemplo você esta integrando pedidos de um ecommerce, obrigatoriamento antes de descer o pedido você precisa ter o cliente cadastrado, então poderia ser configurado para o conector de pedidos primeiro chamar o conector de clientes, para somente após o cliente ser integrado descer o pedido de venda.Então é possível informar que é o conector pai, qual é o tipo de execução se é executado registro a registro ou somente após o ultimo registro integrado no conector pai e até mesmo se deve seguir em caso de erro no conector pai ou não.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/conectorpai.png" width="1000"/>
    </td>
  </tr>
</table>