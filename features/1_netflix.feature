Feature: Obtener títulos de películas de suspenso

  Scenario: Navegar a Netflix y extraer información
    Given el usuario abre Netflix y se loguea
    When maximiza la pantalla
    Then imprime los títulos de tres películas de suspenso y la URL actual
