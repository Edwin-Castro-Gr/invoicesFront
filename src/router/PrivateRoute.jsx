import { Navigate } from 'react-router-dom';
import { useTokenContext } from '../utils/tokenContext';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const token=useTokenContext();
	return token!=='' ? children : <Navigate to='/login' />;
};