import { Routes, Route, Navigate } from "react-router-dom";
import HighlightFeature from "./pages/HighlightFeature";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/highlight-feature" replace />} />
      <Route path="/highlight-feature" element={<HighlightFeature />} />
    </Routes>
  );
}
