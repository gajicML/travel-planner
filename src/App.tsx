import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './layouts/navigation/Navigation';
import Home from './pages/home';
import TripDetails from './pages/trip-details';
import TripPlanner from './pages/trip-planner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<TripPlanner />} />
            <Route path="/trips/:id" element={<TripDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
