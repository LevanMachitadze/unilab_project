import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';
import PetsSection from './components/PetsSection';
import PetListPage from './components/PetListPage';
import Comertial from './components/Comertial';
import ProductsSection from './components/ProductsSection';
import AdoptionSection from './components/AdoptionSection';
import Footer from './components/Footer';
import SliderSection from './components/SliderSection';
import CountdownTimer from './components/CoutDownTimer';
import PetDetailPage from './components/PetDetailPage';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
import Welcome from './sign/Welcome';
import ForgetPassword from './sign/ForgetPassword';
import PasswordSent from './sign/PasswordSent';
import Register from './sign/Register';
import ContactUs from './sign/ContactUs';
import Chat from './sign/Chat';

function Layout() {
  const location = useLocation();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/db.json')
      .then((response) => {
        setPets(response.data.pets);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching pet data: ', error);
        setLoading(false);
      });
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      {isHomePage && (
        <>
          <Banner />
          <PetsSection />
          <Comertial />
          <ProductsSection />
          <AdoptionSection />
          <SliderSection />
          <CountdownTimer />
        </>
      )}

      {loading ? (
        <div>Loading pets...</div>
      ) : (
        <Routes>
          <Route path='/pets' element={<PetListPage pets={pets} />} />
          <Route path='/pets/:id' element={<PetDetailPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/welcome/:username' element={<Welcome />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/PasswordSent' element={<PasswordSent />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='*' element={<div>404 Page Not Found</div>} />
        </Routes>
      )}

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
