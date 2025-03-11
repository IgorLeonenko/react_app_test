"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
  archived: boolean;
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const router = useRouter();
  
  // Check if user is logged in
  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      fetchMessages(storedToken);
    }
  }, []);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }
      
      // Save token and set logged in state
      localStorage.setItem('adminToken', data.token);
      setToken(data.token);
      setIsLoggedIn(true);
      
      // Fetch messages
      fetchMessages(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  
  const fetchMessages = async (authToken: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setIsLoggedIn(false);
    setMessages([]);
  };
  
  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ read: true }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update message');
      }
      
      // Get the updated message from the response
      const updatedMessage = await response.json();
      
      // Update messages list
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      ));
      
      // Update selected message if it's the one being marked as read
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, read: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update message');
    }
  };
  
  const archiveMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ archived: true }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to archive message');
      }
      
      // Get the updated message from the response
      const updatedMessage = await response.json();
      
      // Update messages list
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, archived: true } : msg
      ));
      
      // Clear selected message if it's the one being archived
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to archive message');
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 neon-text-purple">Admin Panel</h1>
          
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              
              {error && (
                <div className="bg-[#ff2d55]/10 border border-[#ff2d55]/30 text-[#ff2d55] px-4 py-3 rounded-md mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-gray-300 mb-2">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#9d00ff]/50 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-black/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#9d00ff]/50 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full neon-border-purple px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:bg-[#9d00ff]/20 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Logging in...
                    </>
                  ) : "Login"}
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Contact Messages</h2>
                <button
                  onClick={handleLogout}
                  className="neon-border-red px-4 py-2 rounded-md text-white font-medium transition-all duration-300 hover:bg-[#ff2d55]/20"
                >
                  Logout
                </button>
              </div>
              
              {error && (
                <div className="bg-[#ff2d55]/10 border border-[#ff2d55]/30 text-[#ff2d55] px-4 py-3 rounded-md mb-4">
                  {error}
                </div>
              )}
              
              {loading ? (
                <div className="flex justify-center py-12">
                  <svg className="animate-spin h-8 w-8 text-[#9d00ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 h-[calc(100vh-250px)] overflow-y-auto">
                    <h3 className="text-xl font-semibold mb-4">Messages</h3>
                    
                    {messages.length === 0 ? (
                      <p className="text-gray-400 text-center py-8">No messages found</p>
                    ) : (
                      <div className="space-y-2">
                        {messages
                          .filter(msg => !msg.archived)
                          .map(message => (
                            <div
                              key={message.id}
                              onClick={() => setSelectedMessage(message)}
                              className={`p-3 rounded-md cursor-pointer transition-colors duration-200 ${
                                selectedMessage?.id === message.id
                                  ? 'bg-[#9d00ff]/20 border border-[#9d00ff]/50'
                                  : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
                              } ${!message.read ? 'border-l-4 border-l-[#00f2ff]' : ''}`}
                            >
                              <div className="flex justify-between items-start">
                                <h4 className="font-medium text-white">{message.name}</h4>
                                <span className="text-xs text-gray-400">{formatDate(message.createdAt)}</span>
                              </div>
                              <p className="text-sm text-gray-300 truncate">{message.service}</p>
                              <p className="text-xs text-gray-400 truncate mt-1">{message.message}</p>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:col-span-2 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 h-[calc(100vh-250px)] overflow-y-auto">
                    {selectedMessage ? (
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-semibold">Message Details</h3>
                          <div className="flex space-x-2">
                            {!selectedMessage.read && (
                              <button
                                onClick={() => markAsRead(selectedMessage.id)}
                                className="bg-[#00f2ff]/10 hover:bg-[#00f2ff]/20 text-[#00f2ff] px-3 py-1 rounded-md text-sm transition-colors duration-200"
                              >
                                Mark as Read
                              </button>
                            )}
                            <button
                              onClick={() => archiveMessage(selectedMessage.id)}
                              className="bg-[#ff2d55]/10 hover:bg-[#ff2d55]/20 text-[#ff2d55] px-3 py-1 rounded-md text-sm transition-colors duration-200"
                            >
                              Archive
                            </button>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-gray-400 text-sm mb-1">From</h4>
                            <p className="text-white">{selectedMessage.name} ({selectedMessage.email})</p>
                          </div>
                          
                          <div>
                            <h4 className="text-gray-400 text-sm mb-1">Service</h4>
                            <p className="text-white">{selectedMessage.service}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-gray-400 text-sm mb-1">Date</h4>
                            <p className="text-white">{formatDate(selectedMessage.createdAt)}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-gray-400 text-sm mb-1">Message</h4>
                            <div className="bg-black/30 border border-gray-800 rounded-md p-4 mt-2">
                              <p className="text-white whitespace-pre-wrap">{selectedMessage.message}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-gray-400">
                        <svg className="w-16 h-16 mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                        </svg>
                        <p className="text-xl">Select a message to view details</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
