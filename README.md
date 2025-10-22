# IFML Fall Research Symposium 2025

![Generative AI Workshop Banner](./public/Generative%20AI%20Workshop%202025%20-%20v1%20(Posters%20(Portrait,%2034))%20(Retractable%20Banners)%20(Banners%20(Portrait))%20(Notebooks)%20(7200%20x%202560%20px).png)

## About

This is the official website for the **IFML Fall Research Symposium 2025**, celebrating the Institute for Foundations of Machine Learning's 5-year renewal. The event brings together leading academic and industrial researchers to discuss cutting-edge topics in Generative AI.

### Event Details

- **Date**: November 5th, 2025
- **Location**: Mulva Auditorium, Engineering Education and Resource Center, 2501 Speedway, Austin, TX 78712
- **Hosted by**: University of Texas at Austin - Center for Generative AI & Machine Learning Laboratory

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Agenda**: Expandable session cards with detailed descriptions and speaker affiliations
- **Registration System**: Integrated Google Forms for easy event registration
- **Modern UI**: Built with Tailwind CSS featuring UT Austin's brand colors (burnt orange, slate, tan)
- **Dynamic Content**: Real-time speaker information, session types, and organizational logos

## Technology Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Database**: Supabase (configured and ready)

## Project Structure

```
├── public/               # Static assets and images
│   ├── logos/           # Organization and sponsor logos
│   └── banner.png       # Event promotional materials
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx     # Landing section
│   │   ├── About.tsx    # Event information
│   │   ├── Agenda.tsx   # Schedule and speakers
│   │   ├── Registration.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main application
│   └── main.tsx         # Application entry point
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Key Features Breakdown

### Agenda Component
- Interactive expandable cards for each session
- Color-coded session types (keynote, tutorial, panel, break)
- Speaker affiliations with organizational logos (visible on expand)
- Time-based organization throughout the day

### Registration
- Embedded Google Forms integration
- Responsive iframe implementation
- Clear call-to-action messaging

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized typography and spacing
- Accessible color contrast ratios

## Sponsors & Partners

- National Science Foundation (NSF)
- Institute for Foundations of Machine Learning (IFML)
- University of Texas at Austin
- Google
- Cisco Foundation AI

## Contributing

This is an event-specific website. For any updates or corrections, please contact the IFML team.

## License

© 2025 University of Texas at Austin - Center for Generative AI. All rights reserved.

## Contact

For questions about the event or website, please reach out through the registration form or visit the official IFML website.
