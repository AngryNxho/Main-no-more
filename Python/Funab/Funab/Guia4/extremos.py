cantidad = 10

extremos = 2

a = []

for numero in range(cantidad):

    dato = int(input('Ingrese numero: '))
    a.append(dato)


for num in range(extremos):

    a.remove(min(a))
    a.remove(max(a))

print(sorted(a))