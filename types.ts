export interface ArchivedSite {
  url: string;
  name: string;
  category: 'personal' | 'corporate' | 'weird' | 'culture' | 'games' | 'hub' | 'shrine';
  yearStart: number;
  yearEnd: number;
  isLive?: boolean; // If true, use the URL directly (site is still online), bypassing Archive.org for speed
}

export interface StumbleState {
  currentUrl: string;
  timestamp: string;
  originalUrl: string;
  siteName: string;
  category: string;
  isLoading: boolean;
  isError: boolean;
}