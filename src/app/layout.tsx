import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Lora } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar'
import theme from '../theme';
import "./globals.css"

const lora = Lora({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "The Wizard Store",
  description: "A shop for wizards I guess",
};
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar/>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
