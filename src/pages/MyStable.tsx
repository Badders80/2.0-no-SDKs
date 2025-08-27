import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function MyStableContent() {
  // Mock userSession so dashboard always shows
  const userSession = {
    user: { profile: { name: 'Guest User' } },
    eoa: '0x1234567890abcdef',
  };
  const address = '0xabcdef1234567890';
  const isConnected = true;
  const balance = 1.2345;

  // Get Futureverse wallet info from userSession
  const futureverseAddress = userSession?.eoa; // Externally Owned Account
  const futureverseConnected = !!userSession?.eoa;

  // Use Futureverse wallet if available, fallback to external wallet
  const displayAddress = futureverseAddress || address;
  const displayConnected = futureverseConnected || isConnected;

  // Portfolio data for demo (replace with Tokinvest API calls)
  const [portfolioData, setPortfolioData] = useState({
    totalValue: '$2,847',
    totalReturn: '+12.4%',
    totalShares: '8.2%',
    holdings: [
      {
        horse: 'Zeddiani',
        trainer: 'S. Gray',
        owned: '3%',
        value: '$1,247',
        change: '+6.4%',
        nextRace: 'Aug 5',
        status: 'winning'
      },
      {
        horse: 'Midnight Syndicate', 
        trainer: 'A. Pike',
        owned: '1.5%',
        value: '$890',
        change: '-2.1%',
        nextRace: 'Aug 9',
        status: 'stable'
      },
      {
        horse: 'Quantum Blur',
        trainer: 'J. Richards', 
        owned: '3.7%',
        value: '$710',
        change: '+15.2%',
        nextRace: 'Aug 11',
        status: 'rising'
      }
    ]
  });

  // Market opportunities data
  const [marketData] = useState({
    availableShares: [
      { horse: 'Thunder Strike', price: '$580', available: '2.5%', trend: 'up' },
      { horse: 'Golden Flash', price: '$920', available: '1.8%', trend: 'stable' },
      { horse: 'Speed Demon', price: '$1,150', available: '4.2%', trend: 'down' }
    ]
  });

  // Simulate live updates for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioData(prev => ({
        ...prev,
        holdings: prev.holdings.map(horse => ({
          ...horse,
          change: (Math.random() > 0.5 ? '+' : '-') + (Math.random() * 10).toFixed(1) + '%'
        }))
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Tokinvest integration
  const openTokinvest = () => {
    window.open('https://tokinvest.capital/investors', '_blank');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="pt-24 px-6 md:px-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Your Stable</h1>
        <p className="text-gray-400">Welcome back, Guest User</p>
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <p className="text-sm text-gray-400">
              {displayConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
            </p>
            <p className="font-mono text-sm">
              {displayAddress ? `${displayAddress.slice(0, 8)}...${displayAddress.slice(-6)}` : 'Not connected'}
            </p>
            <p className="text-sm">
              {balance ? `${balance} ETH` : displayConnected ? 'Futureverse Wallet' : '--'}
            </p>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div style={{ backgroundColor: '#1f2937', border: '1px solid #374151', marginBottom: '2rem', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Total Value</div>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#d4a964' }}>
                {portfolioData.totalValue}
              </div>
            </div>
            <div className="text-center">
              <div style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Total Return</div>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: portfolioData.totalReturn.startsWith('+') ? '#10b981' : '#ef4444' 
              }}>
                {portfolioData.totalReturn}
              </div>
            </div>
            <div className="text-center">
              <div style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Total Ownership</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                {portfolioData.totalShares}
              </div>
            </div>
            <div className="text-center">
              <div style={{ color: '#9ca3af', marginBottom: '0.25rem' }}>Horses Owned</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                {portfolioData.holdings.length}
              </div>
            </div>
          </div>
        </div>

        {/* Your Horses */}
        <div className="mb-8">
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
            Your Horses
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.holdings.map((horse, index) => (
              <div key={index} style={{ 
                backgroundColor: '#1f2937', 
                border: '1px solid #374151', 
                borderRadius: '0.5rem', 
                transition: 'background-color 0.3s', 
                cursor: 'pointer', 
                padding: '1.5rem' 
              }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
                      {horse.horse}
                    </div>
                    <div style={{ color: '#9ca3af' }}>
                      Trainer: {horse.trainer}
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    horse.status === 'winning' ? 'bg-green-400' : 
                    horse.status === 'rising' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div style={{ color: '#9ca3af' }}>Ownership</div>
                    <div style={{ fontWeight: 'bold', color: 'white' }}>{horse.owned}</div>
                  </div>
                  <div className="flex justify-between">
                    <div style={{ color: '#9ca3af' }}>Value</div>
                    <div style={{ fontWeight: 'bold', color: 'white' }}>{horse.value}</div>
                  </div>
                  <div className="flex justify-between">
                    <div style={{ color: '#9ca3af' }}>24h Change</div>
                    <div style={{ 
                      fontWeight: 'bold', 
                      color: horse.change.startsWith('+') ? '#10b981' : '#ef4444' 
                    }}>
                      {horse.change}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div style={{ color: '#9ca3af' }}>Next Race</div>
                    <div style={{ color: 'white' }}>{horse.nextRace}</div>
                  </div>
                </div>

                {/* Tokinvest Integration */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem' }}>
                    Manage via Tokinvest
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={openTokinvest}
                      style={{ 
                        flex: 1, 
                        backgroundColor: '#d4a964', 
                        color: 'black', 
                        fontSize: '0.875rem', 
                        padding: '0.5rem', 
                        borderRadius: '0.25rem', 
                        fontWeight: 'bold', 
                        border: 'none' 
                      }}
                    >
                      View Details
                    </button>
                    <button 
                      onClick={openTokinvest}
                      style={{ 
                        flex: 1, 
                        fontSize: '0.875rem', 
                        padding: '0.5rem', 
                        borderRadius: '0.25rem', 
                        border: '1px solid #374151', 
                        backgroundColor: '#1f2937', 
                        color: 'white' 
                      }}
                    >
                      Trade
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Opportunities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Market Opportunities</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {marketData.availableShares.map((opportunity, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded border-l-4 border-gold">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{opportunity.horse}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      opportunity.trend === 'up' ? 'bg-green-900 text-green-400' :
                      opportunity.trend === 'down' ? 'bg-red-900 text-red-400' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {opportunity.trend}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{opportunity.available} available</p>
                  <p className="text-lg font-bold text-gold mb-3">{opportunity.price}</p>
                  <button 
                    onClick={openTokinvest}
                    className="w-full py-2 bg-gray-700 text-sm rounded hover:bg-gray-600 transition"
                  >
                    Buy on Tokinvest
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Live Activity</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className="font-medium">Zeddiani finished 2nd at Ellerslie</p>
                  <p className="text-sm text-gray-400">Your 3% share earned $47 • 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">New shares available: Thunder Strike</p>
                  <p className="text-sm text-gray-400">2.5% available at $580 • 12 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Quantum Blur market price updated</p>
                  <p className="text-sm text-gray-400">+15.2% today • 18 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tokinvest CTA */}
        <div style={{ 
          background: 'linear-gradient(to right, rgba(212, 169, 100, 0.2), rgba(234, 179, 8, 0.2))',
          border: '1px solid rgba(212, 169, 100, 0.3)',
          marginBottom: '2rem',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          textAlign: 'center' 
        }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
            Ready to Trade?
          </div>
          <div style={{ color: '#d1d5db', marginBottom: '1rem' }}>
            Buy and sell horse shares with our tokenization partner Tokinvest
          </div>
          <button 
            onClick={openTokinvest}
            style={{ 
              backgroundColor: '#d4a964', 
              color: 'black', 
              padding: '0.75rem 1.5rem', 
              fontWeight: 'bold', 
              borderRadius: '0.25rem', 
              border: 'none' 
            }}
          >
            Open Tokinvest Platform
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MyStable() {
  return <MyStableContent />;
}
