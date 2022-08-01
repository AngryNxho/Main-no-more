duracion = eval(input("Ingresa la duracion de la llamada: "))

print("Considera esta asignacion para cada dia: \n(1) Lunes \n(2) Martes \n(3) Miercoles\n(4) Jueves \n(5) Viernes\n(6) Sabado\n(7) Domingo")

if 5 >= duracion > 0:
    monto = 100 * duracion

elif 6 >= duracion > 5:
    monto = 500 + 80

elif 7 >= duracion > 5:
    monto = 500 + (80 * 2)

elif 8 >= duracion > 5:
    monto = 500 + (80 * 3)

elif  duracion == 9:
    monto = 740 + (70 * 1)

elif  duracion == 10:
    monto = 740 + (70 * 2)

elif  duracion == 11:
    monto = 880 + (50 * 1)

elif  duracion == 12:
    monto = 880 + (50 * 2)

elif  duracion == 13:
    monto = 880 + (50 * 3)

elif  duracion == 14:
    monto = 880 + (50 * 4)

elif  duracion == 15:
    monto = 880 + (50 * 5)

elif  duracion == 16:
    monto = 880 + (50 * 6)
    


dia = eval(input("Indica el dia de la llamada: "))

if 5 >= dia >= 1:
    jornada = (input("\nJornada de la llamada (D) 7am-9pm (V) 9pm-7am: "))
    
    if jornada == "D" or "d":
     impuesto =  monto * 0.15
    
    elif jornada  == "V" or "v":
        impuesto =  monto * 0.10
    
     


elif 8 >  dia > 5:
    impuesto = monto * 0.03





print(f"\nCobro por minutos: {monto}\n         Impuesto: {impuesto}\n            Total: {(round(monto + impuesto))} ")


"""primeros cinco minutos cuestan $100 cada uno, 
los siguientes tres, $80 cada uno, 

los siguientes dos minutos, $70 cada uno y, 
a partir del undécimo minuto, $50 cada minuto. Además, se carga un impuesto de un 3% cuando la
llamada se realiza un sábado o un domingo (no importando la jornada), 

pero si es un día hábil (de lunes a viernes),
se carga un impuesto de un 15% en jornada diurna y un impuesto de 10% en jornada vespertina."""