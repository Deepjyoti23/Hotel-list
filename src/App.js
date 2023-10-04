import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PropertyList from "./components/PropertyList";
// import PropertyCard from "./components/PropertyCard";
import PropertyDetails from "./components/PropertyDetail";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Navigate replace to="property" />} />
      <Route path="property" element={<PropertyList />} />
      <Route path="property/:id" element={<PropertyDetails />} />
    </Routes>
    </BrowserRouter>
  )
}