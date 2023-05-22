// Next.js
import Head from 'next/head';
// Components
import { Navbar } from '../ui';


export const MainLayout = ({ title = 'Custom Title', pageDescription = '', children }) => {
  return (
    <>
      <Head>
        <title>Labels | { title }</title>
        <link rel='icon' href='https://res.cloudinary.com/newflare/image/upload/v1684787688/logo_lcorag.png' />
        <meta name='description' content={ pageDescription } />
      </Head>

      <nav>
        { /* Navbar */ }
        <Navbar />
      </nav>

      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px'
        }}
      >
        { children }
      </main>

      <footer>
      </footer>
    </>
  );
}