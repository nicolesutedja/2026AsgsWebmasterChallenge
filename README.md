# 🎨 2026 A.S. Graphics Studio: Webmaster Challenge

> **Hello A.S. Graphics Studio Team! 👋**
> 
> Thank you so much for giving me the opportunity to do this coding challenge for the Webmaster position and for taking the time to review my code submission. I truly appreciate your consideration and am excited about the possibility of bringing my web development experience to the team. <br>- Nicole 
> 

## 🚀 Overview

This repository contains my submission for the A.S. Graphics Studio Webmaster coding challenge. I have built a fully responsive, interactive single-page event website dedicated to **ASCE Bear Gardens** based on the Figma provided. 

The architecture focuses on clean componentization, robust state management, and a highly polished user experience using modern web animation techniques and accessible UI primitives.

**Check out the website [here](https://nicolesutedja.github.io/2026AsgsWebmasterChallenge/) or you can also follow the directions below to get a local copy running!**

### Built With
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)


## ✨ Key Features & Highlights

* **Fluid Animations:** Integrated `framer-motion` for smooth, directional scroll reveals (e.g., items sliding in from the left/right) and staggered entry animations for the Past Events grid.
* **Responsive Architecture:** Features a custom hook (`useIsMobile`) to conditionally render optimized layouts.
  * The "Details" section dynamically switches from a desktop CSS Grid layout to a mobile-friendly Accordion.
  * Fully functional, state-driven mobile hamburger navigation menu.
* **Custom Image Carousel:** Built a fully controlled `HeroCarousel` with auto-play functionality, dot indicators, and manual navigation.
* **Accessible UI Components:** Leveraged `@radix-ui/react-*` primitives to ensure components like Accordions and standard UI elements remain accessible and keyboard-friendly.
* **Clean Project Structure:** Modular design separating UI primitives (`src/app/components/ui/`), main layout components, and global styles.

## 💡 Planning, Ideation & Research

In approaching this challenge, my goal was to bridge the gap between static design and a fluid, accessible user experience:

- **Tech Stack Choice**: I chose React and TypeScript for robust component architecture, paired with the brand-new Tailwind CSS v4 to leverage the latest performance optimizations. 

- **Animation choices**: I wanted to make sure that the animations made the website feel clean, friendly and in a way that wasn't too flashy. I took advantage of different animations throughout, most notably the staggered pop-up animation for the Past Events Section.

- **Visual Polish**: I ensured the Hero Carousel maintained its exact aspect ratio across all viewports so that no artwork was cropped. Similarly, I adjusted the view for all images in the Past Events section to match the Figma and ensure no text is cropped.

- **Research**: Some research I did was referencing the current A.S. Graphic Studio website and UCSD official websites, capturing a similar vibe and structure to the best of my ability to reflect what work would most be expected from me.


## 💻 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

### 1. Clone the repository

Clone the project files to your local machine using Git. Open your terminal and run:

```bash
git clone https://github.com/nicolesutedja/2026AsgsWebmasterChallenge.git
```

### 2. Navigate to the project directory


```bash
cd 2026AsgsWebmasterChallenge
```
### 3. Install the dependencies

Download all required packages.

```bash
npm i
```

### 4. Start the development server

```bash
npm run dev
```

### 5. View the project

After running the command above, your terminal will output a local network address. <br>Open your browser and navigate to the URL shown in your terminal to view the website.

---
## Thank You for Considering my Coding Challenge! ♡
