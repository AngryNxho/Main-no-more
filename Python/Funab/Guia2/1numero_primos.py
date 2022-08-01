num = eval(input("Ingresa un numero del 2 al 10: "))

primos = 2,3,5,7
compuesto = 4,6,8,9,10

if num in primos:
    print("El número es primo")

elif num in compuesto:
    print("El número es compuesto")

else:
    print("El numero esta fuera de rango")