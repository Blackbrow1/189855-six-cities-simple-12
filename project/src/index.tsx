import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  NumberOffers: 780,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App numberOffers={Setting.NumberOffers} offers={offers} reviews={reviews}/>
  </React.StrictMode>,
);
