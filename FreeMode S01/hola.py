
i = 0
a = 0

notas = input("Ingrese todas las notas: ")
    
separar = notas.split(' ')

map = map(eval, separar)

for x in map:
    a += x


print(a / len(separar))