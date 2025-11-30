import { ArchivedSite } from './types';

// The Hybrid Database:
// "Live" sites are instant. "Archived" sites are calculated for their golden era.
export const SEED_SITES: ArchivedSite[] = [
  // =========================================================================
  // LIVE LEGENDS (Instant Load - Still Online)
  // =========================================================================
  { name: "Space Jam 1996", url: "https://www.spacejam.com/1996/", category: "culture", yearStart: 1996, yearEnd: 1996, isLive: true },
  { name: "ToastyTech", url: "http://toastytech.com/", category: "weird", yearStart: 1998, yearEnd: 2024, isLive: true },
  { name: "Cameron's World", url: "https://www.cameronsworld.net/", category: "weird", yearStart: 1998, yearEnd: 2024, isLive: true },
  { name: "First Website", url: "http://info.cern.ch/hypertext/WWW/TheProject.html", category: "culture", yearStart: 1991, yearEnd: 1991, isLive: true },
  { name: "DPGraph", url: "http://www.dpgraph.com/", category: "weird", yearStart: 1996, yearEnd: 2024, isLive: true },
  { name: "ACME Labs", url: "http://www.acme.com/", category: "personal", yearStart: 1994, yearEnd: 2024, isLive: true },
  { name: "Museum of Jurassic Tech", url: "http://mjt.org/", category: "weird", yearStart: 1998, yearEnd: 2024, isLive: true },
  { name: "Inst. of Official Cheer", url: "http://www.lileks.com/institute/", category: "weird", yearStart: 2000, yearEnd: 2024, isLive: true },
  { name: "Superbad", url: "http://superbad.com/", category: "weird", yearStart: 1997, yearEnd: 2024, isLive: true },
  { name: "Jodi.org", url: "http://wwwwwwwww.jodi.org/", category: "weird", yearStart: 1995, yearEnd: 2024, isLive: true },
  { name: "The Useless Web", url: "http://www.theuselessweb.com/", category: "hub", yearStart: 2012, yearEnd: 2024, isLive: true },
  { name: "TextFiles.com", url: "http://textfiles.com", category: "hub", yearStart: 1998, yearEnd: 2024, isLive: true },
  { name: "Erowid", url: "http://erowid.org", category: "culture", yearStart: 1999, yearEnd: 2024, isLive: true },
  { name: "Scene.org", url: "http://scene.org", category: "culture", yearStart: 1998, yearEnd: 2024, isLive: true },
  { name: "Internet Archive", url: "http://archive.org", category: "hub", yearStart: 1997, yearEnd: 2024, isLive: true },
  { name: "Three Word Phrase", url: "http://threewordphrase.com/", category: "weird", yearStart: 2010, yearEnd: 2024, isLive: true },
  { name: "Homestar Runner", url: "http://homestarrunner.com", category: "games", yearStart: 2001, yearEnd: 2024, isLive: true },

  // =========================================================================
  // GEOCITIES DEEP DIVES (The "Random People" Engine)
  // =========================================================================
  { name: "GeoCities: Area51", url: "http://www.geocities.com/Area51/", category: "hub", yearStart: 1997, yearEnd: 1999 },
  { name: "GeoCities: A51/Corridor", url: "http://www.geocities.com/Area51/Corridor/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: A51/Vault", url: "http://www.geocities.com/Area51/Vault/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: A51/Cavern", url: "http://www.geocities.com/Area51/Cavern/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: A51/Labyrinth", url: "http://www.geocities.com/Area51/Labyrinth/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: A51/Stargate", url: "http://www.geocities.com/Area51/Stargate/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: A51/Dimension", url: "http://www.geocities.com/Area51/Dimension/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: A51/Nebula", url: "http://www.geocities.com/Area51/Nebula/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: A51/Dreamland", url: "http://www.geocities.com/Area51/Dreamland/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  
  { name: "GeoCities: Heartland", url: "http://www.geocities.com/Heartland/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Heartland/Plains", url: "http://www.geocities.com/Heartland/Plains/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Heartland/Valley", url: "http://www.geocities.com/Heartland/Valley/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Heartland/Hills", url: "http://www.geocities.com/Heartland/Hills/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Heartland/Meadows", url: "http://www.geocities.com/Heartland/Meadows/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Heartland/Ranch", url: "http://www.geocities.com/Heartland/Ranch/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Heartland/Acres", url: "http://www.geocities.com/Heartland/Acres/", category: "personal", yearStart: 1999, yearEnd: 2001 },
  { name: "GeoCities: Heartland/Creek", url: "http://www.geocities.com/Heartland/Creek/", category: "personal", yearStart: 1999, yearEnd: 2001 },

  { name: "GeoCities: EnchantedForest", url: "http://www.geocities.com/EnchantedForest/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: EF/Glade", url: "http://www.geocities.com/EnchantedForest/Glade/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: EF/Cottage", url: "http://www.geocities.com/EnchantedForest/Cottage/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: EF/Dell", url: "http://www.geocities.com/EnchantedForest/Dell/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: EF/Tower", url: "http://www.geocities.com/EnchantedForest/Tower/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: EF/Meadow", url: "http://www.geocities.com/EnchantedForest/Meadow/", category: "personal", yearStart: 1998, yearEnd: 2001 },

  { name: "GeoCities: SiliconValley", url: "http://www.geocities.com/SiliconValley/", category: "hub", yearStart: 1997, yearEnd: 1999 },
  { name: "GeoCities: SV/Heights", url: "http://www.geocities.com/SiliconValley/Heights/", category: "personal", yearStart: 1997, yearEnd: 1999 },
  { name: "GeoCities: SV/Park", url: "http://www.geocities.com/SiliconValley/Park/", category: "personal", yearStart: 1997, yearEnd: 1999 },
  { name: "GeoCities: SV/Pines", url: "http://www.geocities.com/SiliconValley/Pines/", category: "personal", yearStart: 1997, yearEnd: 1999 },
  { name: "GeoCities: SV/Lab", url: "http://www.geocities.com/SiliconValley/Lab/", category: "personal", yearStart: 1997, yearEnd: 1999 },
  { name: "GeoCities: SV/Vista", url: "http://www.geocities.com/SiliconValley/Vista/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: SV/Orchard", url: "http://www.geocities.com/SiliconValley/Orchard/", category: "personal", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: SV/Horizon", url: "http://www.geocities.com/SiliconValley/Horizon/", category: "personal", yearStart: 1998, yearEnd: 2001 },

  { name: "GeoCities: SunsetStrip", url: "http://www.geocities.com/SunsetStrip/", category: "hub", yearStart: 1997, yearEnd: 2000 },
  { name: "GeoCities: SS/Alley", url: "http://www.geocities.com/SunsetStrip/Alley/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SS/Club", url: "http://www.geocities.com/SunsetStrip/Club/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SS/Lounge", url: "http://www.geocities.com/SunsetStrip/Lounge/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SS/Palms", url: "http://www.geocities.com/SunsetStrip/Palms/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SS/Amphitheatre", url: "http://www.geocities.com/SunsetStrip/Amphitheatre/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: SS/Backstage", url: "http://www.geocities.com/SunsetStrip/Backstage/", category: "personal", yearStart: 1998, yearEnd: 2001 },

  { name: "GeoCities: Tokyo", url: "http://www.geocities.com/Tokyo/", category: "hub", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: Tokyo/Towers", url: "http://www.geocities.com/Tokyo/Towers/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: Tokyo/Flats", url: "http://www.geocities.com/Tokyo/Flats/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: Tokyo/Island", url: "http://www.geocities.com/Tokyo/Island/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: Tokyo/Ginza", url: "http://www.geocities.com/Tokyo/Ginza/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: Tokyo/Temple", url: "http://www.geocities.com/Tokyo/Temple/", category: "personal", yearStart: 1998, yearEnd: 2001 },

  { name: "GeoCities: SoHo", url: "http://www.geocities.com/SoHo/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SoHo/Loft", url: "http://www.geocities.com/SoHo/Loft/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SoHo/Gallery", url: "http://www.geocities.com/SoHo/Gallery/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SoHo/Cafe", url: "http://www.geocities.com/SoHo/Cafe/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SoHo/Museum", url: "http://www.geocities.com/SoHo/Museum/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: SoHo/Studios", url: "http://www.geocities.com/SoHo/Studios/", category: "personal", yearStart: 1998, yearEnd: 2000 },

  { name: "GeoCities: Athens", url: "http://www.geocities.com/Athens/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Athens/Acropolis", url: "http://www.geocities.com/Athens/Acropolis/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Athens/Forum", url: "http://www.geocities.com/Athens/Forum/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Athens/Olympus", url: "http://www.geocities.com/Athens/Olympus/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: Athens/Delphi", url: "http://www.geocities.com/Athens/Delphi/", category: "personal", yearStart: 1998, yearEnd: 2000 },

  { name: "GeoCities: WestHollywood", url: "http://www.geocities.com/WestHollywood/", category: "hub", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: WestHollywood/Heights", url: "http://www.geocities.com/WestHollywood/Heights/", category: "personal", yearStart: 1998, yearEnd: 2001 },
  { name: "GeoCities: WestHollywood/Castro", url: "http://www.geocities.com/WestHollywood/Castro/", category: "personal", yearStart: 1998, yearEnd: 2001 },

  { name: "GeoCities: CollegePark", url: "http://www.geocities.com/CollegePark/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: CollegePark/Quad", url: "http://www.geocities.com/CollegePark/Quad/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: CollegePark/Campus", url: "http://www.geocities.com/CollegePark/Campus/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "GeoCities: CollegePark/Library", url: "http://www.geocities.com/CollegePark/Library/", category: "personal", yearStart: 1998, yearEnd: 2000 },

  // =========================================================================
  // HOLLYWOOD & MOVIES (90s Blockbusters)
  // =========================================================================
  { name: "Star Wars Ep 1", url: "http://www.starwars.com/episode-i/", category: "culture", yearStart: 1999, yearEnd: 2000 },
  { name: "Jurassic Park", url: "http://www.jurassicpark.com/", category: "culture", yearStart: 1997, yearEnd: 1998 },
  { name: "The Lost World", url: "http://www.lost-world.com/", category: "culture", yearStart: 1997, yearEnd: 1998 },
  { name: "The Matrix", url: "http://whatisthematrix.com", category: "shrine", yearStart: 1999, yearEnd: 2000 },
  { name: "Blair Witch Project", url: "http://www.blairwitch.com/", category: "shrine", yearStart: 1999, yearEnd: 2000 },
  { name: "Independence Day", url: "http://www.id4movie.com/", category: "culture", yearStart: 1996, yearEnd: 1997 },
  { name: "Men in Black", url: "http://www.meninblack.com/", category: "culture", yearStart: 1997, yearEnd: 1998 },
  { name: "Godzilla 1998", url: "http://www.godzilla.com/", category: "culture", yearStart: 1998, yearEnd: 1999 },
  { name: "Titanic Movie", url: "http://www.titanicmovie.com/", category: "culture", yearStart: 1997, yearEnd: 1999 },
  { name: "The Mummy", url: "http://www.mummy.com/", category: "culture", yearStart: 1999, yearEnd: 2000 },
  { name: "Austin Powers", url: "http://www.austinpowers.com/", category: "culture", yearStart: 1997, yearEnd: 1999 },
  { name: "Fight Club", url: "http://www.fightclub.com/", category: "culture", yearStart: 1999, yearEnd: 2000 },
  { name: "The X-Files Movie", url: "http://www.thex-files.com/", category: "culture", yearStart: 1998, yearEnd: 2000 },
  { name: "Toy Story 2", url: "http://www.toystory2.com/", category: "culture", yearStart: 1999, yearEnd: 2000 },

  // =========================================================================
  // PARANORMAL & CONSPIRACY (The X-Files Era)
  // =========================================================================
  { name: "Art Bell", url: "http://www.artbell.com/", category: "weird", yearStart: 1997, yearEnd: 2001 },
  { name: "Coast to Coast AM", url: "http://www.coasttocoastam.com/", category: "weird", yearStart: 1998, yearEnd: 2002 },
  { name: "Above Top Secret", url: "http://www.abovetopsecret.com/", category: "weird", yearStart: 1999, yearEnd: 2003 },
  { name: "The Disclosure Project", url: "http://www.disclosureproject.org/", category: "weird", yearStart: 2001, yearEnd: 2003 },
  { name: "MUFON", url: "http://www.mufon.com/", category: "weird", yearStart: 1997, yearEnd: 2000 },
  { name: "Rense.com", url: "http://www.rense.com/", category: "weird", yearStart: 1998, yearEnd: 2002 },
  { name: "Sightings", url: "http://www.sightings.com/", category: "weird", yearStart: 1996, yearEnd: 1999 },
  { name: "Crop Circle Connector", url: "http://www.cropcircleconnector.com/", category: "weird", yearStart: 1998, yearEnd: 2002 },
  { name: "GhostStudy", url: "http://ghoststudy.com/", category: "weird", yearStart: 1999, yearEnd: 2003 },
  { name: "Shadowlands", url: "http://theshadowlands.net/", category: "weird", yearStart: 1997, yearEnd: 2002 },

  // =========================================================================
  // SOFTWARE & SHAREWARE (The Download Era)
  // =========================================================================
  { name: "WinZip", url: "http://www.winzip.com/", category: "corporate", yearStart: 1997, yearEnd: 2000 },
  { name: "WinAmp", url: "http://www.winamp.com/", category: "corporate", yearStart: 1998, yearEnd: 2001 },
  { name: "RealPlayer", url: "http://www.real.com/", category: "corporate", yearStart: 1997, yearEnd: 2000 },
  { name: "Netscape", url: "http://home.netscape.com/", category: "corporate", yearStart: 1996, yearEnd: 1998 },
  { name: "Download.com", url: "http://download.com/", category: "hub", yearStart: 1997, yearEnd: 2000 },
  { name: "Tucows", url: "http://www.tucows.com/", category: "hub", yearStart: 1997, yearEnd: 2000 },
  { name: "Happy Puppy", url: "http://happypuppy.com", category: "games", yearStart: 1996, yearEnd: 1999 },
  { name: "FilePlanet", url: "http://www.fileplanet.com/", category: "games", yearStart: 1999, yearEnd: 2002 },
  { name: "ICQ", url: "http://www.icq.com/", category: "corporate", yearStart: 1998, yearEnd: 2000 },
  { name: "mIRC", url: "http://www.mirc.com/", category: "corporate", yearStart: 1998, yearEnd: 2001 },
  { name: "GetRight", url: "http://www.getright.com/", category: "corporate", yearStart: 1999, yearEnd: 2002 },
  { name: "Babylon Translator", url: "http://www.babylon.com/", category: "corporate", yearStart: 1999, yearEnd: 2001 },

  // =========================================================================
  // UNIVERSITY "TILDE" PAGES (The Original Social Network)
  // =========================================================================
  { name: "MIT User Pages", url: "http://web.mit.edu/", category: "hub", yearStart: 1996, yearEnd: 1999 },
  { name: "Stanford User Pages", url: "http://www.stanford.edu/", category: "hub", yearStart: 1996, yearEnd: 1999 },
  { name: "Berkeley User Pages", url: "http://www.berkeley.edu/", category: "hub", yearStart: 1996, yearEnd: 1999 },
  { name: "CMU User Pages", url: "http://www.cmu.edu/", category: "hub", yearStart: 1996, yearEnd: 1999 },
  { name: "UIUC User Pages", url: "http://www.uiuc.edu/", category: "hub", yearStart: 1996, yearEnd: 1999 },
  { name: "UMich User Pages", url: "http://www.umich.edu/", category: "hub", yearStart: 1997, yearEnd: 2000 },
  { name: "Caltech User Pages", url: "http://www.caltech.edu/", category: "hub", yearStart: 1997, yearEnd: 2000 },

  // =========================================================================
  // WEBRINGS (Infinite Links)
  // =========================================================================
  { name: "WebRing: The Hub", url: "http://www.webring.org/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  { name: "Anime WebTurnpike", url: "http://www.anipike.com/", category: "hub", yearStart: 1998, yearEnd: 2002 },
  { name: "Llama Webring", url: "http://www.webring.org/cgi-bin/webring?ring=llama;list", category: "weird", yearStart: 1999, yearEnd: 2001 },
  { name: "X-Files Webring", url: "http://www.webring.org/cgi-bin/webring?ring=xfiles;list", category: "shrine", yearStart: 1998, yearEnd: 2000 },
  { name: "Cat Lovers Webring", url: "http://www.webring.org/cgi-bin/webring?ring=cats;list", category: "personal", yearStart: 1999, yearEnd: 2001 },
  { name: "Goth Webring", url: "http://www.webring.org/cgi-bin/webring?ring=gothic;list", category: "culture", yearStart: 1999, yearEnd: 2002 },
  { name: "HTML Writers Guild", url: "http://hwg.org", category: "culture", yearStart: 1997, yearEnd: 2000 },
  { name: "Railroad Webring", url: "http://www.webring.org/cgi-bin/webring?ring=rail;list", category: "personal", yearStart: 1999, yearEnd: 2001 },
  { name: "Star Trek Webring", url: "http://www.webring.org/cgi-bin/webring?ring=trek;list", category: "shrine", yearStart: 1998, yearEnd: 2000 },

  // =========================================================================
  // OTHER HOSTING PLATFORMS
  // =========================================================================
  { name: "Angelfire Directory", url: "http://www.angelfire.com/", category: "hub", yearStart: 1998, yearEnd: 2001 },
  { name: "Angelfire Anime", url: "http://www.angelfire.com/anime/", category: "shrine", yearStart: 1999, yearEnd: 2002 },
  { name: "Angelfire Games", url: "http://www.angelfire.com/games/", category: "games", yearStart: 1999, yearEnd: 2002 },
  { name: "Tripod Members", url: "http://members.tripod.com/", category: "hub", yearStart: 1998, yearEnd: 2001 },
  { name: "Xoom Members", url: "http://xoom.com/members/", category: "hub", yearStart: 1998, yearEnd: 1999 },
  { name: "FortuneCity", url: "http://www.fortunecity.com/", category: "hub", yearStart: 1998, yearEnd: 2000 },
  
  // =========================================================================
  // PERSONAL PAGES & FAN SHRINES
  // =========================================================================
  { name: "Mahir's Home Page", url: "http://www.ikissyou.org/", category: "personal", yearStart: 1999, yearEnd: 2000 },
  { name: "Alex Chiu Immortality", url: "http://www.alexchiu.com/", category: "personal", yearStart: 2000, yearEnd: 2004 },
  { name: "Real Ultimate Power", url: "http://www.realultimatepower.net/", category: "personal", yearStart: 2002, yearEnd: 2005 },
  { name: "Maddox (Best Page)", url: "http://maddox.xmission.com/", category: "personal", yearStart: 2002, yearEnd: 2005 },
  { name: "Pixyland (Peter Pan)", url: "http://www.pixyland.org/peterpan/", category: "personal", yearStart: 2001, yearEnd: 2005 },
  { name: "Girl Power", url: "http://www.girlpower.com/", category: "personal", yearStart: 1998, yearEnd: 2000 },
  { name: "Strawberry Shortcake Shrine", url: "http://www.geocities.com/EnchantedForest/Glade/1297/", category: "shrine", yearStart: 1999, yearEnd: 2001 },
  { name: "X-Files Fan Page", url: "http://www.geocities.com/Area51/Cavern/9222/", category: "shrine", yearStart: 1998, yearEnd: 2000 },
  { name: "Buffy The Vampire Slayer", url: "http://www.buffyslayer.com/", category: "shrine", yearStart: 1999, yearEnd: 2001 },
  { name: "Sailor Moon Shrine", url: "http://www.geocities.com/Tokyo/Towers/2020/", category: "shrine", yearStart: 1998, yearEnd: 2000 },
  { name: "Dragonball Z Citadel", url: "http://www.dragonballz.com/", category: "shrine", yearStart: 1999, yearEnd: 2001 },
  { name: "Temple of Screaming Electron", url: "http://www.totse.com/", category: "weird", yearStart: 1998, yearEnd: 2002 },
  { name: "Kibo's Page", url: "http://www.kibo.com/", category: "personal", yearStart: 1997, yearEnd: 2001 },
  { name: "Justin's Links", url: "http://www.links.net/", category: "personal", yearStart: 1996, yearEnd: 2000 },
  { name: "The Spark", url: "http://thespark.com", category: "weird", yearStart: 2000, yearEnd: 2003 },
  { name: "Hacker's Jargon", url: "http://www.tuxedo.org/~esr/jargon/", category: "culture", yearStart: 1998, yearEnd: 2001 },

  // =========================================================================
  // WEIRD WEB / VIRAL / MEMES
  // =========================================================================
  { name: "Time Cube", url: "http://timecube.com", category: "weird", yearStart: 1998, yearEnd: 2005 },
  { name: "Zombo.com", url: "http://zombo.com/", category: "weird", yearStart: 2000, yearEnd: 2005 },
  { name: "Hampster Dance", url: "http://www.hampsterdance.com/", category: "weird", yearStart: 1999, yearEnd: 2002 },
  { name: "Heaven's Gate", url: "http://www.heavensgate.com/", category: "weird", yearStart: 1996, yearEnd: 1997 },
  { name: "Rotten.com", url: "http://rotten.com", category: "weird", yearStart: 1998, yearEnd: 2002 },
  { name: "Bonsai Kitten", url: "http://bonsaikitten.com/", category: "weird", yearStart: 2001, yearEnd: 2002 },
  { name: "Steak and Cheese", url: "http://steakandcheese.com/", category: "weird", yearStart: 2001, yearEnd: 2003 },
  { name: "Badger Badger Badger", url: "http://badgerbadgerbadger.com/", category: "weird", yearStart: 2003, yearEnd: 2005 },
  { name: "Rather Good", url: "http://rathergood.com/", category: "weird", yearStart: 2002, yearEnd: 2005 },
  { name: "FogCam", url: "http://www.fogcam.org/", category: "weird", yearStart: 1998, yearEnd: 2005 },
  { name: "Dancing Baby", url: "http://www.dancingbaby.net/", category: "weird", yearStart: 1998, yearEnd: 2000 },
  { name: "Bert is Evil", url: "http://www.bertisevil.tv/", category: "weird", yearStart: 1998, yearEnd: 2001 },
  { name: "All Your Base", url: "http://www.planettribes.com/allyourbase/", category: "weird", yearStart: 2001, yearEnd: 2002 },
  
  // =========================================================================
  // GAMES / INTERACTIVE
  // =========================================================================
  { name: "Newgrounds", url: "http://newgrounds.com", category: "games", yearStart: 1999, yearEnd: 2003 },
  { name: "Neopets", url: "http://neopets.com", category: "games", yearStart: 2000, yearEnd: 2003 },
  { name: "Nintendo", url: "http://nintendo.com", category: "games", yearStart: 1997, yearEnd: 2000 },
  { name: "Lego", url: "http://lego.com", category: "games", yearStart: 1997, yearEnd: 2000 },
  { name: "Pokemon", url: "http://pokemon.com", category: "games", yearStart: 1998, yearEnd: 2000 },
  { name: "Stick Death", url: "http://stickdeath.com/", category: "games", yearStart: 2001, yearEnd: 2004 },
  { name: "X-Entertainment", url: "http://x-entertainment.com/", category: "culture", yearStart: 2000, yearEnd: 2004 },
  { name: "GameSpy", url: "http://gamespy.com", category: "games", yearStart: 1999, yearEnd: 2002 },
  { name: "IGN", url: "http://ign.com", category: "games", yearStart: 1998, yearEnd: 2001 },
  { name: "GameFAQs", url: "http://gamefaqs.com", category: "games", yearStart: 1999, yearEnd: 2002 },
  { name: "Sega", url: "http://sega.com", category: "games", yearStart: 1997, yearEnd: 2000 },
  { name: "PlayStation", url: "http://playstation.com", category: "games", yearStart: 1997, yearEnd: 2000 },
  { name: "3D Realms", url: "http://www.3drealms.com/", category: "games", yearStart: 1997, yearEnd: 2000 },
  { name: "id Software", url: "http://www.idsoftware.com/", category: "games", yearStart: 1996, yearEnd: 2000 },
  { name: "Blizzard", url: "http://www.blizzard.com/", category: "games", yearStart: 1997, yearEnd: 2000 },
  
  // =========================================================================
  // CORPORATE / CULTURE (The Normie Web)
  // =========================================================================
  { name: "Dole Kemp '96", url: "http://www.dolekemp96.org/main.htm", category: "culture", yearStart: 1996, yearEnd: 1997 },
  { name: "Toonami", url: "http://www.cartoonnetwork.com/toonami/", category: "culture", yearStart: 2001, yearEnd: 2004 },
  { name: "AltaVista", url: "http://altavista.com", category: "corporate", yearStart: 1996, yearEnd: 1998 },
  { name: "Apple Computer", url: "http://apple.com", category: "corporate", yearStart: 1997, yearEnd: 1999 },
  { name: "Yahoo!", url: "http://yahoo.com", category: "corporate", yearStart: 1996, yearEnd: 1998 },
  { name: "McDonalds", url: "http://mcdonalds.com", category: "corporate", yearStart: 1996, yearEnd: 2000 },
  { name: "CNN O.J. Simpson", url: "http://www.cnn.com/US/OJ/", category: "culture", yearStart: 1996, yearEnd: 1996 },
  { name: "Beanie Babies", url: "http://ty.com", category: "culture", yearStart: 1997, yearEnd: 1999 },
  { name: "Ebay", url: "http://ebay.com", category: "corporate", yearStart: 1997, yearEnd: 1999 },
  { name: "Amazon", url: "http://amazon.com", category: "corporate", yearStart: 1997, yearEnd: 1999 },
  { name: "Pets.com", url: "http://pets.com", category: "corporate", yearStart: 1999, yearEnd: 2000 },
  { name: "Webvan", url: "http://webvan.com", category: "corporate", yearStart: 1999, yearEnd: 2000 },
  { name: "Kozmo", url: "http://kozmo.com", category: "corporate", yearStart: 1999, yearEnd: 2000 },
  { name: "Y2K Information", url: "http://www.y2k.com", category: "culture", yearStart: 1999, yearEnd: 1999 },
  { name: "Microsoft", url: "http://microsoft.com", category: "corporate", yearStart: 1994, yearEnd: 1998 },
  { name: "Slashdot", url: "http://slashdot.org", category: "culture", yearStart: 1998, yearEnd: 2002 },
  { name: "Hotmail", url: "http://hotmail.com", category: "corporate", yearStart: 1998, yearEnd: 2000 },
  { name: "Napster", url: "http://napster.com", category: "culture", yearStart: 2000, yearEnd: 2001 },
  { name: "Drudge Report", url: "http://drudgereport.com", category: "culture", yearStart: 1997, yearEnd: 2001 },
  { name: "Suck.com", url: "http://suck.com", category: "culture", yearStart: 1996, yearEnd: 2000 },
  { name: "Feed Magazine", url: "http://feedmag.com", category: "culture", yearStart: 1996, yearEnd: 2000 },
];