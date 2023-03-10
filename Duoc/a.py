from random import randint

secretNumber = randint(1,101)

user = None


while (user != secretNumber):
    user = int(input('Ingrese un numero entre 1 y 100: '))
    
    if (user == secretNumber):
        print(f'Felicidades acertaste el numero {secretNumber}')

    elif (user < secretNumber):
        print('El numero debe ser mayor')
    
    elif (user > secretNumber):
        print('El numero debe ser menor')