import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './layouts/navigation/Navigation';
import Home from './pages/home';
import TripDetails from './pages/trip-details';
import TripPlanner from './pages/trip-planner';
import MainLayout from './layouts/main-layout/MainLayout';

function App() {
  return (
    <Router>
      <Navigation />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<TripPlanner />} />
          <Route path="/trips/:id" element={<TripDetails />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
