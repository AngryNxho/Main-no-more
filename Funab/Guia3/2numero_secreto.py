from random import randint

numeroSecreto = randint(0,300)


i = 1
num = eval(input("Ingresa un numero entre 0 y 300:")) 
if num < numeroSecreto:
            print("Ingresa un numero mayor")
            i+=1
elif num > numeroSecreto:
            print("Ingresa un numero menor")
            i+=1
elif num == numeroSecreto:
    print(f"Acertaste en {i} intentos")

while num != numeroSecreto:
    num = eval(input("Ingresa un numero entre 0 y 300:")) 
    if num < numeroSecreto:
            print("Ingresa un numero mayor")
            i+=1
    elif num > numeroSecreto:
            print("Ingresa un numero menor")
            i+=1
    elif num == numeroSecreto:
            print(f"Acertaste en {i} intentos")
