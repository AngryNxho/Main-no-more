import random
from random import randint

nombre = "Lucas"
#input("Ingrese su nombre: ")
cantidad = int(input('Elige el largo del numero de 1 a 9: '))


i = 1
contador = 0
counter = 0

codigo = []

jugados = 0
perdidos = 0
ganados = 0

intentos = 0
prueba = []

toques = 0
a = []
fama = 0
b = []

numUsuario = None


jugar = 1

while jugar == 1:
    numero = randint(1, 9)
    if i <= cantidad:
        for numero in range(cantidad):
            numero = randint(1,9)
            while numero in codigo:
                numero = randint(1,9)

            if numero not in codigo:
                codigo.append(numero)
    

        if len(codigo) == cantidad:
            while intentos < cantidad:
                    # print(codigo)
    
                    numUsuario = int(input(f"Intento {intentos + 1}: "))        
                    numUsuario = str(numUsuario)
                    numUsuario = list(numUsuario)
                    

                    for numero in numUsuario:
                        prueba.append(numUsuario[counter])
                        counter += 1

                    counter = 0
                    prueba = (prueba[0:len(numUsuario)])
                        
                    
                    intentos += 1
                        

                    codigo = map(str, codigo)
                    codigo = list(codigo)

                         

                    while counter < cantidad and len(numUsuario) == len(codigo):
                        if (numUsuario[counter] in codigo):
                            toques += 1

                        
                        counter +=1

                    a.append(toques)
                    toques = 0
                    counter = 0
                    for hola in codigo:
                        if (len(numUsuario) == len(codigo) and (numUsuario[counter] == codigo[counter])):
                            fama += 1
                        counter += 1
                    b.append(fama)
                    fama = 0
                    counter = 0 

    
                    
                    print(f'Toques: {a[-1]} Famas: {b[-1]}\n')
                    

                    if numUsuario == codigo:
                        print(f'{nombre} Felicitaciones! Has acertado en {intentos} intento(s)')
                        jugar = int(input('Desea seguir jugando:  '))
                        jugados += 1
                        if jugar == 0:
                            ganados += 1
                            print(f'Jugados: {jugados} - Ganados: {ganados} - Perdidos: {perdidos}')
                                        
                            exit()
                        if jugar == 1:    
                            ganados += 1
                            intentos = 0
                            continuar = 1
                            codigo = []
                            numero = randint(1, 9)
                            cantidad = int(input('Elige el lardo del numero: '))

                            if i <= cantidad:
                                for numero in range(cantidad):
                                    numero = randint(1,9)
                                    while numero in codigo:
                                        numero = randint(1,9)

                                    if numero not in codigo:
                                        codigo.append(numero)
                                        
                    if intentos == len(codigo)- 1:   
                        
                        lastChance = input("Deseas recibir ayuda. Si/No: ")
                        if lastChance == "no":
                            
                            print(f"Por tu valentia te diremos que el ultimo digito del codigo es: {codigo[-1]}")
                            
                        elif lastChance == "si":
                            
                            print("Si puedes resolver este ejerccio matematico tus intentos volveran a 0")
                            numero1 = randint(1,9)
                            numero2 = randint(1,4)
                            ejercicio = numero1**numero2
                            print(f"{numero1} Elevado en {numero2} =  ")
                            respuesta = int(input("Escriba el resultado: ") )
                            
                            if respuesta == ejercicio:
                                print("Tus intentos vuelven a 0")
                                intentos = 0     
                                
                            else:
                                print("Una Pena, te dirijimos a tu ultimo intento")
                    if len(numUsuario) != len(codigo):
                        print(f'Pierde intento, el numero debe ser de {len(codigo)} digitos')
                    
                    
                        
                        

                
            if intentos == cantidad:
                        print(f'Toques: {a[-1]} - Famas: {b[-1]} - Fin del juego la secuencia era {(codigo)}')
                        jugar = int(input('Deseas jugar nuevamente 1.Si/ 0.No: '))
                        
                        perdidos += 1
                        jugados += 1

                        if jugar == 0:
                            print(f'Jugados: {jugados} - Ganados: {ganados} - Perdidos: {perdidos}')
                    
            codigo = []
            cantidad = int(input('Elige el lardo del numero: '))

            numero = randint(1,9)
            intentos = 0

            

            