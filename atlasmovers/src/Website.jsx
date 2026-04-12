import Loader from "./pages/Loader";
import { useState , useEffect } from "react";
import App from "./App";
export default function Website(){
    const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => setLoading(false), 2000); // replace with API or real load
}, []);

return loading ? <Loader /> : <App />;

}