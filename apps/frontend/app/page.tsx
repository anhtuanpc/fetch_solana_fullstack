'use client';

import { useState } from 'react';

export default function Home() {
  const [blockNumber, setBlockNumber] = useState('');
  const [transactionCount, setTransactionCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchTransactions = async () => {
    if (!blockNumber) {
      setError('Please enter a block number');
      return;
    }

    setLoading(true);
    setError(null);
    setTransactionCount(null);

    try {
      const response = await fetch(`http://localhost:3001/txs-from-block/${blockNumber}`);
      const data = await response.json();

      if (data.status === 200) {
        setTransactionCount(data.data.transactionCount);
      } else {
        setError('Failed to fetch transaction count');
      }
    } catch (err) {
      setError('Error connecting to API. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFetchTransactions();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 font-sans dark:from-gray-900 dark:to-gray-800 p-4">
      <main className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">
            Solana Block Explorer
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Get transaction count from block number
          </p>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="blockNumber"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Block Number
              </label>
              <input
                id="blockNumber"
                type="number"
                value={blockNumber}
                onChange={(e) => setBlockNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., 150000003"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              onClick={handleFetchTransactions}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Fetching...' : 'Get Transaction Count'}
            </button>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {transactionCount !== null && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Transaction Count</p>
                <p className="text-4xl font-bold text-green-700 dark:text-green-400">
                  {transactionCount.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
