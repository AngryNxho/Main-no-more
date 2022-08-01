

"""Construye un programa en Python que indique si un número entero es primo o compuesto, a partir de un número
mayor 1 ingresado por el usuario.


primo = él mismo y el 1"""

num = eval(input("Ingresa un numero: "))

i = 1
divisores = []


while i <= num:
    if num % i == 0:        
        divisores.append(i)      
    i += 1
    
if len(divisores) > 2 :
    print("compuesto")

else:
    print("Primo")



""""""
    