# language: pt

Funcionalidade: Validar mapa do Google na página "Onde usar meu cartão VR"
# Descrição geral da funcionalidade que será testada

  Cenario: Acessar página "Onde usar meu cartão VR" e validar mapa do Google
  # Descrição específica do cenário de teste

    Dado que eu estou no site da VR
    # Pré-requisito do cenário - o usuário precisa estar no site da VR

    Quando eu clico na seção "Pra Você"
    # Ação do usuário - clicar na seção "Pra Você"

    E eu clico no botão "Onde usar meu cartão VR"
    # Ação do usuário - clicar no botão "Onde usar meu cartão VR"

    Então o mapa do Google deve ser exibido em tela
    # Expectativa do cenário - o mapa do Google deve ser exibido na tela
