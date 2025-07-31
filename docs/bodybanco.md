# Configuração de body quando o destino é banco

Quando o destino é banco é possível utilizar o conceito de duas chaves: abrindo e fechando informando o nome de atributo que chegou na origem a ser utilizado.
A partir dai, é possível estruturar sua procedure de maneira completa (INSERT, SELECT, UPDATE, etc) e onde desejar trocar os conteúdos de acordo com os atributos que chegam na origem.

No exemplo abaixo estamos chamando uma procedure BDIPIERPROD onde no parâmetro CodBarras está sendo utilizado o conteúdo do atributo CODBARRAS que chega da origem REST.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/bodybanco.png" width="1000"/>
    </td>
  </tr>
</table>
