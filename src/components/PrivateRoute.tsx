import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    
    const isAuthenticated = true; 

    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;