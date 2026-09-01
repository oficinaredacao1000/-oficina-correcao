const sb=supabase.createClient(SUPABASE_CONFIG.url,SUPABASE_CONFIG.key);
login.onsubmit=async e=>{e.preventDefault();msg.textContent='Entrando...';const {error}=await sb.auth.signInWithPassword({email:email.value,password:password.value});if(error)msg.textContent=error.message;else location='dashboard.html';};
