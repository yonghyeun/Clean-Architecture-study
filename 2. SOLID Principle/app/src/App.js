import './App.css';

export default function App() {
  return (
    <div>
      <Button label='Just Button' />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

function Button({ label, ...props }) {
  return <button {...props}>{label}</button>;
}

function HoverButton({ label, onClick }) {
  function handleMouseEnter(e) {
    e.target.classList.add('active');
  }

  function handleMouseLeave(e) {
    e.target.classList.remove('active');
  }

  return (
    <Button
      label={label}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

function LoginButton({ label = 'LogIn' }) {
  function handleLogin() {
    /* 로그인 로직 */
  }
  return <HoverButton label={label} onClick={handleLogin} />;
}

function LogoutButton({ label = 'LogOut' }) {
  function handleLogout() {
    /* 로그인 로직 */
  }
  return <HoverButton label={label} onClick={handleLogout} />;
}
