import React, { useState } from 'react';
import { SignInForm, SignUpForm } from './AuthForms';

// import { auth } from '../firebase';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Menu, X, Home } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">Zerra</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/rooms" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Rooms</Link>
            <Link to="#facilities" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Facilities</Link>
            <Link to="/offers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Offers</Link>
            <Link to="#wedding" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Wedding</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link to="#blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-black hover:text-gray-900 font-medium transition-colors"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={() => setShowSignUp(true)}
            >
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/rooms" className="text-gray-700 hover:text-blue-600 font-medium">Rooms</Link>
              <Link to="#facilities" className="text-gray-700 hover:text-blue-600 font-medium">Facilities</Link>
              <Link to="/offers" className="text-gray-700 hover:text-blue-600 font-medium">Offers</Link>
              <Link to="#wedding" className="text-gray-700 hover:text-blue-600 font-medium">Wedding</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link to="#blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <div className="flex flex-col space-y-2 pt-3">
                <button
                  className="text-gray-700 font-medium text-left"
                  onClick={() => setShowSignIn(true)}
                >
                  Sign In
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                  onClick={() => setShowSignUp(true)}
                >
                  Get Started
                </button>
      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-8 relative">
            <button onClick={() => setShowSignIn(false)} className="absolute top-2 right-2 text-black text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <SignInForm onSuccess={() => setShowSignIn(false)} />
            <p className="mt-4 text-center text-sm">Don't have an account? <button className="text-blue-600 underline" onClick={() => { setShowSignIn(false); setShowSignUp(true); }}>Get Started</button></p>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-8 relative">
            <button onClick={() => setShowSignUp(false)} className="absolute top-2 right-2 text-black text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold mb-4 text-center">Get Started</h2>
            <SignUpForm onSuccess={() => setShowSignUp(false)} />
            <p className="mt-4 text-center text-sm">Already have an account? <button className="text-blue-600 underline" onClick={() => { setShowSignUp(false); setShowSignIn(true); }}>Sign In</button></p>
          </div>
        </div>
      )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;