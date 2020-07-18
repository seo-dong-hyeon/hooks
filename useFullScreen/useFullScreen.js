export const useFullScreen = (callback) => {
  const runCb = isFull => {
    if(callback && typeof callback === 'function'){
      callback(isFull);
    }
  }

  const element = useRef();

  const triggerFull = () => {
    /* 호환성 */
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  }

  const exitFull = () => {
    /* 호환성 */
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };

  return {element, triggerFull, exitFull};
};

/*const App = () => {
  const onFullS = (isFull) => console.log(isFull ? "full" : "not full");
  const {element, triggerFull, exitFull} = useFullScreen(onFullS);

  return (
    <div className="App" style={{height: "1000vh"}}>
      <div ref={element}>
       <img ref={element} src={logo} alt="logo"></img>
       <button onClick={exitFull}>exit full screen</button>
      </div>
      <button onClick={triggerFull}>full screen</button>
    </div>
  );
};*/