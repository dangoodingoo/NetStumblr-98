# NetStumblr 98 💾

**A time-traveling web explorer with a Windows 98 aesthetic.**

NetStumblr 98 allows users to "stumble" upon forgotten corners of the early internet. From personal Geocities neighborhoods to the original Space Jam website, explore the web as it was meant to be seen: on a CRT monitor at 800x600.

## 📺 Features

*   **Authentic Windows 98 UI**: Pixel-perfect buttons, dialogs, and window chrome.
*   **CRT Monitor Simulation**: Custom CSS shader effect with RGB subpixel masking, scanlines, and tube curvature.
*   **Hybrid Time-Travel Engine**: Intelligently switches between "Live" surviving websites (for instant loading) and specific "Golden Era" Wayback Machine snapshots.
*   **Curated "Deep Web" Database**: Hand-picked seed list including Geocities neighborhoods, Webrings, and obscure personal sites to ensure high-quality randomness.
*   **Zero-Cost Architecture**: Runs entirely client-side. No API keys, no backend servers, no monthly costs.
*   **History Navigation**: Fully functional Back/Forward buttons and Dropdown history list.

## 🛠️ Tech Stack

*   **Framework**: React 18 + TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS + Custom "Win98" CSS implementation
*   **Icons**: Lucide React + Inline SVGs

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/dangoodingoo/Randomness.git
    cd Randomness
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📦 Deployment

This project is optimized for deployment on **Vercel** or **Netlify**.

1.  Push your code to GitHub.
2.  Import the repository into Vercel/Netlify.
3.  The build settings (`npm run build` and `dist` folder) will be detected automatically.

## 🤝 Contributing

Got a cool forgotten website? Submit a PR to add it to `constants.ts`!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.
