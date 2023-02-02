import Superheroes from "./components/Superheroes.page";
import RQ from "./components/RQ.page";
import Home from "./components/Home.page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroSingle from "./components/RQSuperHeroSingle";

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
            <Route exact path="/super-heroes" component={Superheroes} />
            <Route exact path="/rq-heroes" component={RQ} />
            <Route
              exact
              path="/rq-heroes/:heroId"
              component={RQSuperHeroSingle}
            />
          </Switch>
        </div>
      </Router>

      {/* dev tools of react query */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
