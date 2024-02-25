Feature: Primeiro teste
  Scenario: Tela de contagem
    Given Acessa a pg princial
    And e verifica se o contatdor começa com zero
    When incremento um numero
    Then contador precisa ser igual a 1
