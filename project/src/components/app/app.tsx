import MainPage from '../../pages/main-page/main-page';
import Page404 from '../../pages/page404/page404';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

type AppScreenProps = {
  numberOffers: number;
}

function App({numberOffers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage numberOffers={numberOffers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/" element={<Offer />}>
          <Route path=":id" element={<Offer />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
