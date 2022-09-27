codigo = "2020030810301100"
#2020091807122202
#2020030810301100
#2020030210301100

dia = int(codigo[6:8])
mes = int(codigo[4:6])
anho = int(codigo[0:4])
noches = int(codigo[8:10])
tipoServicio = codigo[12]
habitacion = codigo[10:13]
alojado = int(codigo[-1])

precioBase = 70000

if tipoServicio[-1] == ("2" or "4" or "6" or "8" or "0"):
    extraPar = precioBase * 0.1
    
else:
    extraPar = 0

if tipoServicio == "2":
    extraServicio = precioBase * 0.15
   
else:
    extraServicio = 0

if  (( dia <= 5) or (dia >= 20) and (3 <= mes < 12)) or (10 <= dia <= 20) and (mes == 9):
    extraAlta = precioBase * 0.2
   

else:
    extraAlta = 0

if alojado > 1:
    descuento = precioBase * 0.06
    

else:
    descuento = 0


resultado = (((precioBase + extraPar + extraServicio + extraAlta) - descuento) * noches)

print(f"Fecha de Ingreso {dia}-{mes}-{anho}\nNoches de estadia: {noches}\nNumero de habitacion: {habitacion}\nTipo de servicio: {tipoServicio}\
    \nNumero de veces que ha alojado: {alojado}\nValor de la estadia completa: {int(resultado)}")

