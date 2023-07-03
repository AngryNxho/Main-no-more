cadena = 'cagcccatgaggcagggtg'

a = []

b = None
for letra in cadena:
   
    if letra == 'c':
        letra = 'g'
        a.append(letra)
    elif letra =='g':
        letra = 'c'
        a.append(letra)
    elif letra == 'a':
        letra = 't'
        a.append(letra)   
    else:
        letra = 'a'
        a.append(letra)
    
i = 1


while i < len(a):
    a[0] += a[i]
    

    i+= 1


print(a[0])