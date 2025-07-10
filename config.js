// יצירת חיבור לסופהבייס
const supabaseClient = supabase.createClient(
    'https://hstsknresadmypumqrrc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdHNrbnJlc2FkbXlwdW1xcnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5OTQ0NTQsImV4cCI6MjA2NzU3MDQ1NH0.dlfmEIKpWJ9loc-LcuOeJESLlSgNIktbVF6Lm9DoRcQ';
);
async function testBasicConnection() {
		  try {
			console.log('🔍 בודק חיבור בסיסי לסופהבייס...')
			
			// בדיקה פשוטה - שליפת גרסת הדטאבייס
			const { data, error } = await supabase
			  .from('pg_stat_database')
			  .select('datname')
			  .limit(1)
			
			if (error) {
			  console.error('❌ שגיאה בחיבור:', error.message)
			  return false
			}
			
			console.log('✅ חיבור בסיסי תקין!')
			return true
		  } catch (err) {
			console.error('❌ שגיאה כללית:', err.message)
			return false
		  }
		}
testBasicConnection()

// ייצוא הלקוח כדי שיהיה זמין בקבצים אחרים
window.supabaseClient = supabaseClient;
