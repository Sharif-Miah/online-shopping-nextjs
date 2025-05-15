import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/sheard/Navbar';
import Footer from '@/components/sheard/Footer';
import { dbConnect } from '@/services/mongo';
import AuthProvider from './provider/AuthProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Online Shopping',
  description: 'Online Shopping Platform Here.',
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
