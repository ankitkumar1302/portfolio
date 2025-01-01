# Personal Portfolio Website

![Portfolio Preview](/public/projects/portfolio.png)

A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design aesthetic.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Engaging hover effects and transitions
- **Dynamic Navigation**: Scroll-based active section indicators
- **Performance Optimized**: Fast loading and smooth scrolling experience
- **Accessibility**: Semantic HTML and ARIA attributes for better accessibility

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankitkumar1302/portfolio.git
```

2. Navigate to the project directory
```bash
cd portfolio
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects/         # Project images
│   └── ...
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Projects.jsx
│   ├── App.jsx          # Main app component
│   └── index.js         # Entry point
└── ...
```

## 🎨 Customization

### Styling
- The project uses Tailwind CSS for styling
- Custom colors and theme can be modified in `tailwind.config.js`
- Global styles are defined in `src/index.css`

### Content
- Update project information in `src/components/Projects.jsx`
- Modify experience details in `src/components/Experience.jsx`
- Edit about section in `src/components/About.jsx`
- Update contact information in `src/components/Contact.jsx`

## 📱 Responsive Design

The portfolio is responsive across various device sizes:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## ⚡ Performance

- Optimized images
- Lazy loading components
- Efficient animation handling
- Minimal bundle size

## 🚀 Deployment

The site is deployed on Vercel. To deploy your own version:

1. Create a Vercel account
2. Connect your GitHub repository
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
 

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
