import React, { useState } from 'react';
interface CardItem {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
}
const listCards: CardItem[] = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Large 4-room apartment with a beautiful terrace',
    price: '320 000€',
    location: 'Barcelona IX.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: '5i large design apartment with terrace',
    price: '280 000€',
    location: 'Madrid VI.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: '3-room apartment with a beautiful terrace',
    price: '350 000€',
    location: 'Madrid II. ',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1682685796467-89a6f149f07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Magnificent duplex in a private villa',
    price: '270 000€',
    location: 'Madrid III.',
  },
];
const EstateCard = () => {
  const [listCard, setListCard] = useState<CardItem[]>(listCards);
  return (
    <div className='flex items-center justify-center gap-5 mr-auto'>
      {listCard.map((list) => (
        <div key={list.id} className='w-[320px] h-[420px]'>
          <img src={list.image} alt='' />
          <h2 className='w-[313px] text-xl font-bold text-darkBlue mt-6'>
            {list.title}
          </h2>
          <div className='flex flex-col mt-5'>
            <span className='text-lg font-bold text-CTA_2'>{list.price}</span>
            <span className='text-lg text-darkBlue'>{list.location}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EstateCard;
