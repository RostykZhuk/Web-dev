import { useSelector } from 'react-redux';

function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);
  return {
    isAuth: !!email, //convert to boolean
    email,
    token,
    id,
  };
}

export default useAuth;
