nota1 = eval(input("Nota Prueba 1: "))
nota2 = eval(input("Nota Prueba 2: "))

if ((nota1 + nota2) /2) > 6.4:
    print("Pasaste maquina")

elif ((nota1 + nota2) /2) < 2.2:
    print("Te lo hechaste rey :c")

nota3 = eval(input("Nota Prueba 3: "))
if ((nota1 + nota2 + nota3)/3) >= 5.2:
    print("Aprobado")

elif ((nota1 + nota2 + nota3)/3) < 2.8:
    print("Te lo hechaste rey :c")

else:
    examen = eval(input("Nota Examen: "))
    if examen >= 4.0:
        print("Lo salvaste a la ultima perro qlo genio de la vida")