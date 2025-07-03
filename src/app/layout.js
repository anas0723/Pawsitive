import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export const metadata = {
  title: "Pawsative ",
  description: "Empowering Shelters, Transforming Lives - Pawsitive ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
       <Header />    
        {children}
            <Footer />
      </body>
    </html>
  );
}
  