import Navbar from './components/Navbar.jsx';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import PasswordManager from './components/Manager.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition-all duration-300">
        <SignedIn>
          <PasswordManager />
        </SignedIn>
        <SignedOut>
          <div className="text-center p-6 rounded-lg bg-indigo-800 bg-opacity-80 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-white animate-bounce">Welcome to Your Password Manager!</h2>
            <p className="mb-4 text-white">Please sign in to securely manage your passwords.</p>
            <SignInButton mode="modal">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold transition duration-200 hover:bg-indigo-100">
                Sign In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </>
  );
}

export default App;

