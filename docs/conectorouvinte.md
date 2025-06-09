# Configuração de conector ouvinte (WebHook)

É possível configurar o conector para ser recpetivo, onde na cabeçalho dele você informa que é um conector ouvinte e configura um nome de método a ser extarnalizado, a URL e o token é unico para cada cliente e é informado pela nossa equipe no momento da criação do cadastro da Empresa para liberação de uso na plataforma. No exemplo abaixo a empresa N4LINK teria a URL: https://go.n4s-hip.com/public/23/ como base e depois da ultima barra sempre vai vir o método que configurado como ouvinte, exemplo fizemos o conector abaixo expondo o método /meuWebhook onde a platafoma está externalizando um verbo POST que vai receber um body de alguem que estiver requisitando ela e a partir do recebimento desse body consegue dar sequencia em outras atividades, no mesmo modelo de quando é a plataforma requisitando.

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/ouvinte.png" width="1000"/>
    </td>
  </tr>
</table>

Exemplo de URL e TOKEN a ser disponibilizado por nossa equipe:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/ouvinte1.png" width="1000"/>
    </td>
  </tr>
</table>