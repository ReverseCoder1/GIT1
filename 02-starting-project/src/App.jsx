import Player from "./components/Player.jsx";
import Timerchallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timerchallenge title="easy" targetTime={1} />
        <Timerchallenge title="medium" targetTime={5} />
        <Timerchallenge title="hard" targetTime={10} />
        <Timerchallenge title="impossible" targetTime={60} />
      </div>
    </>
  );
}

export default App;
