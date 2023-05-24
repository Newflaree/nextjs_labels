// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';
// Themes
import { lightTheme } from '@/themes';
import '@/styles/globals.css'
import {UIProvider} from '@/context';

export default function App({ Component, pageProps }) {
  return (
    <UIProvider>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}
