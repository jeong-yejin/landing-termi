import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Ticker = {
  ask: number;
  askDelta: number;
  rebate: number;
  bvRebate: number;
};

const INITIAL: Ticker = {
  ask: 68_739.5,
  askDelta: 0,
  rebate: 24.86,
  bvRebate: 3_284.2,
};

const TickerContext = createContext<Ticker>(INITIAL);

export function TickerProvider({
  children,
  intervalMs = 2400,
}: {
  children: ReactNode;
  intervalMs?: number;
}) {
  const [ticker, setTicker] = useState<Ticker>(INITIAL);

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

  return <TickerContext.Provider value={ticker}>{children}</TickerContext.Provider>;
}

export function useTicker(): Ticker {
  return useContext(TickerContext);
}
