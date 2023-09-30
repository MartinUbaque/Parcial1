# Parcial1

Al ejecutar el parcial se pide inicialmente que se dijite el email del usuario.
El botón de confirmar está inhabilitado hasta que el estado del mail sea aceptado. El estado del mail será aceptado una vez este sea escrito en un formato correcto. Al igual que el botón,
hay también un mensaje de error que explicará por qué el botón está desactivado, diciendo que "El mail debe estar en un formato correcto". Una vez el mail esté en un formato correcto,
el mensaje desaparecerá y el botón estará habilitado. Esto ocurirá en tiempo real.

Una vez se presiona el botón, se muestra el mail ingresado como título y se pide al usuario que escriba la contraseña. Nuevamente se utiliza el mismo sistema para el mensaje de error y el
botón, solo que esta vez se pide al usuario que escriba una contraseña de más de 5 caracteres. Una vez se cumple esto, desaparece el mensaje y se habilita el botón.

Tanto la vista de mail como la de contraseña hacen parte del mismo componente "Login-mail". Para este componente, se utilizaron tres useStates: Uno para los valores del formulario 
(mail y contraseña), otro para validar el estado de estos valores y otro para ver si el mail fue confirmado, con el fin de cambiar la vista. Para que los errores y el botón se actualizaran
en tiempo real, tanto el mail como la contraseña tienen funciones asociadas de handleChange, las cuales asocian el valor actual al estado y verifican la validez para cambiar el estado de 
validez. Una vez se verifica el mail se utilizan renderizados condicionales para manejar el cambio de vista. Tanto la sección de mail como la de contraseña cuentan con renderizados condicionales
opuestos, es decir, si Mail no se ha confirmado, se renderizará mail y no contraseña, y si sí se ha confirmado, será lo opuesto. Así, se renderiza el mail como el título de la vista de 
contraseña y se pueden imprimir ambos como un JSON como fue especificado en el parcial para reemplazar el POST de Mockaroo. Una vez se ha confirmado que la contraseña es correcta y se 
presiona confirmar, se utiliza routing para dirijirse al componente de Carros, el cuál es la lista de carros. Los elementos de React utilizados en este componente fueron: useState, Bootstrap,
Router Dom y Intl, ya que todas las strings estáticas son traducibles al idioma del navegador.

En el componente de Carros, hay un estado de los datos de los carros y uno de la cantidad de cartas por fila, la cual solo cambia con el fin de ajustarse al cambio de la pantalla.
Hay una función para calcular esta cantidad de cartas basandose en el tamaño de la pantalla, esta se ejecuta con un useEffect, ya que requiere de una actualización post rendering para ello.
Para traer los datos, se usa el archivo JSON entregado en clase. Esto ya que el fetch me estaba lanzando errores con el link de github. Para desplegar las cartas d elos carros, se usa un 
map basado en el modelo del carro y se muestra toda la información requerida en el enunciado por cada carta. Los elementos de react utilizados en este componente fueron Router Dom, pues se 
tenía la intención de que con routing se llevara al detalle de cada carro, pero no hubo suficiente tiempo.
