// useProductsSearch.js
// This is just a helper function (a "hook") your component can use — like a reusable search

import { useState, useEffect } from "react";
import axios from "axios";

export default function useProductsSearch(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return setResults([]);

    const fetchResults = async () => {
      setLoading(true);
      try {
        // don't need this if we are hosting the app on Vercel
        // const res = await axios.get(`http://localhost:8000/api/search?q=${query}`);

        // Get the backend URL from an environment variable injected by Vercel/Vite
        const backendUrl = import.meta.env.VITE_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;

        // ... inside fetchResults function ...
        if (!backendUrl) { // Add a check to ensure the URL is present
            console.error("Backend URL (VITE_APP_BACKEND_URL) is not configured in frontend environment.");
            setLoading(false);
            return;
        }
        const res = await axios.get(`${backendUrl}/api/search?q=${query}`);

        

        setResults(res.data.products);  // 'products' comes from Meilisearch
      } catch (error) {
        console.error("Search error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return { results, loading };
}
