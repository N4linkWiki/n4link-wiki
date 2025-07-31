# Configuração de conector ouvinte (WebHook)

É possível configurar o conector para ser recpetivo, no qual, no cabeçalho é possível informar que é um conector ouvinte e configurar um nome de método a ser extarnalizado.

A URL e o token são únicos para cada cliente e são informados pela nossa equipe no momento da criação do cadastro da Empresa para liberação de uso na plataforma.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/ouvinte.png" width="1000"/>
    </td>
  </tr>
</table>

No exemplo abaixo a empresa N4LINK possui a URL: https://go.n4s-hip.com/public/23/ como base. Após a última barra virá o método que será configurado como ouvinte.

Exemplo:
Foi criado o conector abaixo expondo o método /meuWebhook onde a platafoma está externalizando um verbo POST que irá receber um body de alguém que estiver requisitando-a. A partir do recebimento desse body é possível dar sequência em outras atividades no mesmo modelo quando é a plataforma que está requisitando.

Exemplo de URL e TOKEN disponibilizado por nossa equipe:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/ouvinte1.png" width="1000"/>
    </td>
  </tr>
</table>
