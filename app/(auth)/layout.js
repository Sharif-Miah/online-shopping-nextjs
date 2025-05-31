import localFont from 'next/font/local';
import '../globals.css';
import Navbar from '@/components/sheard/Navbar';
import Footer from '@/components/sheard/Footer';
import { dbConnect } from '@/services/mongo';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Online Shopping',
  description: 'Online Shopping Platform Here.',
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang='en'>
      <body className={` antialiased`}>
        <div>
          <Navbar sidemenu={false} />
          {children}
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
