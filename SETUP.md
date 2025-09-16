# Modern Myofunctional Therapy - Setup Guide

This guide will help you set up the Modern Myofunctional Therapy website with Supabase backend integration.

## Prerequisites

- Node.js (v14 or higher)
- A Supabase account
- A Formspree account (for contact forms)

## 1. Supabase Setup

### Create a new Supabase project:
1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Choose your organization and enter project details
5. Wait for the project to be created

### Configure the database:
1. Go to the SQL Editor in your Supabase dashboard
2. Copy and paste the contents of `supabase-migrations.sql`
3. Run the SQL script to create all necessary tables

### Get your project credentials:
1. Go to Settings > API
2. Copy your Project URL and anon public key
3. Update `assets/js/config.js` with your credentials:
   ```javascript
   const SUPABASE_URL = 'https://your-project.supabase.co';
   const SUPABASE_ANON_KEY = 'your-anon-key-here';
   ```

## 2. Formspree Setup

### Create a Formspree account:
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy the form endpoint URL

### Update the configuration:
1. Update `assets/js/config.js` with your Formspree endpoint:
   ```javascript
   const FORMPREE_ENDPOINT = 'https://formspree.io/f/your-form-id';
   ```

## 3. File Structure

```
/
├── index.html              # Main website
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── faq.html               # FAQ page
├── articles.html          # Articles/blog page
├── conditions.html        # Conditions page
├── privacy.html           # Privacy policy
├── terms.html             # Terms of service
├── script.js              # Main JavaScript
├── styles.css             # Main stylesheet
├── assets/
│   ├── css/
│   │   └── styles.css     # Additional styles
│   ├── js/
│   │   ├── main.js        # Main JavaScript with Supabase
│   │   ├── admin.js       # Admin portal JavaScript
│   │   └── config.js      # Configuration file
│   └── img/               # Images
├── admin/
│   ├── index.html         # Admin portal
│   └── login.html         # Admin login
└── supabase-migrations.sql # Database schema
```

## 4. Admin Portal Setup

### Access the admin portal:
1. Navigate to `/admin/login.html`
2. Use the default credentials:
   - Username: `admin`
   - Password: `admin123`
3. Change these credentials in production!

### Admin features:
- Manage articles and blog posts
- Manage testimonials
- Manage services and pricing
- Update website settings
- View contact form submissions

## 5. Content Management

### Adding Articles:
1. Log into the admin portal
2. Go to the Articles section
3. Click "Add New Article"
4. Fill in the title, excerpt, and content
5. Set published status

### Managing Testimonials:
1. Go to the Testimonials section
2. Add new testimonials or edit existing ones
3. Set approval status and featured status

### Updating Services:
1. Go to the Services section
2. Add, edit, or remove services
3. Set pricing and features

## 6. Customization

### Styling:
- Main styles are in `styles.css`
- Additional styles in `assets/css/styles.css`
- Uses Material Design 3 color system
- Fully responsive design

### Content:
- Update contact information in `assets/js/config.js`
- Modify hero section in `index.html`
- Update service descriptions and pricing

## 7. Deployment

### Static Hosting (Recommended):
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Steps:
1. Upload all files to your hosting service
2. Ensure `index.html` is in the root directory
3. Test all functionality
4. Update any hardcoded URLs if needed

## 8. Security Considerations

### For Production:
1. Change default admin credentials
2. Set up proper authentication
3. Enable HTTPS
4. Regular backups of Supabase data
5. Monitor for security updates

### Supabase Security:
- Review Row Level Security policies
- Set up proper user authentication
- Regular security audits

## 9. Maintenance

### Regular Tasks:
- Update content through admin portal
- Monitor contact form submissions
- Backup database regularly
- Update dependencies
- Monitor website performance

### Troubleshooting:
- Check browser console for JavaScript errors
- Verify Supabase connection
- Test form submissions
- Check mobile responsiveness

## 10. Support

For technical support or questions:
- Check the Supabase documentation
- Review the Formspree documentation
- Contact your web developer

## Features Included

- ✅ Responsive design
- ✅ Material Design 3 styling
- ✅ Admin portal for content management
- ✅ Contact forms with Formspree integration
- ✅ Supabase database integration
- ✅ SEO optimized
- ✅ Accessibility features
- ✅ Mobile-friendly navigation
- ✅ Animated counters and interactions
- ✅ Testimonial carousel
- ✅ Consultation booking modal

## License

This project is proprietary. All rights reserved.
