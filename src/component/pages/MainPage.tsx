import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../rootReducer';
import Header from '../molecules/Header';

const MainPage = () => {
  const _user = useSelector((state: RootState) => state.user);

  console.log('user store:', _user);

  return (
    <div>
      <Header />
      <div>MainPage</div>
    </div>
  );
};

export default MainPage;
