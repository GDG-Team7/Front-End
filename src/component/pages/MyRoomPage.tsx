import React, {useMemo} from 'react';
import MyRoomTemplate from '../templates/MyRoomTemplate';

const MyRoomPage = () => {
  const isAdmin = useMemo(() => {
    return true;
  }, []);

  return <MyRoomTemplate isAdmin={isAdmin} />;
};

export default MyRoomPage;
