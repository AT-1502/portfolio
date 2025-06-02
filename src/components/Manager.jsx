import  { useState, useEffect } from 'react';
import { useUser  } from '@clerk/clerk-react';

export default function PasswordManager() {
  const { user } = useUser (); // Get the currently logged-in user
  const userId = user ? user.id : null; // Get the user's ID

  // State for saved passwords (in localStorage)
  const [passwords, setPasswords] = useState(() => {
    const saved = localStorage.getItem(`passwords_${userId}`);
    return saved ? JSON.parse(saved) : [];
  });

  // Form inputs
  const [site, setSite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');

  // Save passwords to localStorage when changed
  useEffect(() => {
    if (userId) {
      localStorage.setItem(`passwords_${userId}`, JSON.stringify(passwords));
    }
  }, [passwords, userId]);

  // Add new password entry
  const handleAdd = (e) => {
    e.preventDefault();
    if (!site.trim() || !username.trim() || !password.trim()) return;
    setPasswords(prev => [
      ...prev,
      {
        id: Date.now(),
        site: site.trim(),
        username: username.trim(),
        password: password.trim()
      }
    ]);
    setSite('');
    setUsername('');
    setPassword('');
  };

  // Delete entry by id
  const handleDelete = (id) => {
    setPasswords(prev => prev.filter(p => p.id !== id));
  };

  // Toggle password visibility per entry
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const toggleVisibility = (id) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter passwords by search term
  const filteredPasswords = passwords.filter(p =>
    p.site.toLowerCase().includes(search.toLowerCase()) ||
    p.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <h1 className="text-4xl font-extrabold mt-24 mb-8">Password Manager</h1>

      <form 
        onSubmit={handleAdd} 
        className="bg-indigo-900 bg-opacity-30 backdrop-blur-md rounded-lg p-6 w-full max-w-5xl mb-10 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder="Site name"
            className="flex-1 px-4 py-2 rounded-md text-indigo-900 font-semibold focus:outline-none"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username or email"
            className="flex-1 px-4 py-2 rounded-md text-indigo-900 font-semibold focus:outline-none"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="flex-1 px-4 py-2 rounded-md text-indigo-900 font-semibold focus:outline-none"
            required
          />
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-700 transition rounded-md px-6 py-2 font-semibold"
          >
            Add
          </button>
        </div>
      </form>

      <input
        type="text"
        placeholder="Search by site or username..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-6 w-full max-w-md rounded-md px-4 py-2 text-indigo-900 font-semibold focus:outline-none"
      />

      <div className="w-full max-w-md border border-indigo-600 rounded-lg shadow-lg overflow-hidden bg-indigo-900 bg-opacity-30 backdrop-blur-md">
        {filteredPasswords.length === 0 ? (
          <p className="p-6 text-center text-indigo-300">No passwords saved.</p>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-indigo-700/60">
              <tr>
                <th className="px-4 py-3">Site</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPasswords.map(({id, site, username, password}) => (
                <tr key={id} className="border-t border-indigo-600 hover:bg-indigo-800/40">
                  <td className="px-4 py-3 font-semibold">{site}</td>
                  <td className="px-4 py-3">{username}</td>
                  <td className="px-4 py-3 font-mono">
                    {visiblePasswords[id] ? password : '••••••••'}
                    <button 
                      onClick={() => toggleVisibility(id)} 
                      className="ml-2 text-indigo-400 hover:text-indigo-200 focus:outline-none"
                      aria-label={visiblePasswords[id] ? "Hide password" : "Show password"}
                    >
                      {visiblePasswords[id] ? '🙈' : '👁️'}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button 
                      onClick={() => handleDelete(id)} 
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md font-semibold transition"
                      aria-label={`Delete password for ${site}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
