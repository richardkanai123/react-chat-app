import Navbar from "./Components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import Chat from "./Components/Chat";

const style = {
  app: `mx-auto text-center max-w-[728px] items-center self-center`,
  wrapper: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-md rounded-sm relative border`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.app}>
      <section className={style.wrapper}>
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
