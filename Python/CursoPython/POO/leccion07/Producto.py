class Producto:
    contador_productos = 0
    
    def __init__(self, nombre, precio):
        Producto.contador_productos += 1
        self.__id_producto = Producto.contador_productos
        self.__nombre = nombre
        self.__precio = precio
    
    @property 
    def precio(self):
        return self.__precio
    
    
    def __str__(self):
        return f'Id producto: {self.__id_producto} - Nombre: {self.__nombre} - Precio: {self.__precio}'
    
    
if __name__ == '__main__':
    producto1 =Producto('Camisa', 100.00)
    producto2 = Producto('Pantalon', 150.00)

    print(producto1, producto2)        