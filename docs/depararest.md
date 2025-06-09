# Configuração de DE-PARA sempre que o destino for REST

Sempre que o Destino for REST independente da tecnologia da origem (BANCO, SOAP, ARQUIVO, SAP RFC/BAPI) vai existir na pagina o conversor de paramêtros onde na primeira coluna é possível configurar determinados atributos para popular a tabela intermediaria da plataforma e assim fazer o descarte caso venha novamente, na segunda coluna é pontuado o tipo do DE-PARA onde pode ser DINAMICO que é o modelo que pega o conteúdo da origem e envia o mesmo para o destino, exemplo está pegando o conteúdo do atributo MATNR que está chegando e mandando para o atributo CODE no destino, pode ser um dado FIXO seja um texto, um número ou lógico, exemplo, está fixando o conteúdo TRUE como dado lógico para mandar no atributo is_integration, até mesmo uma função, no exemplo o atributo IS_ACTIVE, onde habilita um livro acima do atributo para você criar sua função em javascript

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/depararest.png" width="500"/>
    </td>
  </tr>
</table>

Quando é utilizado o conceito de função ao entrar no editor da função (botão do livro) é exibido uma tela para criar a função, nesta tela é possível utilizar variáveis globais da plataforma para captar conteúdos, onde a varíavel record armazendo os dados que voltaram da requisição do fomrulário origem, detail o conteúdo da requisição do formulário detalhe, parent o conteúdo que chego do conector PAI, caso esse conceito seja utilizado, uploadedFiles arquivos em csv que foram subidos para a empresa. No exemplo abaixo é feito um if simples onde caso exista na origem o atributo LVORM ele será retornado, caso contrário fixamos o retorno TRUE.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/depararest1.png" width="500"/>
    </td>
  </tr>
</table>
