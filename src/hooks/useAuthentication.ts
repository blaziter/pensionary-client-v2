import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@app/hooks';
import { clientApi } from '@features/api/api';
import { setLogged } from '@features/slices/AuthSlice';

export const useAuthentication = (): any => {
  const useApi = new clientApi();
  const logged = useAppSelector(state => state.auth.isLogged);
  const [auth, setAuth] = useState(logged);
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    useApi.auth.verify().then(res => {
      setUsername(res.data.username);
      setAuth(res.status === 200);
    });
  });

  const login = async (username: string, password: string) => {
    useApi.auth.login({ payload: { username, password } }).then(res => {
      if (res.status === 200) {
        dispatch(setLogged(true));
        setAuth(true);
      }

      return res.status === 200 ? true : false;
    });
  };

  const logOut = async () => {
    useApi.auth.logout().then(res => {
      if (res.status === 200) {
        dispatch(setLogged(false));
        setAuth(false);
      }
    });
  };

  const setCookie = () => {
    setAuth(true);
  };

  return { auth, username, login, logOut, setCookie };
};
