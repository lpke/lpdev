'use client';

import { useState, useEffect } from 'react';

export default function WeatherPage() {
  const [data, setData] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch('/apps/weather/api/metar');
    const json = await res.json();
    setData(json?.response_text);
    setLoading(false);
  };

  return (
    <div className="max-w-xl">
      <button
        type="button"
        onClick={fetchData}
        className="mb-6 w-36 rounded bg-zinc-200 p-2 hover:bg-zinc-300 disabled:text-zinc-300 disabled:hover:bg-none"
      >
        Fetch Camden
      </button>

      {data && (
        <div>
          <p className="mb-6">Camden METAR:</p>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
}
