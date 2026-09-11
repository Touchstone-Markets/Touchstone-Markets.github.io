"use client";

import { useEffect, useMemo, useState } from "react";

type TickerItem = {
  symbol: string;
  name: string;
  price?: number;
  value: string;
  change?: number;
};

type CoinGeckoMarket = {
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number | null;
};

const cryptoFallback: TickerItem[] = [
  { symbol: "BTC", name: "Bitcoin", price: 76754, value: "$1.54T", change: -1.78 },
  { symbol: "ETH", name: "Ethereum", price: 2451.19, value: "$299.1B", change: -0.54 },
  { symbol: "USDT", name: "Tether", price: 0.99972, value: "$183.4B", change: 0 },
  { symbol: "BNB", name: "BNB", price: 711.91, value: "$94.8B", change: -1.35 },
  { symbol: "XRP", name: "XRP", price: 1.34, value: "$84.0B", change: -3.73 },
  { symbol: "USDC", name: "USDC", price: 0.999921, value: "$74.2B", change: 0 },
  { symbol: "SOL", name: "Solana", price: 98.72, value: "$57.9B", change: -2.29 },
  { symbol: "TRX", name: "TRON", price: 0.340588, value: "$32.3B", change: 0.5 },
  { symbol: "FIGR", name: "Figure Heloc", price: 1.035, value: "$23.2B", change: 0.98 },
  { symbol: "ZEC", name: "Zcash", price: 1083.71, value: "$18.4B", change: -11.94 },
  { symbol: "HYPE", name: "Hyperliquid", price: 78.85, value: "$17.6B", change: -4.81 },
  { symbol: "DOGE", name: "Dogecoin", price: 0.083137, value: "$13.0B", change: -2.96 },
  { symbol: "RAIN", name: "Rain", price: 0.015744, value: "$11.2B", change: -2.07 },
  { symbol: "USDS", name: "USDS", price: 0.99975, value: "$9.8B", change: 0 },
  { symbol: "XMR", name: "Monero", price: 510.61, value: "$9.6B", change: 0.42 },
];

const companyTickers: TickerItem[] = [
  { symbol: "NVDA", name: "NVIDIA", value: "$5.272T", price: 218.36, change: 2.37 },
  { symbol: "AAPL", name: "Apple", value: "$4.766T", price: 326.57, change: 3.56 },
  { symbol: "GOOG", name: "Alphabet", value: "$4.040T", price: 330.39, change: 0.61 },
  { symbol: "MSFT", name: "Microsoft", value: "$3.656T", price: 492.44, change: 0.16 },
  { symbol: "AMZN", name: "Amazon", value: "$2.716T", price: 251.89, change: 0.2 },
  { symbol: "TSM", name: "TSMC", value: "$2.219T", price: 428.03, change: 1.68 },
  { symbol: "SPCX", name: "SpaceX", value: "$1.953T", price: 148.18, change: 0.43 },
  { symbol: "AVGO", name: "Broadcom", value: "$1.716T", price: 360.83, change: 0.97 },
  { symbol: "2222.SR", name: "Saudi Aramco", value: "$1.684T", price: 6.96, change: 0.38 },
  { symbol: "META", name: "Meta", value: "$1.641T", price: 644.38, change: 1.42 },
  { symbol: "TSLA", name: "Tesla", value: "$1.435T", price: 363.56, change: 1.16 },
  { symbol: "005930.KS", name: "Samsung", value: "$1.260T", price: 191.99, change: 3.72 },
  { symbol: "MU", name: "Micron", value: "$1.103T", price: 977.41, change: 4.9 },
  { symbol: "BRK-B", name: "Berkshire", value: "$1.085T", price: 507, change: 0.06 },
  { symbol: "LLY", name: "Eli Lilly", value: "$1.001T", price: 1123, change: 0.11 },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : value >= 1 ? 2 : 6,
  }).format(value);
}

function formatMarketCap(value: number) {
  if (value >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  }

  return `$${(value / 1_000_000_000).toFixed(1)}B`;
}

function formatChange(value?: number) {
  if (value === undefined || Math.abs(value) < 0.005) {
    return "0.00%";
  }

  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function MarketRow({
  eyebrow,
  title,
  source,
  items,
  variant,
}: {
  eyebrow: string;
  title: string;
  source: string;
  items: TickerItem[];
  variant: "crypto" | "companies";
}) {
  const segments = useMemo(() => [0, 1], []);

  return (
    <div className={`market-row market-row-${variant}`} aria-label={title}>
      <div className="market-row-label">
        <span>
          <i aria-hidden="true" />
          {eyebrow}
        </span>
        <strong>{title}</strong>
        <small>{source}</small>
      </div>
      <div className="market-marquee">
        <div className="market-track">
          {segments.map((segment) => (
            <div className="market-segment" aria-hidden={segment === 1} key={segment}>
              {items.map((item) => (
                <div className="market-tile" key={`${segment}-${item.symbol}`}>
                  <span className="market-symbol">{item.symbol}</span>
                  <span className="market-name">{item.name}</span>
                  <span className="market-value">{item.value}</span>
                  {item.price !== undefined ? (
                    <span className="market-price">{formatCurrency(item.price)}</span>
                  ) : null}
                  <span
                    className={
                      item.change && item.change < 0
                        ? "market-change market-change-down"
                        : "market-change market-change-up"
                    }
                  >
                    {formatChange(item.change)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MarketTickers() {
  const [cryptoTickers, setCryptoTickers] = useState<TickerItem[]>(cryptoFallback);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCryptoMarkets() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h",
          { signal: controller.signal },
        );

        if (!response.ok) {
          return;
        }

        const markets = (await response.json()) as CoinGeckoMarket[];
        setCryptoTickers(
          markets.map((market) => ({
            symbol:
              market.symbol.toUpperCase() === "FIGR_HELOC"
                ? "FIGR"
                : market.symbol.toUpperCase(),
            name: market.name,
            price: market.current_price,
            value: formatMarketCap(market.market_cap),
            change: market.price_change_percentage_24h ?? 0,
          })),
        );
      } catch (error) {
        if (!controller.signal.aborted) {
          console.warn("Unable to refresh crypto markets", error);
        }
      }
    }

    loadCryptoMarkets();
    const interval = window.setInterval(loadCryptoMarkets, 60_000);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="broadcast-tickers">
      <MarketRow
        eyebrow="Live"
        title="Crypto"
        source="CoinGecko"
        items={cryptoTickers}
        variant="crypto"
      />
      <MarketRow
        eyebrow="Market cap"
        title="Companies"
        source="CompaniesMarketCap"
        items={companyTickers}
        variant="companies"
      />
    </section>
  );
}
