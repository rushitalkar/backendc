import { useState, useEffect } from 'react';
import { Key, Mail, Moon, Sun } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', { email, password, keepSignedIn });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`absolute top-8 right-8 p-3 rounded-full transition-all cursor-pointer ${
          darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
        } shadow-lg`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Zoom Support Logo at Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <img 
          src="https://explore.zoom.us/media/zoom-logo.png" 
          alt="Zoom" 
          className="h-8"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg width='100' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='20' font-size='24' font-weight='bold' fill='%230E71EB'%3Ezoom%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>

      <div className={`w-full max-w-4xl rounded-lg shadow-lg overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Sign In Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <h1 className={`text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>Sign In</h1>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Sign Up Free
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                  required
                />
                <a
                  href="#"
                  className={`absolute right-4 top-1/2 -translate-y-1/2 text-sm italic ${
                    darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Forgot?
                </a>
              </div>

              {/* Keep me signed in & Sign In Button */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={keepSignedIn}
                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Keep me signed in</span>
                </label>

                <button
                  type="submit"
                  className={`px-8 py-2 rounded-lg font-medium transition-colors ${
                    darkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Back Link */}
            <div className="mt-8">
              <a href="#" className={`text-sm flex items-center gap-1 ${
                darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
              }`}>
                <span>←</span> Back
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center px-4">
            <div className={`w-px h-64 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}></div>
            <span className={`absolute px-3 text-sm ${
              darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-400'
            }`}>or</span>
          </div>

          {/* Mobile Divider */}
          <div className="md:hidden flex items-center justify-center py-4 px-8">
            <div className={`flex-1 h-px ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}></div>
            <span className={`px-4 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-400'
            }`}>or</span>
            <div className={`flex-1 h-px ${
              darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}></div>
          </div>

          {/* Right Side - SSO Options */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center">
            <div className="w-full space-y-4">
              {/* Sign in with SSO */}
              <button className={`w-full flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${
                darkMode
                  ? 'border border-gray-600 hover:bg-gray-700'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}>
                <Key className={`w-5 h-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <span className={`font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Sign in with SSO</span>
              </button>

              {/* Sign in with Google */}
              <button className={`w-full flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${
                darkMode
                  ? 'border border-gray-600 hover:bg-gray-700'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className={`font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Sign in with Google</span>
              </button>

              {/* Sign in with Facebook */}
              <button className={`w-full flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${
                darkMode
                  ? 'border border-gray-600 hover:bg-gray-700'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}>
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className={`font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Sign in with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

