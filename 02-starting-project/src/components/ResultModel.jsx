import { forwardRef ,useImperativeHandle , useRef} from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModel({result, targetTime , timeremaining ,onReset} , ref) {
  const dialog = useRef();

  const userlost = timeremaining <= 0;
  const formatedtimeremaining = (timeremaining / 1000).toFixed(2);
  const score = Math.round(100 * (1 - (formatedtimeremaining/(targetTime))));

  useImperativeHandle(ref , () => {
    return{
      open(){
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userlost && <h2>You lost</h2>}
      {!userlost && <h2>Your score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime}seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatedtimeremaining} seconds left.</strong>
      </p>
      <form  method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog> , document.getElementById('modal')
  );
}
)
export default ResultModal;


