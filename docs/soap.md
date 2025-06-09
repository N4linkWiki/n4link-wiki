# Integração via SOAP

Para a configuração de integrações com origem SOAP, menu Integrações - Cadastro de SOAP você tera como tela inicial:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/soap.png" width="1000"/>
    </td>
  </tr>
</table>

onde para o conectores ja criados você encontra os botões de LOG responsável por armazenar todos os dados de uma transação executada, botão VIEW que apresenta dados que foram armazenados em um tabela intermediaria, conceito utilizado quando normlamente no sistema de origem você não consegue controlar o que ja foi integrado, para assim tratar se deve enviar novamente ou não, botão LAYOUT que armazena toda a configuração do conector, botão CONTROLE DE VERSÕES que seria o botão cinza ao do lado botão layout, botão de CÓPIA que é um facilitador caso tenha como reaproveitar as coisas de um conector ja feito e o botão PLAY que é utilizado para disparar a integração de maneira imediata.

Na configuração do conector seja um novo ou alteração de um existente, o preenchimento do formulário SOAP é bem parecido com ferramentas de uso para teste de API's de mercado, como por Exemplo o SOAPUI, você seleciona se deve ser verificado o certificado do endereço a ser conumido ou não, insere o WSDL que contém os métodos, se for uma API paginada qual o conceito de paginação, se tiver autorização qual o tipo de autorização utilizado, e os dados do HEADER, onde o HEADER é dinimico é pode ser inserido quantos forem necessário pelo botão de adicionar (+)

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/soap1.png" width="1000"/>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/soap2.png" width="1000"/>
    </td>
  </tr>
</table>