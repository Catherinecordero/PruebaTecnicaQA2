Feature: Iniciar sesión en Gmail desde móvil

  Scenario: Login exitoso en Gmail desde móvil
    Given el usuario abre Gmail desde un dispositivo móvil y se loguea
    Then imprime el mensaje de inicio de sesión exitoso
