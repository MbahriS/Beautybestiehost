import React from 'react';
import { MainLayout } from 'layout';
import { WishlistCard } from 'components/Wishlist/WishlistCard';
import { Dropdown } from 'components/DropDown';
// import { EmptyStateWishlist } from '../components/Wishlist/EmptyStateWishlist';

import '../styles/Wishlist.css';

interface Option {
  label: string;
  value: string;
}

const sortby: Option[] = [
  {label: 'All', value: 'all'},
  {label: 'Date (Latest)', value: 'date-latest'}, 
  {label: 'Date (Oldest)', value: 'date-oldest'}
];

const Wishlist: React.FC = () => {
  return (
    <MainLayout>
        {/* <EmptyStateWishlist/> */}
      <div className='wishlist-wrapper'>
        <section className="wishlist__kontainer">
          <h1 className="wishlist__title">Wishlist</h1>
          <hr/>
        </section>
        <div className='wishlist__all'>
          <div className='wishlist__kontainer2'>
            <p className='wishlist__total'>Total : .. Wishlist</p>
          </div>
          <div className='wishlist__sortby'>
            <p className='wishlist__sortby-text'>Sort By : </p>
            <Dropdown options={sortby} /> 
          </div>
          <WishlistCard/>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wishlist;
