
import './App.css';
import {Routes,Route}from "react-router-dom";
import{Home}from './components/Home'
import {SearchPage}from './components/SearchPage'
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path= "/"element={<Home/>}></Route>
     <Route path='/search' element={<SearchPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
