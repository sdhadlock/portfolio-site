# Portfolio Website - Spencer Hadlock

A modern, responsive portfolio website with a dark theme and blue accents, built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages.

## Features

- 🎨 Modern dark theme with blue accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling and animations
- 🎯 Easy to customize
- 🚀 Ready for GitHub Pages deployment

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and background
- **Projects**: Showcase your work with project cards
- **Skills**: Display your technical skills
- **Contact**: Links to your social media and contact information

## Customization

### Personal Information

1. **Name and Title**: Update in `index.html`
   - Line 7: Update `<title>`
   - Line 20: Update nav brand
   - Line 30: Update hero title and subtitle
   - Line 90: Update footer copyright

2. **About Section**: Edit the about text in `index.html` (lines 45-55)

3. **Projects**: Replace the placeholder projects with your own:
   - Update project titles, descriptions, and tags
   - Add links to live demos and GitHub repositories
   - Replace placeholder images with actual project screenshots

4. **Skills**: Update the skills in `index.html` (lines 100-130)

5. **Contact Links**: Update all contact links in `index.html`:
   - Email address
   - GitHub profile
   - LinkedIn profile
   - Resume PDF (add your resume.pdf file to the root directory)

### Styling

- **Colors**: The site uses a dark theme with blue accents. Modify CSS variables in `styles.css` (lines 8-17) to customize colors
- **Fonts**: Change the font-family in `styles.css` (line 21)

### Resume

- Add your resume PDF file as `resume.pdf` in the root directory for the download button to work

## Deployment to GitHub Pages

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/your-repo-name/`

3. **Custom Domain (Optional)**:
   - In the GitHub Pages settings, you can add a custom domain
   - Follow GitHub's instructions for DNS configuration

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own portfolio!

## Credits

Built with ❤️ for showcasing your work and skills.

