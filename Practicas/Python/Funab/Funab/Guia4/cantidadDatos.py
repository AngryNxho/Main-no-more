cantDatos = int(input('Ingrese cantidad de datos: '))


lista = []

sobre = []
bajo = []
for x in range(cantDatos):
    numero = float(input('Ingrese dato: '))
    lista.append(numero)


promedio = (sum(lista)/ cantDatos)

for num in lista:
    if num > promedio:
        sobre.append(num)

    else:
        bajo.append(num)

print(f'{round(promedio,1)}\nValores bajo el promedio: {sorted(bajo)}\nValores sobre el promedio: {sorted(sobre)}')

    

