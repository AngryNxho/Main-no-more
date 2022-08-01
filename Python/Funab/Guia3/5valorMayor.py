"""Construye un programa en Python que encuentre y muestre el valor mayor de una 
secuencia de n valores ingresados por el usuario. El valor de n también lo debe ingresar el usuario.
"""

cantidad = eval(input("Ingresa la cantidad de numeros: "))

a = []


i = 1 

while i <= cantidad:
    numero = float(input(f"Ingresa el numero {i}: "))
    a.append(numero)
    i +=1


print(f"El valor mayor es: {max(a)}")
    