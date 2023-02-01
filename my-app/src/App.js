import Superheroes from "./components/Superheroes.page";
import RQ from "./components/RQ.page";
import Home from "./components/Home.page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/super-heroes" component={Superheroes} />
            <Route path="/rq-heroes" component={RQ} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
