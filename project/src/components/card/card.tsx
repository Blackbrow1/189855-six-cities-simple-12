/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import Premium from '../premium/premium';

type CardProps = {
  offers: Offer[];
}

export default function Card({offers}: CardProps) {
  return (
    <article className="cities__card place-card">
      {/* {offers.map((offerItem) => (
        offerItem.isPremium && <Premium key={offerItem.id} />
      ))} */}

      {offers.isPremium && <Premium />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offers.offersImg[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offers.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="offer">{offers.title}</Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}
