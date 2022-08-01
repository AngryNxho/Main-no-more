from re import A


letra = input("Ingresa una letra: ")

vocales = "a" , "e", "i", "o", "u" , "A" , "E", "I", "O", "U"

consonantes = "B", "C", "D", "F"," G", "H", "J", "K", "L", "M"," Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"

if letra in vocales:
    print("La letra es una vocal")

elif letra in consonantes:
    print("La letra es una consonante")

else:
    print("El caracter ingresado no es una letra")