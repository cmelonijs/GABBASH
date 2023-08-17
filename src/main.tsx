import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs.tsx";
import Layout from "./components/layout/Layout.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Creations from "./pages/creations/creations.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/creations" element={<Creations />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
