
kilosVendidos = 0

frascos = 0
bolsas = 0


continuar = 1

while (continuar == 1):
    print('\nMenu')

    menu = input('\nA. Ingresar venta\nB. Kilos Vendidos\nC. Frascos vendidos\nD. Ingresos por bolsas\nE. Salir\nIngresa un opcion: ')
    
    while menu == 'A':
        ventas = input('\nVentas\n1. Bolsa de 0.25 ($300)\n2. Bolsa de 0.5 ($500)\n3. Bolsa de 1 kg ($1200)\n4. Bolsa de 2 kg ($2400)\n5. Salir\nIngresa una opcion: ')
        
        if ventas == '5':
            break
        
        cantidad = int(input('Ingrese la cantidad: '))
        
        if ventas == '1':

            for x in range(cantidad):
                kilosVendidos += 0.25
                bolsas += 300
                
        elif ventas == '2':
            for x in range(cantidad):
                kilosVendidos += 0.50
                bolsas += 500
                
        elif ventas == '3':
            for x in range(cantidad):
                kilosVendidos += 1
                frascos += 1
                
        elif ventas == '4':
            for x in range(cantidad):
                kilosVendidos += 2
                frascos += 1
                
    if menu == 'B':
        
        print(f'Kilos vendidos: {kilosVendidos}')
        
    elif menu == 'C':
        
        print(f'Total de frascos vendidos: {frascos}')
        
    elif menu == 'D':
        print(f'Ingresos por bolsas: ${bolsas}')
        
    elif menu == 'E':
        continuar = 0
        


        
        
        
        
        
        
