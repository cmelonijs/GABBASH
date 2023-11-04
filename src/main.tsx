import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nfts from "./pages/nfts/Nfts.tsx";
import Layout from "./components/layout/Layout.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Creations from "./pages/creations/Creations.tsx";
import Vectors from "./pages/vectors/Vectors.tsx";
import Concepts from "./pages/concepts/Concepts.tsx";
import Detail from "./pages/detail/Detail.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nfts" element={<Nfts />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/nfts/vectors" element={<Vectors />} />
        <Route path="/nfts/vectors/:id" element={<Detail />} />
        <Route path="/nfts/concepts" element={<Concepts />} />
        <Route path="/nfts/concepts/:id" element={<Detail />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
);
