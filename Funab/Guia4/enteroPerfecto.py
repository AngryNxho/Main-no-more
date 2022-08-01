



num = 8128
#eval(input("Ingresa un numero: "))

i = 1
a = 1
divisores = []


while i <= num:
    if num % a == 0:        
        divisores.append(a)
        
    i += 1
    a += 1


        
divisores.remove(max(divisores))

if sum(divisores) == num:
    print(num, divisores)