import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import Senha from "./pages/Senha";

function App() {
  return (
    <div className="App">
      <Header />
      <Login/>
      <Senha/>
      <ListarTarefa />
    </div>
  );
}

export default App;
