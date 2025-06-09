# Integração via RFC's ou BAPI's SAP

Para a configuração de integrações com origem SAP ECC, menu Integrações - Cadastro de SAP-RFC você tera como tela inicial:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/sap.png" width="1000"/>
    </td>
  </tr>
</table>

onde para o conectores ja criados você encontra os botões de LOG responsável por armazenar todos os dados de uma transação executada, botão LAYOUT que armazena toda a configuração do conector, botão CONTROLE DE VERSÕES que seria o botão cinza ao do lado botão layout, botão de CÓPIA que é um facilitador caso tenha como reaproveitar as coisas de um conector ja feito e o botão PLAY que é utilizado para disparar a integração de maneira imediata.

Na configuração do conector seja um novo ou alteração de um existente, o preenchimento do formulário para conectar é bem parecido com o preenchimento dos dados no SAP LOGON GUI, onde você preenche o servidor de aplicação, se for SAP-ROUTER a URL do router, usuário, senha ID do sistema, número da instancia, client e linguagem. Após os dados de conexão você informa qual é a RFC ou BAPI a ser consumida, no Exemplo abaixo é uma RFC customizada chamada CADASTRO_MATERIAIS, nos parêmtros de entrada você informa os parametros que a RFC/BAPI espera, no Exemplo abaixo temos os parametros data de (IM_LAEDA_DE) e o data até (IM_LAEDA_ATE)

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/sap1.png" width="1000"/>
    </td>
  </tr>
</table>