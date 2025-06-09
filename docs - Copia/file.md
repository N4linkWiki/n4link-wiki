# Integração via Arquivos

Para a configuração de integrações com origem FTP/SFTP para leitura de arquivos, menu Integrações - Cadastro de banco você tera como tela inicial:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/file.png" width="1000"/>
    </td>
  </tr>
</table>

onde para o conectores ja criados você encontra os botões de LOG responsável por armazenar todos os dados de uma transação executada, botão LAYOUT que armazena toda a configuração do conector, botão CONTROLE DE VERSÕES que seria o botão cinza ao do lado botão layout, botão de CÓPIA que é um facilitador caso tenha como reaproveitar as coisas de um conector ja feito e o botão PLAY que é utilizado para disparar a integração de maneira imediata.

Na configuração do conector seja um novo ou alteração de um existente, o preenchimento do formulário para conectar e coletar dados no banco é bem parecido com ferramentas de uso para conexões em FTP/SFTP, você coloca na URL o ENDEREÇO:PORTA e na frente quebrando por barras se for o caso a navegação entre as pastas, no Exemplo abaixo após logar e estar na raiz do FTP eu estou indicando para ir até a pasta TESTE. Fora a parte da conexão você define como vai ser a quebra dos arquivos da pasta selecionada, no caso do nosso teste são todos arquivos CSV quebrados por ponto e vírgula (;).

Ainda temos nesse setor um condicional para ignorar as linhas do arquivo, seja para pular o cabeçalho do arquivo por Exemplo ou até mesmo descartas linhas baseado em regras, no Exemplo abaixo estamos descartando tudo que na primeira coluna do arquivo tiver o texto ORIGEM ou DATA.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/file1.png" width="1000"/>
    </td>
  </tr>
</table>

Ja para a seção de conversão de paramêtros temos a trativa do dado em si, onde indicamos qual é a coluna de origem e qual o nome do atributo que a API REST de destino vai receber, esse de-para pode ser do tipo Função onde é habilitado um livro para inserção de funções em javascript, um dado fixado seja de tipo TEXTO, NUMERO ou LÓGICO, ou dinâmico onde é pegado exatamente o conteúdo da origem e enviado para o destino no atributo configurado, então no Exemplo abaixo temos a coluna 14 indo para o atributo taxIdTo no destino, ja para a coluna 7 que vai para o atributo amount temos uma função em javascript devido a ser uma trativa mais complexa do dado, transformar corretamente as unidades de milhar, dezena... Depois transformar no tipo FLOAT.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/file2.png" width="1000"/>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/file3.png" width="1000"/>
    </td>
  </tr>
</table>