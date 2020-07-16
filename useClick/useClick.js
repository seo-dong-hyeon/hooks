const useClick = (onClick) => {
    const element = useRef(); // getElementById
    useEffect(() => {
      if(element.current){
        element.current.addEventListener("click",onClick);
      }
      return () => { // componentWillUnMount
        if(element.current){
          element.current.removeEventListener("click",onClick);
        }
      }
    },[]); // no dependency -> componentDitMount때만 단 한번만 실행 -> 영원히 지속
          //  dependency -> update될때마다 event 추가
    
    if(typeof onClick !== 'function'){
      return;
    }
    return element;
}