# Quick Editing Guide

This guide will help you easily edit your portfolio website.

## 📁 File Structure

```
portfolio-site/
├── index.html      ← Main content (text, images, links)
├── styles.css      ← Colors, fonts, spacing, layout
├── script.js       ← Interactive features (usually don't need to edit)
├── images/         ← Put all your images here
└── README.md       ← This file
```

## 🖼️ Adding Images

### Step 1: Create an images folder
Create a folder called `images` in your project root (same level as index.html)

### Step 2: Add your images
Put your image files (jpg, png, etc.) in the `images` folder

### Step 3: Use images in your HTML

**For Project Images:**
Find the project card section (around line 70-125 in index.html) and replace:
```html
<div class="project-placeholder">Project Image</div>
```
with:
```html
<img src="images/your-project-image.jpg" alt="Project 1">
```

**For Profile Picture (in About section):**
You can add a profile picture by adding this in the About section:
```html
<div class="about-content">
    <img src="images/profile-picture.jpg" alt="Spencer Hadlock" class="profile-pic">
    <div class="about-text">
        <!-- your text here -->
    </div>
</div>
```

## ✏️ Editing Text Content

### Change Your Name/Title
- **Line 7**: Page title (what shows in browser tab)
- **Line 14**: Name in navigation bar
- **Line 34**: Name in hero section
- **Line 35-36**: University and major

### Edit About Section
- **Lines 51-59**: Edit the paragraphs about yourself

### Edit Projects
- **Lines 75, 94, 113**: Project titles (change "Project 1" to your project name)
- **Lines 76, 95, 114**: Project descriptions
- **Lines 78-80, 97-99, 116-118**: Technology tags

### Edit Skills
- **Lines 137-143**: Change "Skill 1", "Skill 2", etc. to your actual skills

### Edit Contact Links
- **Line 175**: Email address (change `your.email@example.com`)
- **Line 179**: GitHub link (change `yourusername`)
- **Line 183**: LinkedIn link (change `yourusername`)
- **Line 187**: Resume link (make sure you have `resume.pdf` file)

## 🎨 Changing Colors & Styling

Open `styles.css` and look for the `:root` section at the top (lines 8-17):

```css
:root {
    --primary-color: #3b82f6;      /* Main blue color */
    --secondary-color: #60a5fa;    /* Lighter blue */
    --accent-color: #2563eb;       /* Darker blue */
    --text-color: #e5e7eb;         /* Light text */
    --bg-color: #0f172a;          /* Dark background */
    --bg-light: #1e293b;          /* Slightly lighter dark */
}
```

Change these hex codes to any color you want! Use a color picker tool online to find hex codes.

## 📐 Moving Sections Around

Sections are clearly marked in `index.html`:
- **Hero Section**: Lines 30-43
- **About Section**: Lines 45-63
- **Projects Section**: Lines 65-128
- **Skills Section**: Lines 130-145
- **Contact Section**: Lines 167-193

To reorder sections, just cut and paste entire sections. For example, to put Projects before About, cut lines 65-128 and paste them before line 45.

## 🖱️ Adding/Removing Project Cards

To add a new project, copy this entire block (lines 70-87):
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">Project Image</div>
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Description here</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link" target="_blank">Live Demo</a>
            <a href="#" class="project-link" target="_blank">GitHub</a>
        </div>
    </div>
</div>
```

Paste it inside the `<div class="projects-grid">` section and update the content.

## 💡 Tips

1. **Always test**: Open `index.html` in a browser after making changes
2. **Use a code editor**: VS Code, Notepad++, or even Notepad works
3. **Save often**: Save your file and refresh the browser to see changes
4. **Backup**: Make a copy before making big changes
5. **Image sizes**: Keep images under 1MB for faster loading. Use tools like TinyPNG to compress.

## 🚀 Quick Start Checklist

- [ ] Create `images` folder
- [ ] Add your resume as `resume.pdf`
- [ ] Update all contact links with your real info
- [ ] Replace "Project 1/2/3" with real project names
- [ ] Replace "Skill 1/2/3" with real skills
- [ ] Add project images
- [ ] Update about section text
- [ ] Test in browser

## 🆘 Common Issues

**Images not showing?**
- Make sure the `images` folder is in the same directory as `index.html`
- Check the file path in your `<img src="">` tag matches the actual filename
- Use lowercase filenames (e.g., `project1.jpg` not `Project1.JPG`)

**Changes not showing?**
- Save the file
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check for typos in your code

**Want to preview locally?**
- Just double-click `index.html` to open in browser
- Or use a local server (see README.md)

