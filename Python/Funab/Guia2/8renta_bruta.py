rentaBrutaAnual = int(input("Ingrese la Renta Bruta Anual: "))

pimpuestos = rentaBrutaAnual * 0.05

rentaAfecta = rentaBrutaAnual * 0.4
impuestoNominal = rentaAfecta  * 0.1


if rentaAfecta  < 100000:
    print(f"Devolucion: {int(pimpuestos)}")

elif (rentaAfecta >= 100000 and impuestoNominal < pimpuestos):
    print(f"Pago por: {int(pimpuestos - impuestoNominal)} ")
    
  