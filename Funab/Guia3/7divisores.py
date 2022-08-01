num = eval(input("Ingresa un numero: "))

i = 1
a = 1
divisores = []


while i <= num:
    if num % a == 0:        
        divisores.append(a)
        print(f"Divisor {i}: {max(divisores)}")
        i += 1
    a += 1
    


    
