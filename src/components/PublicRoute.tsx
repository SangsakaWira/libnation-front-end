import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

const PublicRoute = ({ children }: Props) => {
//   const router = useRouter();

//   useEffect(() => {
//     // check if user is authenticated
//     // const isAuthenticated = true; // replace with your authentication logic

//     // if (isAuthenticated) {
//     //   router.push('/home'); // redirect to dashboard page if authenticated
//     // }
//   }, [router]);

  return <>{children}</>;
};

export default PublicRoute;