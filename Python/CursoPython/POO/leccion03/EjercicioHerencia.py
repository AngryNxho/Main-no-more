class Vehiculo:
    def __init__(self, color, ruedas):
        self.color = color
        self.ruedas = ruedas
        
    def __str__(self):
        return 'Color: ' + self.color + ' Ruedas: ' + str(self.ruedas)
    

# print(Vehiculo('Rojo', 4))


class Coche(Vehiculo):
    def __init__(self, color, ruedas, Velocidad):
        self.velocidad = Velocidad
        super().__init__(color, ruedas)
        
    
    def __str__(self):
        return super().__str__() + '\nVelocidad (km/h): ' + str(self.velocidad)
    

# print(Coche('Verde', 4, 200)) 


class Bicicleta(Vehiculo):
    def __init__(self, color, ruedas, tipo):
        self.tipo = tipo
        super().__init__(color, ruedas)
    
    def __str__(self):
        return super().__str__() + ' Tipo: ' + self.tipo
    

print(Bicicleta('Naranjo', 4, 'Urbana'))