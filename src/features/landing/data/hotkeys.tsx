import type { HotkeyTab } from './types';

export const hotkeyTabs: HotkeyTab[] = [
  {
    id: 'orders',
    label: 'Orders',
    side: {
      title: 'Fire orders without leaving the keyboard.',
      body: 'Buy at best, sell at best, modify, cancel — all one keystroke. Modifier keys override smart routing or split across venues.',
      tipKey: '⌘K',
      tipDesc: 'opens command palette',
    },
    rows: [
      { keys: ['B'], desc: <><strong>Buy</strong> at best ask · auto-routed</> },
      { keys: ['S'], desc: <><strong>Sell</strong> at best bid · auto-routed</> },
      { keys: ['⌘', 'B'], desc: <><strong>Buy</strong> · open full ticket with size + venue</> },
      { keys: ['⌘', 'R'], desc: <><strong>Override route</strong> · pick a venue manually</> },
      { keys: ['⌘', 'X'], desc: <><strong>Cancel all</strong> open orders for current pair</> },
      { keys: ['M'], desc: <><strong>Modify</strong> last order · price + size inline</> },
    ],
  },
  {
    id: 'markets',
    label: 'Markets',
    side: {
      title: 'Switch markets, venues, and watchlists at speed.',
      body: 'Cycle through your watchlist, jump to any pair by ticker, or compare three exchanges side by side without losing your place.',
      tipKey: '/',
      tipDesc: 'focus search · type ticker',
    },
    rows: [
      { keys: ['/'], desc: <><strong>Search</strong> · jump to any pair by ticker</> },
      { keys: ['J'], desc: <><strong>Next pair</strong> in watchlist</> },
      { keys: ['K'], desc: <><strong>Previous pair</strong> in watchlist</> },
      { keys: ['⌘', '1'], desc: <><strong>Switch venue</strong> to slot 1 · Bybit</> },
      { keys: ['⌘', '2'], desc: <><strong>Switch venue</strong> to slot 2 · Binance</> },
      { keys: ['C'], desc: <><strong>Compare mode</strong> · 3 venues side-by-side</> },
    ],
  },
  {
    id: 'positions',
    label: 'Positions',
    side: {
      title: 'Manage every open position with two fingers.',
      body: "Close, flip, reduce, or set TP/SL inline — without leaving the position panel. Funding and rebates update in real time.",
      tipKey: 'P',
      tipDesc: 'opens position drawer',
    },
    rows: [
      { keys: ['P'], desc: <><strong>Open position drawer</strong> · all venues</> },
      { keys: ['X'], desc: <><strong>Close current position</strong> at market</> },
      { keys: ['⌘', 'X'], desc: <><strong>Close all positions</strong> · all venues</> },
      { keys: ['F'], desc: <><strong>Flip</strong> direction · close + reverse</> },
      { keys: ['T'], desc: <><strong>Set TP/SL</strong> inline · drag on chart</> },
      { keys: ['⌘', 'L'], desc: <><strong>Add to position</strong> · pyramid in</> },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    side: {
      title: 'Workspace layouts that follow your trade flow.',
      body: 'Save and recall workspace presets per strategy. Per-pair memory remembers the layout you last used for BTC vs ETH.',
      tipKey: '⌘⇧K',
      tipDesc: 'cycle workspace presets',
    },
    rows: [
      { keys: ['⌘', '⇧', '1'], desc: <><strong>Workspace</strong> · scalp · 4 charts + ladder</> },
      { keys: ['⌘', '⇧', '2'], desc: <><strong>Workspace</strong> · perp · funding + OI</> },
      { keys: ['⌘', '⇧', '3'], desc: <><strong>Workspace</strong> · arb · 3 venues + spread</> },
      { keys: ['⌘', 'D'], desc: <><strong>Detach panel</strong> to a new monitor</> },
      { keys: ['⌘', ','], desc: <><strong>Settings</strong> · hotkeys, theme, payouts</> },
      { keys: ['?'], desc: <><strong>Show all hotkeys</strong> · in-app cheat sheet</> },
    ],
  },
];
