horas = eval(input("ingresa las horas trabajadas: "))
sueldo_base = 500000

if 30 >= horas > 25:
    print(f"El monto a pagar es: ${int(sueldo_base*1.05)}")

elif 35 >= horas > 31:
    print(f"El monto a pagar es: ${int(sueldo_base*1.1)}")

elif 40 >= horas > 36:
    print(f"El monto a pagar es: ${int(sueldo_base*1.15)}")
    
elif 50 >= horas > 41:
    print(f"El monto a pagar es: ${int(sueldo_base*1.25)}")

else:
    print("Error: cantidad de horas invalida")

