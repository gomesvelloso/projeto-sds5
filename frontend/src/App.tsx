import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <div>
        <div className="container">
          <h1 className="text-primary">Olá Mundo</h1>
          <DataTable/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
