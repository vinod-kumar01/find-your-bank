import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBanksContainer from "./Containers/AllBanksContainer";
import AppContainer from "./Containers/AppContainer";
import BankDetailsContainer from "./Containers/BankDetailsContainer";
import FavoriteBanksContainer from "./Containers/FavoriteBanksContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route path="all-banks" element={<AllBanksContainer />} />
          <Route path="favorites" element={<FavoriteBanksContainer />} />
          <Route
            path="bank-details/:bank_id"
            element={<BankDetailsContainer />}
          />
        </Route>
        <Route path="*" element={"No mathes, please change the URL"} />
      </Routes>
    </Router>
  );
}

export default App;
