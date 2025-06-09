# Integração via BANCO DE DADOS

Para a configuração de integrações com origem BANCO DE DADOS, menu Integrações - Cadastro de banco você tera como tela inicial:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/banco.png" width="1000"/>
    </td>
  </tr>
</table>

onde para o conectores ja criados você encontra os botões de LOG responsável por armazenar todos os dados de uma transação executada, botão LAYOUT que armazena toda a configuração do conector, botão CONTROLE DE VERSÕES que seria o botão cinza ao do lado botão layout, botão de CÓPIA que é um facilitador caso tenha como reaproveitar as coisas de um conector ja feito e o botão PLAY que é utilizado para disparar a integração de maneira imediata.

Na configuração do conector seja um novo ou alteração de um existente, o preenchimento do formulário para conectar e coletar dados no banco é bem parecido com ferramentas de uso para conexões via JDBC de mercado, como por Exemplo o DBEAVER, você seleciona qual é o banco que vai utilizar no Exemplo abaixo SQL SERVER, URL, porta, usuário e senha, e o SCHEMA somente se for necessário, no camp QUERY você insere sua sintaxe seja uma consulta, uma procedure, no Exemplo abaixo estou montando um SELECT

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/banco1.png" width="1000"/>
    </td>
  </tr>
</table>