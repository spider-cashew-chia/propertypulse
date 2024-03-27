import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse',
  description: 'Find you dream home rental',
};

function MainLayout({ children }) {
  return (
    <html lang='en-GB'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default MainLayout;
