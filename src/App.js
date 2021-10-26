import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route path="/roadshow/admin">
                        <AdminPage />
                    </Route>
                    <Route path="/roadshow/">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}




export default App;
