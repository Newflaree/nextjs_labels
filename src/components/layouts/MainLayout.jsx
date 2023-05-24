// Next.js
import Head from 'next/head';
// Components
import { Footer, Navbar, SideMenu, WSPPBtn } from '../ui';


export const MainLayout = ({ title = 'Custom Title', pageDescription = '', children }) => {
  return (
    <>
      <Head>
        <title>Labels | { title }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO } />
        <meta name='description' content={ pageDescription } />
      </Head>

      <WSPPBtn />
      <nav>
        { /* Navbar */ }
        <Navbar />
      </nav>

      <SideMenu />

      <main
        style={{
          margin: 'auto',
          marginTop: '35px',
          maxWidth: '1440px',
          padding: '0px'
        }}
      >
        { children }
      </main>

      <Footer />
    </>
  );
}
