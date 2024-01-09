import { useState, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdPushPin } from "react-icons/md";

export default function StickyNote({
  onClose,
  noteNumber,
  onDrag,
  onDragEnd,
  zIndex,
}) {
  const [allowMove, setAllowMove] = useState(false);
  const [pin, setPin] = useState(false);
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleEditClick = () => {
    textAreaRef.current.setSelectionRange(0, 0);
    textAreaRef.current.focus();
  };
  const stickyNoteRef = useRef();

  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  function handleMouseDown(e) {
    if (!pin) {
      setAllowMove(true);

      //getBoundingClientRect will return dimensions
      //   {
      //     "x": 102,
      //     "y": 145,
      //     "width": 300,
      //     "height": 339.3999938964844,
      //     "top": 145,
      //     "right": 402,
      //     "bottom": 484.3999938964844,
      //     "left": 102
      //   }

      const dimensions = stickyNoteRef.current.getBoundingClientRect();
      console.log({ dimensions });
      setDx(e.clientX - dimensions.x);
      setDy(e.clientY - dimensions.y);

      onDrag(noteNumber);
    }
  }

  function handleMouseMove(e) {
    if (allowMove && !pin) {
      const x = e.clientX - dx;
      const y = e.clientY - dy;

      const maxX =
        document.body.clientWidth - stickyNoteRef.current.offsetWidth;

      const newX = Math.min(Math.max(x, 0), maxX);

      stickyNoteRef.current.style.left = newX + "px";
      stickyNoteRef.current.style.top = y + "px";
    }
  }

  function handleMouseUp() {
    if (!pin) {
      setAllowMove(false);
      onDragEnd();
    }
  }

  return (
    <div
      className="sticky-note"
      ref={stickyNoteRef}
      style={{ zIndex: allowMove ? "1" : zIndex + 1 }}
    >
      <div
        className="sticky-note-header"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="close" onClick={onClose}>
          <RxCross1 />
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <footer className="sticky-note-footer">
        {pin ? <div>Pinned</div> : <div></div>}
        <div className="sticky-note-footer-btn-container">
          <div
            className="stick-note-pin-container"
            onClick={() => {
              setPin(!pin);
              stickyNoteRef.current.style.zIndex = "1000000";
            }}
          >
            <MdPushPin
              className="stick-note-pin-btn"
              style={{ transform: pin ? "rotate(0deg)" : "" }}
            />
          </div>
          <button className="stick-note-edit-btn" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      </footer>
    </div>
  );
}
