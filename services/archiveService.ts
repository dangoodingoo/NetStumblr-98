import { SEED_SITES } from '../constants';
import { StumbleState } from '../types';

// State to track available indices (The "Deck" of sites)
let availableIndices: number[] = [];

// Fisher-Yates Shuffle Algorithm
const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const refillDeck = () => {
  availableIndices = Array.from({ length: SEED_SITES.length }, (_, i) => i);
  shuffleArray(availableIndices);
  console.log(`[NetStumblr] Deck reshuffled. ${availableIndices.length} sites available.`);
};

export const getRandomTimestamp = (startYear: number, endYear: number): string => {
  const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  // Weight towards mid-year to avoid "under construction" jan 1st placeholders
  const month = String(Math.floor(Math.random() * 10) + 2).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
  
  return `${year}${month}${day}${hour}0000`;
};

export const getRandomSite = (): StumbleState => {
  // If deck is empty, shuffle a new one
  if (availableIndices.length === 0) {
    refillDeck();
  }

  // Draw a card (index) from the deck
  const randomIndex = availableIndices.pop();
  
  // Safety check (should never happen due to refill logic)
  if (randomIndex === undefined) {
    refillDeck();
    return getRandomSite();
  }

  const site = SEED_SITES[randomIndex];
  
  let finalUrl = '';
  let timestampDisplay = '';

  if (site.isLive) {
    // TECHNOLOGICALLY ADVANCED: Direct connection to surviving servers
    finalUrl = site.url;
    timestampDisplay = "LIVE";
  } else {
    // CLASSIC: Wayback Machine Time Travel
    const timestamp = getRandomTimestamp(site.yearStart, site.yearEnd);
    // Standard playback URL
    finalUrl = `https://web.archive.org/web/${timestamp}/${site.url}`;
    timestampDisplay = timestamp.substring(0, 4);
  }

  return {
    currentUrl: finalUrl,
    timestamp: timestampDisplay,
    originalUrl: site.url,
    siteName: site.name,
    category: site.category,
    isLoading: true,
    isError: false,
  };
};