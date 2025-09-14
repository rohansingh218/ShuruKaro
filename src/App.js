import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title='ShuruKaro' aboutText='About Us' />
      <div className="container">
        <TextForm heading = "Enter the Text For Analyze !! " />
      </div>
      {/* <About/> */}
      <p class = 'container text-end'>~by Rohan Singh</p>
    </>
  );
}

export default App;
