import localFont from 'next/font/local';
import '../globals.css';
import Navbar from '@/components/sheard/Navbar';
import Footer from '@/components/sheard/Footer';
import { dbConnect } from '@/services/mongo';
import AuthProvider from '../provider/AuthProvider';

export const metadata = {
  title: 'Online Shopping',
  description: 'Online Shopping Platform Here.',
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang='en'>
      <body className={` antialiased`}>
        <AuthProvider>
          <div>
            <Navbar sidemenu={false} />
            {children}
            <Footer />
            <div id='modal-root-content'> </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
