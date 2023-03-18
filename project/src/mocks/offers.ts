import { Offer } from '../types/offers';

export const offers: Offer[] =
  [
    {
      offersImg: [
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg'
      ],
      isPremium: false,
      title: 'Beautiful &amp; luxurious studio at great location',
      rating: '40%',
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
      price: 120,
      goods: [
        'Wi-Fi',
        'Washing machine',
        'Towels',
        'Heating',
        'Coffee machine',
        'Baby seat',
        'Kitchen',
        'Dishwasher',
        'Cabel TV',
        'Fridge'
      ],
      host: {
        avatarImg: 'img/avatar-max.jpg',
        isPro: true,
        name: 'Angelina'
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      id: 1
    },
    {
      offersImg: [
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg'
      ],
      isPremium: true,
      title: 'Beautiful &amp; luxurious studio at great location',
      rating: '30%',
      type: 'Apartment',
      bedrooms: 2,
      maxAdults: 2,
      price: 90,
      goods: [
        'Wi-Fi',
        'Washing machine',
        'Towels',
        'Heating',
      ],
      host: {
        avatarImg: 'img/avatar-angelina.jpg',
        isPro: false,
        name: 'Mark'
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      id: 2
    },
    {
      offersImg: [
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg'
      ],
      isPremium: false,
      title: 'Beautiful &amp; luxurious studio at great location',
      rating: '40%',
      type: 'Apartment',
      bedrooms: 5,
      maxAdults: 5,
      price: 170,
      goods: [
        'Wi-Fi',
        'Washing machine',
        'Towels',
        'Heating',
        'Coffee machine',
        'Baby seat',
        'Kitchen',
        'Dishwasher',
        'Cabel TV',
        'Fridge'
      ],
      host: {
        avatarImg: 'img/avatar-angelina.jpg',
        isPro: true,
        name: 'Jane'
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      id: 3
    },
    {
      offersImg: [
        'img/room.jpg',
        'img/apartment-01.jpg',
        'img/apartment-02.jpg',
        'img/apartment-03.jpg',
        'img/studio-01.jpg',
        'img/apartment-01.jpg'
      ],
      isPremium: false,
      title: 'Beautiful &amp; luxurious studio at great location',
      rating: '85%',
      type: 'house',
      bedrooms: 2,
      maxAdults: 3,
      price: 90,
      goods: [
        'Wi-Fi',
        'Washing machine',
        'Towels',
      ],
      host: {
        avatarImg: 'img/avatar-angelina.jpg',
        isPro: false,
        name: 'John'
      },
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      id: 4
    }
  ];
