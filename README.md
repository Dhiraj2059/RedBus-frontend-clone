# 🚌 NepBus - Nepal's Premier Bus Booking Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, responsive bus ticket booking platform specifically designed for Nepal. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a complete booking flow from search to payment.

## 🌟 Features

### 🎯 Core Functionality
- **Bus Ticket Booking**: Complete booking flow with seat selection
- **Route Search**: Search buses between major Nepali cities
- **Date Selection**: Calendar picker with past date prevention
- **Passenger Management**: Support for multiple passengers
- **Real-time Availability**: Live seat availability checking

### 🚗 Additional Services
- **rPool**: Ride-sharing service for shared transportation
- **Primo Bus**: Premium luxury bus service with enhanced amenities
- **Holiday Packages**: Curated tourism packages for Nepal destinations
- **24/7 Support**: Round-the-clock customer assistance

### 💻 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Intuitive Interface**: Clean, user-friendly design
- **Fast Performance**: Optimized loading and smooth interactions
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Date Handling**: date-fns

### Development Tools
- **Package Manager**: npm/yarn
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/nepbus-clone.git
   cd nepbus-clone
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
nepbus-clone/
├── app/                    # Next.js App Router pages
│   ├── booking/           # Booking confirmation page
│   ├── bookings/          # User bookings management
│   ├── bus/[id]/          # Individual bus details
│   ├── help/              # Help and support
│   ├── holidays/          # Holiday packages
│   ├── login/             # User authentication
│   ├── primo-bus/         # Premium bus service
│   ├── rpool/             # Ride-sharing service
│   ├── search/            # Bus search results
│   ├── signup/            # User registration
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── date-picker.tsx    # Custom date picker
│   ├── footer.tsx         # Site footer
│   └── header.tsx         # Site header
├── lib/                   # Utility functions
│   └── utils.ts           # Helper utilities
├── public/                # Static assets
│   ├── bus-hero-bg.png    # Hero background image
│   └── placeholder.svg    # Placeholder images
└── package.json           # Dependencies and scripts
\`\`\`

## 🇳🇵 Nepal-Specific Features

### Popular Routes
- **Kathmandu ↔ Pokhara**: Most popular tourist route
- **Kathmandu ↔ Chitwan**: Wildlife safari destination
- **Pokhara ↔ Lumbini**: Religious pilgrimage route
- **Kathmandu ↔ Biratnagar**: Eastern Nepal connection

### Local Customization
- **Currency**: Nepali Rupees (Rs.)
- **Cities**: Major Nepali cities and destinations
- **Contact**: Nepal-specific phone numbers (+977)
- **Language**: English with Nepal context

### Tourism Integration
- **Everest Base Camp Trek**: Adventure packages
- **Annapurna Circuit**: Trekking routes
- **Chitwan Safari**: Wildlife experiences
- **Cultural Tours**: Heritage site visits

## 🎨 Design System

### Color Palette
- **Primary**: Red (#DC2626) - Traditional Nepal color
- **Secondary**: Gray shades for text and backgrounds
- **Accent**: White for contrast and clarity

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable font sizes and line heights
- **Labels**: Consistent form labeling

### Components
- **Cards**: Consistent spacing and shadows
- **Buttons**: Clear call-to-action styling
- **Forms**: User-friendly input design
- **Navigation**: Intuitive menu structure

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile Features
- **Touch-friendly**: Large tap targets
- **Swipe gestures**: Natural mobile interactions
- **Optimized forms**: Mobile keyboard support
- **Fast loading**: Optimized images and code

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: TypeScript checking

### Code Quality
- **TypeScript**: Strict type checking
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Write descriptive component names
- Maintain responsive design principles
- Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

### Contact Information
- **Email**: support@nepbus.com
- **Phone**: +977-1-4567890
- **Address**: Kathmandu, Nepal

### Help Resources
- **Documentation**: Comprehensive guides
- **FAQ**: Common questions answered
- **Live Chat**: Real-time support
- **Community**: Developer community support

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and deployment
- **shadcn**: For the beautiful UI components
- **Tailwind CSS**: For the utility-first CSS framework
- **Nepal Tourism**: For inspiration and local insights

---

**Built with ❤️ for Nepal's transportation needs**

*Making bus travel booking simple, safe, and convenient for everyone in Nepal.*
