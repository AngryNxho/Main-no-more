

grado = eval(input("Grado del polinomio: "))
x = eval(input("Valor para evaluar el polinomio: "))
a =[]
i = 0

while i <= grado:
    coeficiente = eval(input(f"Coeficiente x^{grado - i}: "))
    a.append(coeficiente)
    i +=1

print(f"Polinomio evaluado en {float(x)}: {(float(sum(a)) * float(x))}")
"""## BLOQUE PRINCIPAL:
## Entrada de datos:
n = int(input("Grado del polinomio: "))
x = float(input("Valor para evaluar el polinomio: "))
## Proceso:
exponente = n
acumulador = 0
while exponente >= 0:
 coeficiente = float(input(f"Coeficiente x^{exponente}:
"))
 acumulador += coeficiente*x**exponente
 exponente = exponente-1

## Salida de datos:
print(f"\nPolinomio evaluado en {x}: {acumulador}\n")"""