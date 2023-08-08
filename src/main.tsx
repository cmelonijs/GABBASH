import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AboutUs.tsx";
import Layout from "./components/layout/Layout.tsx";
import Events from "./pages/events/Events.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/coming-next" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);
