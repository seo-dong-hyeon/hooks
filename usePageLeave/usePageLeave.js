export const usePageLeave = (onBefore) => {
    const handle = event => {
      const { clientY } = event;
      if(clientY <= 0){
        onBefore();
      }
    }
    useEffect(() => {
      document.addEventListener("mouseleave",handle);
      return () => {
        document.removeEventListener("mouseleave",handle);
      }
    },[]);
  
    if(typeof onBefore !== 'function'){
      return;
    }
  }
  
  const App = () => {
    const begForLife = () => console.log("don't leave");
    usePageLeave(begForLife);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
};