import Comments from './components/Comments';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Manage from './components/Manage';
import Simplify from './components/Simplify';


function App() {
  return (
    <div className="mx-auto font-serif overflow-x-hidden">
      <Header />
      <Main />
      <Manage />
      <Comments />
      <Simplify />
      <Footer />
    </div>
  );
}
export default App;
