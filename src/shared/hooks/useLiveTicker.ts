import { useEffect, useState } from 'react';

type Ticker = {
  ask: number;
  askDelta: number;
  rebate: number;
  bvRebate: number;
};

export function useLiveTicker(intervalMs = 2400): Ticker {
  const [ticker, setTicker] = useState<Ticker>({
    ask: 68739.5,
    askDelta: 0,
    rebate: 24.86,
    bvRebate: 3284.2,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setTicker((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return {
          ask: prev.ask + delta,
          askDelta: delta,
          rebate: prev.rebate + Math.random() * 0.04,
          bvRebate: prev.bvRebate + Math.random() * 0.08,
        };
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return ticker;
}
