# Configuração de body quando o destino é SOAP

Quando o destino é banco você pode utilizar o conceito de duas chaves abrindo e fechando informando o nome de atributo que chegou na origem a ser utilizado, então você estrutura sua procedure de maneira completa, INSERT, SELECT, UPDATE, o que for, e aonde desejar troca os conteúdos de acordo com os atributos que chegam na origem, no exemplo abaixo estamos chamadno umap rocedure BDIPIERPROD aonde no parametro CodBarras por exemplo pegamos o conteudo do atributo CODBARRAS que chega da origem REST.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/bodybanco.png" width="1000"/>
    </td>
  </tr>
</table>