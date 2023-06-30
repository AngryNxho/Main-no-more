capacidadMax = 2099

unidadesPorCajaG = 10
if unidadesPorCajaG > 10:
    print("Excede Maximo")

unidadesPorCajaM = 9
if unidadesPorCajaM > 9:
    print("Excede Maximo")

a = unidadesPorCajaG * 21
b = unidadesPorCajaM * 10
    
    

pesoPedido = (unidadesPorCajaG * 21) + (unidadesPorCajaM * 10)


print(pesoPedido)
# capacidadMax -= pesoPedido

disponible = capacidadMax - pesoPedido
print(disponible)


if capacidadMax <= pesoPedido:
    print("Sin Stock")
else:
    print("Con stock")



cantidadG = 0
cantidadM = 10

grande = 210
mediana = 90

# 
cajaGrandeUK = 10 * 21
cajaMedianaUK = 9 * 10


v = capacidadMax - (cantidadG * grande) - (cantidadM * mediana)
v1 = (cantidadG * grande) + (cantidadM * mediana)
s = capacidadMax - v1
v2 = s - (cantidadG * grande) - (cantidadM * mediana) 

print(f"Cajas Grandes(Kg): {a} - Cajas medianas(Kg) : {b} ")