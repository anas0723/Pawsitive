import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export const metadata = {
  title: "Pawsative-Change",
  description: "Pawsitive Change - Helping Animals in Need",
  icons: {
    icon: "/favicon.png",
  },
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
  