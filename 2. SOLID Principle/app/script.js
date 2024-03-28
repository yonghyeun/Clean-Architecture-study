const users = {
  lastName: 'dongdong',
  age: 20,
};

export default function GreetingName ({users}) {
  return <h1>안녕하세요 {users.lastName} 님 </h1>
}


export default function GreetingAge ({users}) {
  return <h1>안녕하세요 {users.age} 살이시군요 </h1>
}