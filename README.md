# Modern Myofunctional Therapy Website

A modern static website with Supabase-powered admin portal for content management.

## Quick Setup

### 1. Supabase Setup
1. Create project at [supabase.com](https://supabase.com)
2. Run `supabase-migrations.sql` in SQL Editor
3. Create `public-images` storage bucket (public)

### 2. Configuration
Update `assets/js/config.js`:
```javascript
const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_URL',
  anonKey: 'YOUR_SUPABASE_ANON_KEY',
  storageBucket: 'public-images'
};
```

### 3. Admin Access
1. Create user in Supabase Auth
2. Make admin: `UPDATE profiles SET role = 'admin' WHERE email = 'your-email@example.com';`

### 4. Deploy
Upload to any static host (Netlify, Vercel, etc.)

## Features

- **Public Site**: Responsive, Material Design, dark/light theme
- **Admin Portal**: `/admin/login.html` for content management
- **Dynamic Content**: All content loaded from Supabase
- **Image Management**: Drag & drop upload with compression
- **Form Handling**: Contact forms with spam protection

## File Structure

```
/
├── index.html, services.html, etc.  # Public pages
├── admin/                           # Admin portal
├── assets/css/styles.css            # Material Design CSS
├── assets/js/                       # JavaScript files
└── supabase-migrations.sql         # Database schema
```

## Usage

1. **Public**: Visit `index.html`
2. **Admin**: Go to `/admin/login.html` and sign in
3. **Content**: Use dashboard tabs to manage all content

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Supabase (PostgreSQL, Auth, Storage)
- Material Design 3
- Formspree (contact forms)

Built for Modern Myofunctional Therapy.