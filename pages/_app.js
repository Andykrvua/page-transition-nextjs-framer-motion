import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="p-10 font-latoBold f-full h-full">
      <AnimatePresence
        initial={false}
        // mode={"wait"}
      >
        <Navbar />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
