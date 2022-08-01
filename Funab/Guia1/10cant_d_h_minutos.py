dias = eval(input("Ingresa la cantidad de dias : "))
horas = eval(input("Ingresa la cantidad de horas : "))
minutos = eval(input("Ingresa la cantidad de minutos : "))
segundos = eval(input("Ingresa la cantidad de segundos : "))

print(f"La cantidad equivalente es: {dias * 86400 + horas * 3600 + minutos * 60 + segundos}")