# angaStoreUS
Tienda de indumentaria de Anga USA

Tengo definidos los compoonentes
ItemListContainer
ItemList
Item
ItemDetailContainer
ItemDetail
Cart
NavBar
CartWidget
SendOrder
Footer

El funcionamiento de los componentes, las llamadas, el contexto, todo está desarrollado según lo que vimos en las clases.
Use el patron de componentec container y componente de presentación, de manera de tener la lógica en los containers y la presentación separada.
Realice la conexion al servicio Firebase. Usando FireStore, para leer los 10 articulos almacenados. Tambien para guardar las ordenes que se generan en el checkout, leyendo los campos del formulario y enviando
los datos del carrito. Una vez presionado "submit", vacio el carrito.

Las imagenes las guarde en Firestore en el Storage y estoy tomando los links desde ahi.
