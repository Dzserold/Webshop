import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Webshop",
  desciption: "Buy products here",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
