import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./pages/cards/Cards";
import Financiamento from "./pages/financiamento/Financiamento";
import Contatos from "./pages/contatos/Contatos";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/financiamento" element={<Financiamento />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
