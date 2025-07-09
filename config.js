// יצירת חיבור לסופהבייס
const supabaseClient = supabase.createClient(
    'https://hstsknresadmypumqrrc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdHNrbnJlc2FkbXlwdW1xcnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5OTQ0NTQsImV4cCI6MjA2NzU3MDQ1NH0.dlfmEIKpWJ9loc-LcuOeJESLlSgNIktbVF6Lm9DoRcQ';
);

// ייצוא הלקוח כדי שיהיה זמין בקבצים אחרים
window.supabaseClient = supabaseClient;
