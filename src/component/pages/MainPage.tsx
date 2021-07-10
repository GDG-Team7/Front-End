import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../rootReducer';

const MainPage = () => {
  const _user = useSelector((state: RootState) => state.user);

  console.log('user store:', _user);

  return <div>MainPage</div>;
};

export default MainPage;
