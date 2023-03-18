import { Offer } from '../../types/offers';
import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
}

export default function CardList({offers}: CardListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offerItem: Offer) => (
          <Card
            key={offerItem.id} offers={offerItem}
          />)
        )
      }
    </div>
  );
}
