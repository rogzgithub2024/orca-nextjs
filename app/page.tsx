'use client';

import { useState } from 'react';
import { api, ApiError } from '@/lib/api';

interface ApiResponse {
  message: string;
  status: string;
  timestamp?: string;
}

// Metadata should be added in a layout.tsx file in the same directory if needed
// Since this is a client component, create app/layout.tsx (already exists) or app/home/layout.tsx

export default function Home() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    setError(null);
    setApiResponse(null);

    try {
      const response = await api.get<ApiResponse>('/test');
      setApiResponse(response);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(
          err.message ||
            'Failed to fetch from API. Make sure Laravel server is running on http://localhost:8000'
        );
      } else {
        setError(
          'Failed to fetch from API. Make sure Laravel server is running on http://localhost:8000'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        
      </div>
    </div>
  );
}
