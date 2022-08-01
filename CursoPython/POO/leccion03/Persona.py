class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def __str__(self):
        return f"Nombre: {self.nombre}, Edad: {self.edad}"
    
    
class Empleado(Persona):
    def __init__(self, nombre, edad, sueldo):
        self.sueldo = sueldo
        super().__init__(nombre, edad)
    
    def __str__(self):
        return f"Empleado: Sueldo: {self.sueldo} {super().__str__()}"
        
print(Empleado("Pedro", 39, 5000))