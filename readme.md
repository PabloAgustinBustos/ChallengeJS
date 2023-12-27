# Desafío técnico (Javascript)
> Herramientas usadas:
> - Javascript vanilla
> - Node v20.10.0
> - NPM v10.2.3
> - Vitest v1.1.0
# Instalación y ejecución
 1. git clone https://github.com/PabloAgustinBustos/ChallengeJS.git 
 2. npm i
 3. npm run test

# Primera solución
Ya que en la primera solución se ejecuta en una maquina con infinitos recursos y sin importar el tiempo de ejecución, de elaboró un código típico que recorre el array dos veces en donde toma como valores iniciales el primer elemento y el siguiente. Luego se comprueba si la suma es igual al resultado. Al ser la solución así, tiene complejidad O(n^2).

# Segunda solución
Para evitar usar muchos recursos se usará una estructura Set de javascript para guardar los números que sean potenciales complementos a otros. Una alternativa puede ser usar un objeto.
Dentro del ciclo se calcula por cada número el complemento del mismo y en caso de que exista en la cache, se retorna true. En caso contrario, se guarda el número evaluado ya que puede ser un potencial complemento de otro número. 
Adicionalmente se añade una condicional que comprueba si el número ya existe en la cache. Puede parecer redundante ya que la misma estructura Set evita guardar elementos repetidos, pero solo es redundante en el caso en que el resultado no sea divisible por dos. En el caso en el que si es divisible no es redundante, por lo tanto, se combinan con un AND las dos condiciones.
Esta solución tiene complejidad O(n)