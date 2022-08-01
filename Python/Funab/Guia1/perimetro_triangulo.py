a = eval(input("ingresa la longitud del primer lado:"))
b = eval(input("ingresa la longitud del segundo lado:"))
c = eval(input("ingresa la longitud del tercer lado:"))

s = (a + b + c) / 2
area = (s * (s - a) * (s - b) * (s - c))**(1/2)


print(f"El área del triángulo es: {round(area,2)} cms2",
f"\nEl perimetro del triangulo es: {float(a + b + c)} cms")