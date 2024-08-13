import Nav from "./components/Nav";
import BookImage from "./assets/book-fade.png";
import WalletImage from "./assets/wallet-fade.png";
import WalletBookImage from "./assets/wallet-book.png";

function App() {
  return (
    <>
      <Nav />
      <div>
        <img src={BookImage} alt="" />
        <img src={WalletImage} alt="" />
        <img src={WalletBookImage} alt="" />
      </div>
    </>
  );
}

export default App;
