#Metodos
# 1. Metodo de instancia (un objeto puede mandarlos a llamar)
# 2. Metodos Estaticos (los metodos estaticos le pertencen a la clase y no a la instancia)

#Ejemplo Metodos de Instancia
class Cirulo:
    _pi = 3.1416
    
    def __init__(self, radio):
        self.radio = radio
        
    def area(self): #Metodos de instancia(un objeto puede mandar a llamarlos)
        return self.radio * self.radio * self._pi
    


circulo1 = Cirulo(7)
print(circulo1.area)

n = 3

if n in range(2,6):
    print('Not Weird')

#Metodo Estatico
class Cirulo:
    _pi = 3.1416
    
    @staticmethod #Metodos Estaticos (los metodos estaticos le pertencen a la clase y no a la instancia)
    def pi():
        return 3.1416
    
    def __init__(self, radio):
        self.radio = radio
        
    def area(self): 
        return self.radio * self.radio * self._pi
    
print(Cirulo.pi())

circulo1 = Cirulo(7)
print(circulo1.area())
print(Cirulo.pi())


