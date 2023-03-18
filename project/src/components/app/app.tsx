import MainPage from '../../pages/main-page/main-page';
import Page404 from '../../pages/page404/page404';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

type AppScreenProps = {
  numberOffers: number;
  offers: Offer[];
  reviews: Review[];
}

function App({numberOffers, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage numberOffers={numberOffers} offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/" element={<Property offers={offers} reviews={reviews} />}>
          <Route path=":id" element={<Property offers={offers} reviews={reviews} />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
