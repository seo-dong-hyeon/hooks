export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
  
    const handleChange = () => {
      if(typeof onChange === 'function'){
        onchange(navigator.onLine);
      }
      setStatus(navigator.onLine);
      console.log("change");
    }
  
    useEffect(() => {
      window.addEventListener("online",handleChange);
      window.addEventListener("offline",handleChange);
  
      return () => {
        window.removeEventListener("online",handleChange);
        window.removeEventListener("offline",handleChange);
  
      }
    }, []);
  
    return status;
}
  
  /*const App = () => {
    const handleNetworkChange = onLine => {
      console.log(onLine ? "online!" : "offline!");
    }
    const onLine = useNetwork(handleNetworkChange);
  
    return (
      <div className="App">
        <h1>{onLine ? "online!!!" : "offline!!!"}</h1>
      </div>
    );
  };*/