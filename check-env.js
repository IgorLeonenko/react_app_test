// Simple script to check environment variables
require('dotenv').config();

// Print database URL pattern without exposing credentials
const dbUrl = process.env.DATABASE_URL || 'Not set';
console.log('Database URL pattern:', dbUrl.replace(/:\/\/([^:]+)(:[^@]+)?@/, '://USERNAME:PASSWORD@'));
console.log('Database exists:', !!process.env.DATABASE_URL);
