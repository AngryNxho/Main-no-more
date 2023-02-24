from moves import get_move
from math import sqrt
import random

class pokemon:
  tipo = "NN"
  hp = 0
  att = 0
  deff = 0
  Satt = 0
  Sdef = 0
  spd = 0
  
  def __init__(self, _tipo, _hp, _att,_deff,_Satt,_Sdef,_spd):
    self.tipo = _tipo
    self.hp = _hp
    self.att = _att
    self.deff = _deff
    self.Satt = _Satt
    self.Sdef = _Sdef
    self.spd = _spd
    
  def imprimir_atributos(self):
    
    print("- HP = ", self.hp)
    print("- Ataque = ", self.att)
    print("- Defensa =  ", self.deff)
    print("- Ataque especial =  ", self.Satt)
    print("- Defensa especial =  ", self.Sdef)
    print("- Velocidad =  ", self.spd)

    print()

  def cambio_de_stats(self):
    self.hp=(((((self.hp+31)*2+((sqrt(250))/4))*50)/100))+50+10
    self.att=(((((self.att+31)*2+((sqrt(250))/4))*50)/100))+5
    self.deff=(((((self.deff+31)*2+((sqrt(250))/4))*50)/100))+5
    self.Satt=(((((self.Satt+31)*2+((sqrt(250))/4))*50)/100))+5
    self.Sdef=((((self.Sdef+31)*2+(sqrt(250)/4))*50)/100)+5
    self.spd=((((self.spd+31)*2+(sqrt(250)/4))*50)/100)+5

def Retorno_efectivo(Tipo_ataque, Tipo_receptor):
    Matriz = []
    archivo = open("tabla_efectividad.csv", "r")
    v = archivo.readlines()
    for i in v:
        valor= i.strip().split(",")
        Matriz.append(valor)
    contador = 0
    for i in Matriz[0]:
        if i == Tipo_receptor:
            posicion= contador
        else: 
            contador += 1
    columna = 0
    for i in Matriz:
        if i[0] == Tipo_ataque:
            return(Matriz[columna][posicion])
           
        else:
            columna += 1

archivo = open("pokemon_data.csv","r")
pokedex=[]
for linea in archivo:
 
 poke = linea
 poke=poke.replace(",",";")
 poke=poke.strip().split(";")
 pokedex.append(poke)

print("Bienvenido al simulador")
x=0
while (x==0):
  nombre=input("Ingrese el nombre del primer Pokémon: ").lower()

  for Pokemon in pokedex:
    if Pokemon[0]==nombre:
      x=+1
      break



estadisticas=Pokemon

estadisticas.remove("")

poke1=pokemon(estadisticas[1],int(estadisticas[2]),int(estadisticas[3]),int(estadisticas[4]),int(estadisticas[5]),int(estadisticas[6]),int(estadisticas[7]))
moves_poke1=estadisticas[8:]

poke1.imprimir_atributos()

x=0
for i in moves_poke1:
  print(x," - ",i)
  x=x+1
print()
move=int(input("Seleccione un ataque a ejecutar: "))
Move=get_move(moves_poke1[move])
print("El ataque seleccionado es:  ",Move[0])
print("Poder de ataque es: ", Move[1])
print()
poke1.cambio_de_stats()
#
print(f"La Vida al nivel 50 de {estadisticas[0]}  es {poke1.hp}\n"
f"El Ataque al nivel 50 de {estadisticas[0]} es {poke1.att}\n"
f"La Defensa al nivel 50 de {estadisticas[0]} es {poke1.deff}\n"
f"El Ataque especial al nivel 50 de {estadisticas[0]} es {poke1.Satt}\n"
f"La Defensa especial al nivel 50 de {estadisticas[0]} es {poke1.Sdef}\n"
f"La Velocidad al nivel 50 de {estadisticas[0]} es {poke1.spd}\n")

y=0
while(y==0):
  Nombre=input("Ingrese el nombre a atacar Pokémon: ").lower()

  for Pokemon_def in pokedex:
    if Pokemon_def[0]==Nombre:
      y=+1
      break

estadisticas2=Pokemon_def

poke2=pokemon(estadisticas2[1],int(estadisticas2[2]),int(estadisticas2[3]),int(estadisticas2[4]),int(estadisticas2[5]),int(estadisticas2[6]),int(estadisticas2[7]))
poke2.cambio_de_stats()
if (poke1.tipo==Move[2]):
  stab=1.2
else:
  stab=1
efectividad = Retorno_efectivo(Move[2],poke2.tipo)

def Modifier(tipo,stab):
  decimal=random.uniform(0.85, 1)
  cal = float(tipo) * float(stab) * decimal *1
  return round(cal, 2)
def damage(poder,tipo_pokemon,stab,defensa_enemiga,ataque):
  nivel=50
  usar = Modifier(tipo_pokemon,stab)
  return ((((2*nivel)/5+2)*poder* ataque/defensa_enemiga)/50+2)*usar

if Move[3] == "special":
  atacar_pokemon_1 = damage(Move[1],efectividad,stab,poke2.Sdef,poke1.Satt)
elif Move[3] == "physical":
  atacar_pokemon_1 = damage(Move[1],efectividad,stab,poke2.deff,poke1.att)
elif Move[3] == "status":
  atacar_pokemon_1 = 0
  
''' print(atacar_pokemon_1)
print(Move[3]) 

'''
# 
vida=poke2.hp-atacar_pokemon_1
print(f"\nNombre del Pokémon seleccionado: {estadisticas2[0]}\n"
  f"\nEl hp al nivel 50 de absol es {poke2.hp}"
f"\nEl daño que realizó  {estadisticas[0]}  a  {estadisticas2[0]}  fue de: {atacar_pokemon_1}")
poke2.hp = vida

print(f"\n{estadisticas2[0]} quedó con un HP de: {poke2.hp}")