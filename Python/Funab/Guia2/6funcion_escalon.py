x = eval(input("Ingresa x: "))
a = x

if x <= -1:
    x = 0

elif -1 < x < 1:
    x = (1/2)*(x+1)
    

elif x >= 1:
    x = 1

print(f"escalon {float(a)} = {float(x)}")
