import { HomePage } from "./pages/homePage"
import { Routes,Route } from "react-router-dom"


export const App =()=> {
  return (
    <Routes>
      <Route path="/profile_v2" element={<HomePage />} />
    </Routes>
  );
}

export default App;