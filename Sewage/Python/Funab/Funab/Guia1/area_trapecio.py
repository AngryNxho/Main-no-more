bs= eval(input("Ingresa la longitud en cms de la base superior: "))
bi= eval(input("Ingresa la longitud en cms de la base inferior: "))
h = eval(input("Ingresa la altura en cms: "))

area = ((bs + bi)/2)*h

print(f"el area del trapecio es: {round(area,2)}cms2")