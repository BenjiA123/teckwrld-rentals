import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import AppLayout from '../components/app-layout'


import { setAuthState } from "../store/authSlice";
import { AuthProvider } from '../contexts/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
     </AuthProvider>
      )
}

export default wrapper.withRedux(MyApp)

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setAuthState(false)); 
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);