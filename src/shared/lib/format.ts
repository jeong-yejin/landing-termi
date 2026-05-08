export function formatMoney(n: number): string {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatPrice(n: number, decimals = 2): string {
  return n.toFixed(decimals);
}
