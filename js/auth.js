async function login(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (!error) window.location = "index.html";
}
