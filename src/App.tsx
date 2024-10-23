import "./App.css";
import Counter from "./components/Counter";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <div>
        <div>
          <WelcomeMessage />
        </div>
        <div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
