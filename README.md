# Runner by Ariyan 🏃‍♂️💨

A 3D Subway-style Endless Runner game featuring dynamic 3D gameplay, custom face texture mapping directly on the character, and custom audio effects.

---

## 📁 Repository Structure
```
├── index.html        # Complete 3D Game Engine (Three.js), touch controls, and UI
├── audio 1.mp3       # Sound Effect 1: Game Start & Chase Theme
├── adio 2.mp3        # Sound Effect 2: Jump Sound
├── audio 3 .mp3      # Sound Effect 3: Game Over Sound
├── manifest.json     # PWA Manifest (allows installation on Android)
├── sw.js             # Service Worker for offline play & Android installation
└── README.md         # Deployment & Setup Guide
```

---

## 🚀 How to Launch on GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub](https://github.com) account.
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (for example: `runner-by-ariyan`).
4. Set it to **Public**.
5. Click **Create repository**.

### Step 2: Upload the Files
1. In your newly created repository, click **Upload files** (or drag & drop).
2. Unzip `runner-by-ariyan.zip` and upload all files directly into the repository root:
   - `index.html`
   - `audio 1.mp3`
   - `adio 2.mp3`
   - `audio 3 .mp3`
   - `manifest.json`
   - `sw.js`
3. Click **Commit changes**.

### Step 3: Enable GitHub Pages
1. Go to your repository's **Settings** tab.
2. On the left sidebar, click **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.
5. Wait 1–2 minutes. GitHub will provide your live URL:
   `https://<your-username>.github.io/runner-by-ariyan/`

---

## 📱 How to Download & Install on Android

1. Open your live GitHub Pages link in **Google Chrome** on your Android phone.
2. You will see an **"Install App"** button directly on the game start menu, or you can tap Chrome's three dots (`⋮`) in the top right corner.
3. Tap **"Add to Home screen"** or **"Install app"**.
4. The game will be installed as an APK-style full-screen app on your Android home screen with the app title **"Runner by Ariyan"**.

---

## 🎮 Controls
- **Swipe Left / A / Left Arrow**: Move Left
- **Swipe Right / D / Right Arrow**: Move Right
- **Swipe Up / W / Up Arrow / Space**: Jump (triggers `adio 2.mp3`)
- **Swipe Down / S / Down Arrow**: Slide under hurdles
- **On-Screen Touch Buttons**: Left, Right, Jump, Slide buttons provided on mobile screens
- **Face Button**: Click the avatar on the home screen to upload any portrait photo and map it onto the 3D character in real time!
