# Acesso à Plataforma

A nossa estrutura de navegação é baseada no menu que fica na lateral esquerda, onde cada opção define qual vai ser o tipo da tecnologia utilizada na requisição da origem, cadastro de serviços seria origem REST, cadastro de banco seria origem banco de dados, cadastro de SOAP seria origem SOAP, cadastro de arquivos seria origem leitura de um FTP/SFTP de qualquer tipo de arquivo (TXT, CSV, XML...), Cadastro de SAP-RFC seria para origem RFC's ou BAPI's esepcificas do mundo SAP.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/integracoes.png" width="200"/><br>
    </td>
  </tr>
</table>

SERVIÇOS EM EXECUÇÃO:
No menu Painel de Controle na opção Serviços em Execução, você terá acesso a todas filas ativas e cada conector em nossa plataforma possui sua fila própria. Ou seja, haverá uma uma fila para cada tema com opão de "PARAR" a fila, "REINICIAR", ou até mesmo "ELIMINAR" mensagens. 

VALIDAR COMUNICAÇÃO:
Serve como um facilitador para que a plataforma feche via TELNET a comunição com a URL fornecida.

EXTRATOR DE DADOS:
Ferramenta semelhante ao estúdio SQL. Aqui é possível rodar sintaxes em seu banco, caso seja o seu modelo e exportar para um excel ou até mesmo validar a sintaxe das consultas.

VARIÁVEIS GLOBAIS:
É uma forma de cadastrar conteúdos, seja para não deixar exposto no conector ou até mesmo facilitar construções utilizando essas varíaveis sem precisar ficar repetindo conteúdos.

CENTRAL DE NOTIFICAÇÕES: 
Cria alertas de maneira ativa, ou seja, a plataforma envia um e-mail de acordo com o que foi configurado, Exemplo: 
Você deseja criar um alerta para sempre que a resposta do destino voltar ERRO 500, seja enviado automaticamente um e-mail para a TI.

UPLOAD DE ARQUIVO:
Fazer uploads de arquivos csv, txt em uma tabela do N4LNK, com possibilidade de acessar os conteúdos pelos conectores
Exemplo:
Para gerar as vendas do e-commerce para o ERP é obrigatório o cadastro em especifico, mas os dados não são transmitidos do e-commerce, mas com essa função, é possível criar uma regra a partir de um campo do e-commerce para uma planilha do Excel e determinar o  conteúdo correto para enviar para o ERP.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/painel.png" width="200"/><br>
    </td>
  </tr>
</table>