import React from 'react';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import request from '../../plugins/axios';
import {RootState} from '../../rootReducer';
import {updateUser} from '../../slices/user';
import {User} from '../../types/user';
import SignUpTemplate from '../templates/SignUpTemplate';
import {AccessToken} from './CallbackPage';

const SignUpPage = ({history}: RouteComponentProps) => {
  const dispatch = useDispatch();

  const {github_id, email}: User = useSelector(
    (state: RootState) => state.user,
  );

  const onClickSignUp = useCallback(
    async (annual: string, ageRange: string) => {
      const userInfo: User = {
        github_id: github_id,
        email: email,
        age: ageRange,
        annual: annual,
      };

      try {
        const {data} = await request.post<AccessToken>('/signin', userInfo);

        dispatch(
          updateUser({
            accessToken: data.accessToken,
          }),
        ); // Update accesssToken

        history.push('/');
      } catch (error) {
        console.error('user register error!!');
      }
    },
    [history, github_id, email, dispatch],
  );

  return <SignUpTemplate onClick={onClickSignUp} />;
};

export default SignUpPage;
