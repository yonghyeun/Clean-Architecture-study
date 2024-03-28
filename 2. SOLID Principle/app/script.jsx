const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const AdminButton = ({ label, onClick }) => {
  return <Button onClick={onClick} label={`Admin : ${label}`} />;
};

const UserButton = ({ label, onClick }) => {
  return <Button onClick={onClick} label={`User : ${label}`} />;
};
