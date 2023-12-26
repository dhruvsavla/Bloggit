// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Login from './Login'
import BlogDetails from './BlogDetails';
import BlogPost from './BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/details" element={<BlogDetails />} />
        </Route>
        <Route path = "/login" element = {<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
