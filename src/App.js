import React from "react";
import Navegacao from './componentes/Nav';
import Inicio from './componentes/Inicio';
import Sobre from './componentes/Sobre';
import Habilidades from './componentes/Habilidades';
import Trabalhos from './componentes/Trabalho'; 
import Contato from './componentes/Contatos'; 




function App() {
  return (
    <div >
     <Navegacao/>
     <Inicio/>
     <Sobre />
     <Habilidades/>
     <Trabalhos/>
     <Contato/> 
    </div>
  );
}

export default App;
