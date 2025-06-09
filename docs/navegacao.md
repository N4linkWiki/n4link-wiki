# Acesso à Plataforma

A nossa estrutura de navegação é baseada no menu que fica na lateral esquerda, onde cada opção define qual vai ser o tipo da tecnologia utilizada na requisição da origem, cadastro de serviços seria origem REST, cadastro de banco seria origem banco de dados, cadastro de SOAP seria origem SOAP, cadastro de arquivos seria origem leitura de um FTP/SFTP de qualquer tipo de arquivo (TXT, CSV, XML...), Cadastro de SAP-RFC seria para origem RFC's ou BAPI's esepcificas do mundo SAP.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/integracoes.png" width="200"/><br>
    </td>
  </tr>
</table>

No menu Painel de Controle na opção Serviços em Execução, você tera acesso a todas filas ativas, cada conector em nossa plataforma possui sua fila própria, por Exemplo você está integrando clientes e produtos, você terá uma fila para cada tema, onde você pode parar essa fila, reiniciar, ou até mesmo eliminar mensagens dela, vamos dizer que você disparou uma massa muito grande por equívo e quer parar de maneira imediata, vai existir uma opção para isso, ja na opção validar comunicação é um facilitador onde a plataforma tenta fechar via TELNET a comunição com a URL fornecida, Extrator de dados seria uma ferramenta como se fosse um estudio SQL, onde você pode rodar sintaxes em seu banco, caso seja o seu modelo e exportar para um excel ou até mesmo valiadr a sintaxe das consultas, Variveis Globais seria uma maneira de cadastrar conteúdos, seja para não deixar exposto no conector por Exemplo um token, ou até mesmo facilitar construções utilizando essas varíaveis sem precisar ficar repetindo conteúdos sempre, Central de Notificação é a opção para criar alertas, onde de maneira ativa a plataforma envia um e-mail de acordo com o que foi configurado, Exemplo, você quer um alerta para toda vez que a resposta do destino voltar ERRO 500 no corpo seja enviado um e-mail para a TI, ja a opção UPLOAD DE ARQUIVO será para subir arquivos csv, txt em uma tabela do N4LNK, onde os conteudos desse arquivo podem ser acessados pelos conectores, Exemplo de uso você vai descer vendas de um ecommerce para o ERP, no ERP é obrigatório um cadastro em especifico, que não vem do ecommecer, mas tem como criar alguma regra a partir de um campo do ecommerce onde seria possível posicionar na planilha do Excel e ver qual seria o conteúdo correto para enviar para o ERP.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/painel.png" width="200"/><br>
    </td>
  </tr>
</table>