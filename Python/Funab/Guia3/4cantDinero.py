
from cgi import print_arguments


cantidad = int(input("ingresa la cantidad de dinero: "))

moneda1 = 0

moneda5 = 0

moneda10 = 0

moneda50 = 0

moneda100 = 0

moneda500 = 0


x = 0

while cantidad > 0:
    if cantidad >= 500:
        cantidad -= 500
        moneda500 += 1
    
    elif cantidad >= 100:
        cantidad -= 100
        moneda100 += 1
    
    elif cantidad >= 50:
        cantidad -= 50
        moneda50 += 1
    
    elif cantidad >= 10:
        cantidad -= 10
        moneda10 += 1

    elif cantidad >= 5:
        cantidad -= 5
        moneda5 += 1
    
    elif cantidad >= 1:
        cantidad -= 1
        moneda5 += 1




if moneda500 > 0:
    print(f"{moneda500} moneda(s) de $500")

if moneda100 > 0:
    print(f"{moneda100} moneda(s) de $100")

if moneda50 > 0:
    print(f"{moneda50} moneda(s) de $50")

if moneda10 > 0:
    print(f"{moneda10} moneda(s) de $10")

if moneda5 > 0:
    print(f"{moneda5} moneda(s) de $5")

if moneda1 > 0:
    print(f"{moneda1} moneda(s) de $1")