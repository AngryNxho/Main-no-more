class Migrar:
    def __init__(self, edad, nacionalidad, profesion, cantidad):
        self.__edad = edad
        self.__nacionalidad = nacionalidad
        self.__profesion = profesion
        self.__cantidad = cantidad
        
    @property
    def edad(self):
        return self.__edad
    
    @edad.setter
    def edad(self, edad):
        self.__edad = edad
    
    @property
    def nacionalidad(self):
        return self.__nacionalidad
    
    @nacionalidad.setter
    def nacionalidad(self, nacionalidad):
        self.__nacionalidad = nacionalidad
    
    @property
    def cantidad(self):
        return self.__cantidad
    
    @cantidad.setter
    def cantidad(self, cantidad):
        self.__cantidad = cantidad
        
    
    def calcularCostos(self):
        pass
        
    def __str__(self):
        return f'Edad: {self.__edad} - Nacionalidad: {self.__nacionalidad} - Profesion: {self.__profesion} - Cantidad de personas: {self.__cantidad}'
        


    
    

class Datos(Migrar):
    def __init__(self, edad, nacionalidad, profesion, cantidad, biometrico, dinero):
        self.__biometrico = biometrico
        self.__dinero = dinero
        
        super().__init__(edad, nacionalidad, profesion, cantidad)
        

    @property
    def biometrico(self):
        return self.__biometrico
    
    @biometrico.setter
    def biometrico(self, biometrico):
        self.__biometrico = biometrico    
    
    @property
    def dinero(self):
        return self.__dinero
    
    @dinero.setter
    def dinero(self, dinero):
        self.__dinero = dinero
        
    def calcularCostos(self, cantidad):
        return self.__dinero * cantidad

    def __str__(self) -> str:
        return f'biometricos: {self.__biometrico} - dinero: {self.__dinero} {super().__str__()}'
        

dato1 = Datos(20, 'Chilena', 'Ingeniero De Software', 5, 4, 10000)

print(dato1.calcularCostos(5))



