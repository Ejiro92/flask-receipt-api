import React, { useEffect, useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReceipt = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://flask-receipt-api.onrender.com");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReceipt(); // Auto-fetch on page load
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Receipt Generator</h1>
        <button onClick={fetchReceipt} disabled={loading} className="fetch-button">
          {loading ? "Fetching..." : "Get New Receipt"}
        </button>
        {error && <p className="error">Error: {error}</p>}
        {loading && <p className="loading">Loading...</p>}
        {data && (
          <div className="receipt-container">
            <h2>Receipt Details</h2>
            <p><strong>Receipt ID:</strong> {data.id}</p>
            <p><strong>Date:</strong> {data.date}</p>
            <p><strong>Amount:</strong> ${data.amount}</p>
            <p><strong>Items:</strong></p>
            <ul>
              {data.items.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
