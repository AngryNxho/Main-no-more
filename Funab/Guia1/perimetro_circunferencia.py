radio = eval(input("ingresa el radio: "))
pi = 3.141593
perimetro_circ = 2 * pi * radio
area_circ = pi * radio**2
volumen_esfera = 4 * pi * (radio**3/3)

print(f"El perímetro del círculo es: {round(perimetro_circ,2)} cms",
f"\nEl área de la circunferencia es: {round(area_circ,2)} cms2",
f"\nEl volumen de la esfera es: {round(volumen_esfera,2)} cms3")
