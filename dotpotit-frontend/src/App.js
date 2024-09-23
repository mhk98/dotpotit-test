import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className='px-10'>
      <Provider store={store}>
      <Navbar/>
      <Router>
      <Routes>
        {/* <Route path="/" element={<AllDrawings />} />
        <Route path="/drawing/:id" element={<DrawingDetail />} /> */}
      </Routes>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
