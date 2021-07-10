import qs from 'qs';
import {useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import request from '../../plugins/axios';

interface AccessToken {
  accessToken: string;
}

const CallbackPage = ({history, location}: RouteComponentProps) => {
  useEffect(() => {
    async function getToken() {
      const {code} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const {
          data: {accessToken},
        } = await request.get<AccessToken>(
          `/githubAccessToken?authorizationCode=${code}`,
        );

        localStorage.setItem('accessToken', accessToken);
        /**
         * 1. GitHub Api call to get user data
         * 2. Post to our api for saving user data
         * 3. history push
         */
        history.push('/main');
      } catch (error) {
        history.push('/error');
      }
    }

    getToken();
  }, [location, history]);

  return null;
};

export default CallbackPage;
