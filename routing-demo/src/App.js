import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourite";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavouritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//Route define different paths and url of the page which should be loaded for these different paths
//path is url after domain after localhost:3000 or in real my-page.com
//switch component tell that only one of these should be active
//it start looking for match once got it will stop so so after matching / it won't go further so we should mention accordingly
//for this we can also use exact instead
