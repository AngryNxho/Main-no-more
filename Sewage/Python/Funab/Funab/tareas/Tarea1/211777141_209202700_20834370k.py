import random
continuar = 1
intentos = 1
intentos_max = intentos
fama = 0
toque = 0
j_ganados = 0
j_perdidos = 0
j_jugados = 0
while continuar == 1:
    print("Bienvenido a el juego Toque y Fama.")
    print("Elija la dificultad del juego 1 = Novato, 2 = Facil, 3 = Intermedio bajo , 4 = Medio, 5 = Medio alto,"
          " 6 = Dificil, 7 = Infierno")
    dificultad = int(input("Dificultad del juego: "))
    if dificultad == 1:
        cant_digitos = 3

    elif dificultad == 2:
        cant_digitos = 4

    elif dificultad == 3:
        cant_digitos = 5

    elif dificultad == 4:
        cant_digitos = 6

    elif dificultad == 5:
        cant_digitos = 7

    elif dificultad == 6:
        cant_digitos = 8

    elif dificultad == 7:
        cant_digitos = 9

   

    digitos = ("0","1","2","3","4","5","6","7","8","9")
    codigo = ""
    
    for i in range(cant_digitos):
        elegido = random.choice(digitos)
        while elegido in codigo:
            elegido = random.choice(digitos)
        codigo += elegido
    print(codigo)
    print(f"Tienes que adivinar un código de {cant_digitos} digitos distintos")
    propuesta = input(f"Intento {intentos_max}: ¿Qué código eliges?: ")
    intentos = 1

    while propuesta != codigo and intentos < cant_digitos:
        if intentos < cant_digitos:
            for i in range(cant_digitos):
                if propuesta[i] == codigo[i]:
                    fama += 1
                elif propuesta[i] in codigo:
                    toque += 1
        if len(propuesta) > cant_digitos:
            print("Error pierde intento")
        else:
            print(f"Tu propuesta {propuesta} tiene {toque} toque(s) y {fama} fama(s)")
        intentos += 1
        fama = 0
        toque = 0
        propuesta = input(f"Intento {intentos}: Elige otro código: ")
        if intentos >= cant_digitos and propuesta != codigo:
            print(f"Fin del juego, el codigo era {codigo}")
            j_perdidos += 1
            j_jugados += 1
            continuar = int(input("¿Desea seguir jugando? 1 = si, 0 = no: \n"))
            print(f"Jugados: {j_jugados} - Juegos ganados: {j_ganados} - Juegos perdidos: {j_perdidos}\n")

    if propuesta == codigo:
        j_ganados += 1
        j_jugados += 1
        print(f"FELICIDADES!!! haz adivinado el codigo en {intentos} intento(s)")
        continuar = int(input("¿Desea seguir jugando? 1 = si, 0 = no: \n"))
        print(f"Jugados: {j_jugados} - Juegos ganados: {j_ganados} - Juegos perdidos: {j_perdidos}\n")