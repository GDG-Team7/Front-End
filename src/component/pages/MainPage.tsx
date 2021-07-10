import React from 'react';
import {useEffect} from 'react';
import request from '../../plugins/axios';

const MainPage = () => {
  useEffect(() => {
    const getTest = () => {
      request
        .get('https://run.mocky.io/v3/7ec142c5-08c4-4104-a87b-a1bc3e7e6830')
        .then(({data}) => {
          console.log(data);
        });
    };

    getTest();
  }, []);

  return <div>MainPage</div>;
};

export default MainPage;
