import { Header } from "./Header/header";
import { Nav } from "./Nav/nav";

import { Footer } from "./Footer/footer";
import { Main } from "./Main/main";

function App() {
  return (
    <>
      <Header
        title={"Bankietowy Zakątek"}
      />
      <Nav />

      <Main />
      
      <Footer
        content={"strona stworzona w React.js przez Konrad Tusiński"}
      />
    </>

  );

}

export default App;
