import { useContext } from 'react';

export function App() {
  return <FristComponent></FristComponent>;
}

export function FristComponent() {
  return (
    <div>
      저는 첫번째 컴포넌트예요
      <SecondComponent></SecondComponent>
    </div>
  );
}

export function SecondComponent() {
  const content = useContext('ContentContext');
  return <div>{content}</div>;
}
