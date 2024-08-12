import NavButton from "./components/NavButton";

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-12">
        <div className="mt-12 w-full">
          <div className="flex justify-between items-center flex-nowrap truncate">
            <p>13</p>
            <NavButton />
          </div>
          <hr className="w-full border-black " />
        </div>
      </div>
    </>
  );
}

export default App;
