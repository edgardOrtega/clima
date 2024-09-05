#Proyecto clima

*Se inicia el proyecto con vite*

    npm create vite

*Se instalan las dependencias que utilizaremos*

    npm install
    npm i react-router-dom@6
    npm i @popperjs/core

*paso a paso del proyecto*

1. *se crea una carpeta en src llamada components que tendra todos los Componentes del proyecto*
2. *creacion del Componente Navbar* 
3. *se agrega en app.jsx el Componente Navbar*
4. se creo una carpeta de vistas llamada view al src

5. *Se inicia con enrutamiento desde lo exterior al interior iniciando por main.jsx que la etiqueta app lo envuelve BrowserRouter y se importa

ejemplo

```
<BrowserRouter>
    <App />
</BrowserRouter>
```
6. *agregar rutas en app con Routes y Route*

ejemplo

```
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/Santiago" element={<StgoPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
```

## recursos utilizados

API de [Openweather](https://home.openweathermap.org)






