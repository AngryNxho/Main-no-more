cantidad = 2

i = 1
c = 0

nombres = []
notas = []

promedio = []

for x in range(cantidad):
    nombre = input(f'Ingrese nombre del alumno {i}: ')
    nombre = nombre.split(' ')
    nombres.append(nombre)
    nota = (input(f'Ingrese las notas de {nombres[c][0]}: '))
    nota = nota.split(' ')
    nota = map(float, nota)
    nota = list(nota)
    calculo = (sum(nota)/len(nota))
    promedio.append(calculo)

    notas.append(nota)
    i += 1
    c += 1


i = 0

for n in range(cantidad):
    print(f'El promedio de {nombres[i][0]} es : {round(promedio[i], 2)}')
    i += 1


# 4.4 5.6 3.5 6.7

# 6.6 5.6

# 4.4 5.5 6.6 3.4
