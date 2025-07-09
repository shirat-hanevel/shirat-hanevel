// מפתחות החיבור לסופהבייס - תמצא אותם בדשבורד של הפרויקט שלך תחת Settings -> API
const SUPABASE_URL = 'https://hstsknresadmypumqrrc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdHNrbnJlc2FkbXlwdW1xcnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5OTQ0NTQsImV4cCI6MjA2NzU3MDQ1NH0.dlfmEIKpWJ9loc-LcuOeJESLlSgNIktbVF6Lm9DoRcQ';

// יצירת חיבור לסופהבייס
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
