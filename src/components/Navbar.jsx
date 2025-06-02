
import { SignedIn, SignedOut, SignInButton, useClerk } from '@clerk/clerk-react';

export default function App() {
  const clerk = useClerk();

  const handleLogout = async () => {
    await clerk.signOut();
  };

  return (
    <header className="bg-slate-950 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        {/* Brand */}
        <div className="text-2xl font-bold cursor-pointer">PassManager</div>
        {/* Navigation Links */}

      </div>
      <nav>
        <SignedOut>
          {/* Sign In and Sign Up Buttons */}
          <div className="space-x-4">
            <SignInButton mode="modal">
              <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-indigo-600 transition font-semibold">
                Sign In
              </button>
            </SignInButton>
            <SignInButton mode="modal" redirectUrl="/register">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 font-semibold transition">
                Sign Up
              </button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 font-semibold transition"
          >
            Logout
          </button>
        </SignedIn>
      </nav>
    </header>
  );
}

