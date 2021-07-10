import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../rootReducer';
import MainTemplate from '../templates/MainTemplate';

const MainPage = () => {
  const _user = useSelector((state: RootState) => state.user);

  console.log('user store:', _user);

  return <MainTemplate />;
};

export default MainPage;
