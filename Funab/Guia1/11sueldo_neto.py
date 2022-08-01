from re import A


horas_trabajadas = 50
#eval(input("Ingresa las horas trabajadas: "))
valor_hora = 9000
#eval(input("Ingresa el valor hora en $: "))

sueldo_base = horas_trabajadas * valor_hora


beneficios = sueldo_base * 0.25


descuentos = sueldo_base * 0.1


descontar = beneficios * 0.05


print(f"El sueldo neto mensual será de: ${int(sueldo_base + beneficios - descuentos - descontar)} pesos")

