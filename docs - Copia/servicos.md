# Serviços Em Execução

Aqui conforme relatado anteriormente, são as filas ativas em nossa plataforma, onde é mostrado o ID do conector após o hífem na coluna FILA:

<table>
  <tr>
    <td align="center">
      <img src="/n4link-wiki/assets/telas_n4link/servicos.png" width="800"/><br>
    </td>
  </tr>
</table>

Na coluna fila é exibido o seu codigo de empresa no N4LINK + ID do conector, na coluna empresa o seu nome de empresa cadastrado, a coluna status indica a situação atual da fila, VERDE indica que esta em execução, AMARELO indica que esta em processo de parar/reiniciar e VERMELHO indica que esta parada. Ja na coluna ações temos os botões: DELETE que elimina as mensagens da fila, na sequencia já para a fila e sobe ela novamente, o botão PURGE que apenas elimina as mensagens atuais da fila, o botão vermelho (-) é o botão que manda parar a fila, o botão de RESTART botão azul com duas setas uma de encontro uma com a outra serve para parar e ja subir novamente a fila, e o botão PLAY botão verde serve para iniciar uma fila que esteja parada.