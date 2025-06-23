import { useState, useEffect } from 'react';

/**
 * Custom hook to handle loading states with automatic timeout
 * 
 * @param {boolean} initialState - Initial loading state
 * @param {number} timeout - Timeout in milliseconds after which loading will automatically stop
 * @returns {Array} [isLoading, setIsLoading, resetLoading] - Loading state and functions to control it
 */
const useLoading = (initialState = false, timeout = 30000) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [timeoutId, setTimeoutId] = useState(null);

  // Set up or clear timeout when loading state changes
  useEffect(() => {
    if (isLoading && timeout > 0) {
      // Create a timeout to automatically turn off loading state
      const id = setTimeout(() => {
        setIsLoading(false);
      }, timeout);
      
      setTimeoutId(id);
    } else if (!isLoading && timeoutId) {
      // Clear timeout if loading was turned off manually
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    
    // Clean up timeout on unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, timeout]);

  // Function to reset loading state to false and clear timeout
  const resetLoading = () => {
    setIsLoading(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  return [isLoading, setIsLoading, resetLoading];
};

export default useLoading;
