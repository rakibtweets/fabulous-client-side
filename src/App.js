import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Collection from './Pages/Collection/Collection/Collection';
import ProductDetails from './Pages/Collection/Detail/ProductDetails';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/collections"
              element={
                <>
                  <Navigation />
                  <Collection />
                </>
              }
            />
            <Route
              path="/productDetails/:id"
              element={
                <>
                  <Navigation />
                  <ProductDetails />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
              <Route path="/dashboard/addProducts" element={<AddProducts />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
