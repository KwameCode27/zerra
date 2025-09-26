import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export function SignInForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      onSuccess();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" className="border rounded px-3 py-2" required value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border rounded px-3 py-2" required value={password} onChange={e => setPassword(e.target.value)} />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="bg-black text-white py-2 rounded hover:bg-gray-900 font-medium" disabled={loading}>{loading ? 'Signing In...' : 'Sign In'}</button>
    </form>
  );
}

export function SignUpForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      onSuccess();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" className="border rounded px-3 py-2" required value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" className="border rounded px-3 py-2" required value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border rounded px-3 py-2" required value={password} onChange={e => setPassword(e.target.value)} />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium" disabled={loading}>{loading ? 'Creating...' : 'Create Account'}</button>
    </form>
  );
}
