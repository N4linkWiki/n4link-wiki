# Configuração de DE-PARA sempre que o destino for REST

Sempre que o Destino for REST, independente da tecnologia da origem (BANCO, SOAP, ARQUIVO, SAP RFC/BAPI), vai existir na página o conversor de paramêtros.
Na primeira coluna é possível configurar determinados atributos para popular a tabela intermediária da plataforma e fazer o descarte caso retorne.

Na segunda coluna é pontuado o tipo do DE-PARA. Pode ser:
. DINÂMICO - modelo que utiliza o conteúdo da origem e o envia para o destino.
No exemplo está sendo utilizado o conteúdo do atributo MATNR que está chegando e enviando para o atributo CODE no destino.
. FIXO - pode ser um texto, um número ou lógico.
O exemplo está fixando o conteúdo TRUE como dado lógico para mandar no atributo is_integration, até mesmo uma função. Veja no exemplo o atributo IS_ACTIVE ue habilita um livro acima para que possa ser cirado sua função em javascript.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/depararest.png" width="500"/>
    </td>
  </tr>
</table>

Quando é utilizado o conceito de função ao entrar no editor (botão do livro) é exibido uma tela para criar a função.
Nesta tela é possível utilizar variáveis globais da plataforma para captar conteúdos:
. Varíavel record - armazena os dados que voltaram da requisição do fomrulário origem;
. Detail - armazena o conteúdo da requisição do formulário detalhe;
. Parent - armazena o conteúdo que chega do conector PAI;
. Caso esse conceito seja utilizado, uploadedFiles armazena arquivos em csv que foram subidos para a empresa. 
exemplo abaixo é feito um if simples onde caso exista na origem o atributo LVORM, será retornado. Caso contrário, fixamos o retorno TRUE.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/depararest1.png" width="500"/>
    </td>
  </tr>
</table>
