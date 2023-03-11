
import { Counter } from './features/counter/Counter';
import Header from './components/header';
import Footer from './components/footer';
import DataFetching from './components/dataFetching';

function App() {
  return (
   <>
     <Header/>
     <p>Learn react testing library and jest

     </p>
     <Counter/>
     <DataFetching/>
     <Footer/>
   </>
  );
}

export default App;
