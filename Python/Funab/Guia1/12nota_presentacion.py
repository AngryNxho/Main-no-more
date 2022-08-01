solemne1 = 5
solemne2 = 3.2
solemne3 = 4.8

control1 = 6
control2 = 7
control3 =  4.7

npe = round((solemne1 * 0.2 + solemne2 * 0.25 + solemne3 * 0.3)+((control1+control2+control3)/3)*0.25,1)
nota_examen = round((4 - npe * 0.7)/0.3,1)


print(f"La nota de presentacion a examen es: {npe}",
f"\nLa nota minima que debe obtener en el examen es: {nota_examen}")