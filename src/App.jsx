import "./App.css";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
      <Footer />
    </>
  );
}

export default App;
