# 구조적 프로그래밍

## 정의

구조적 프로그래밍이란 최초로 적용된 패러다임으로 <strong>제어흐름의 직접적 전환</strong>에 대한 규칙을 부과한 패러다임이다.

구조적 프로그래밍 이전 코드는 `goto` 문장을 통해 제어 흐름을 조작했다.

예를 들어 `i` 라는 변수를 이용해 1부터 10까지 순회하며 `I` 가 5가 아닐 때 `I` 의 값을 프린트 하는 코드를 작성한다고 해보자

`goto` 문장의 예시는 다음과 같다.

```
10 FOR I = 1 TO 10
20 IF I = 5 THEN GOTO 40
30 PRINT I
40 NEXT I
```

가장 좌측에 존재하는 숫자는 코드의 라인을 의미한다.

`I` 를 10까지 반복하며 `I` 가 5일 때는 코드 라인 40으로 이동하게 하고 아닐 경우엔 `I` 값을 프린트하게 한다.

이런 `goto` 문장은 코드의 가독성을 떨어뜨리는 일명 스파게티 코드이다.

이 때 구조적 프로그래밍 패러다임이 등장하는데 이는 `if , then , else` 와 같은 제어문과 `do , while` 과 같은 반복문의 구조로 제어 흐름을 전환하는 방법이였다.

```python
for i in range(1, 11):
    if i != 5:
        print(i)
```

> 파이썬이 구조적 프로그래밍은 아니지만 조건문과 반복문의 예시르 보여주기 적합하다 생각하여 넣어주었다.

## 의의

### 등장 배경

구조적 프로그래밍의 의의는 단순하게 조건문과 반복문을 이용했다는 점이 아니다.

구조적 프로그래밍이 갖는 의의는 구조적 프로그래밍이 생겨난 배경지식을 먼저 알아야 한다.

구조적 프로그래밍을 제시한 데이크스트라는 프로그래머들이 거대한 프로그래밍을 할 만큼 뇌의 용량이 충분하지 않음을 지적했다.

거대한 하나의 프로그램을 완성하기 위해선 수 많은 세부 사항등을 다뤘어야 하는데

수 많은 세부사항을 모두 기억하기엔 인간의 뇌 용량은 한정적이였다는 것이다.

이로 인해 거대한 프로그램은 잦은 오류가 발생하곤 했다.

이에 데이크스트라는 거대한 프로그램을 작성 할 때, 해당 프로그램이 무결한지 아닌지를 판단하기 위해

<strong>수학적 증명</strong>을 통해 프로그램을 사정하려 하였다.

사용한 수학적 증명은 증명 불가능한 사실인 가장 작은 단위의 **공리** 부터 시작하여

거대한 정리들을 증명해나가는 방식을 제시했다.

> 이러한 정리의 계층 구조를 유클리드 계층구조라고 한다.

유클리드 계층구조를 위한 방식에서 `goto` 문법은 증명 과정에서 효율적이지 않음을 깨닫고

제어문과 반복문을 통해 **공리** 를 이용한 제어 , 반복문을 이용한 **귀납적 증명** 을 시도하였고 이는 효과적으로 잘 작동했다.

예를 들어 설명하자면 어떤 거대한 프로그램이 잘 작동하는지 확인하기 위해 제어문을 통해 어떤 조건을 만족하지 못하면 오류를 발생시킨다거나

가능한 모든 경우를 반복문을 통해 오류를 확인하는 귀납적 증명을 가능하게 하였다.

이는 고되고 힘든 작업이였지만 모든 증명을 엄밀하게 완료한다면 거대했던 프로그래밍이 완전 무결함을 증명하는 것이 가능했다.

### 기능적 분해

공리와 같은 작은 단위로 나누고 , 공리들로 이뤄진 무결한 작은 부분들 , 무결한 작은 부분들이 모인 거대한 부분 , 거대한 부분으로 이뤄진 거대한 프로그램 하나를 만듦으로 통해

거대한 프로그램을 **여러 부분들로 나뉜 , 즉 모듈과 컴포넌트들의 조합** 으로 프로그래밍 하는 것이 가능했다.

### 수학적 증명에서 과학적 증명으로

하지만 모든 경우의 수에서 옳다는 것을 증명하는 수학적 증명 방법은 수학적 증명식 프로그래밍 방법은 너무나도 고되고 귀찮은 작업이다.

이에 프로그래머들은 과학적 증명을 사용했다.

과학적 증명은 , 해당 정리를 <strong>반증하는 특별한 경우가 없다면 충분히 옳음을 인정하는 방법이다.</strong>

이에 거대한 프로그램을 모듈과 컴포넌트로 나누는 개념은 동일하지만

<strong>모든 코드가 옳음을 증명하는 방향에서, 모든 코드가 적당히 틀리지 않음</strong>을 증명해나가는,

테스트라는 개념이 등장했다.

> ### 구조적 프로그래밍 정리
>
> 구조적 프로그래밍이 갖는 의의는 두가지가 존재한다.
>
> 1. 초기의 구조적 프로그래밍은 거대한 프로그램을 설계하기 위해선 모듈과 컴포넌트의 구조적 분해를 이룬 후 각 작은 단위들이 항상 옳음을 증명하는 수학적 증명 방식의 프로그래밍을 제시했다. <br/>
>    효과적인 수학적 증명 방식을 위해 제어문과 반복문의 개념이 등장했다.
>    <br/>
> 2. 수학적 증명 방식은 고되고 힘들었기에 모든 경우에서 옳음을 증명하는 수학적 증명방식이 아닌 , 문제가 없다면 적당히 옳음을 채택하는 과학적 증명 방식인 테스트 개념이 도입되었다.

---

# 객체 지향 프로그래밍

좋은 아키텍쳐를 구현한다는 것은 객체 지향적 사고를 잘 이용한다는 것과 같기에 객체 지향 프로그래밍은 중요하다.

객체 지향 프로그래밍은 함수 호출 스택 프레임을 힙으로 옮기게 된다면 함수 내에 존재하는 지역 변수 등이 사라지지 않고 존재한다는 것을 발견한 이후 도입되었다.

이를 통해 함수들은 생성자가 되고 , 지역 변수는 인스턴스 , 중첩 함수는 메소드가 되었다.

객체 지향 프로그래밍이 무엇인지에 대한 정의를 살펴보면 자주 나오는 단어는 **실제 세계를 모델링** 한다는 이야기일 것이다.

하지만 이는 너무나도 모호한 정의이다.

이에 객체 지향 (`Object Orient`) 를 설명하는 세 가지 개념에 대해 알아보자

## 캡슐화

캡슐화는 데이터와 함수를 쉽고 효과적으로 관리하게 도와주는 개념이다.

캡슐화를 통해 데이터와 함수를 응집력 있는 하나의 구성된 집단으로 구분 짓고

독립적인 두 집단은 구분 선 내에 존재하는 변수나 메소드에 접근 할 수 없게 하는 개념이다.

## 추상화

추상화란 복잡한 현실을 숨기고 필요한 부분만 노출 시키는 개념이다.

예를 들어 **Animal** 이라는 객체를 생성한다고 했을 때 실제 세계의 `Animal` 의 기능은 몇 백, 몇 천 혹은 몇 십억개의 기능들을 가지고 있을 것이다.

이 때 모든 기능을 구현하는 것이 아니라 , 해당 객체가 가지고 있는 것들 중 필요한 부분만 사용하는 것으로

**객체가 가진 복잡한 모든 기능이 아닌, 필요한 부분만 추상적으로 사용 할 수 있게 한다.**

```js
class Animal {
  // 동물을 추상화 한 추상 클래스
  constructor(type) {
    this.type = type;
  }

  breath() {
    // 수 많은 기능 중 숨쉬기 기능만 추상화 한 객체 생성
    return 'hu ~~ ';
  }
}
```

## 상속

상속이란 변수와 함수의 집합으로 이뤄진 객체의 유효 범위를 묶어서 재정의하는 것을 의미한다.

```js
class Animal {
  breath() {
    return 'hu ~~ ';
  }
}

class Dog extends Animal {
  swingTail() {
    return '살랑살랑';
  }
}

const dog = new Dog();
console.log(dog.breath()); // hu ~
console.log(dog.swingTail()); // 살랑살랑
```

`Dog` 객체는 `Animal` 을 상속받아 생성된 자식 객체이다.

자식 객체의 유효 범위는 `Dog` 객체 뿐이 아닌 부모 객체인 `Animal` 까지 존재하여 `Animal` 에서 정의된 데이터와 함수를 사용 하는 것이 가능하다.

실제 세계에서 다양한 존재들의 계층적 구조를 객체의 상속 구조를 통해 실제 세계를 모방하는 것이 가능하다.

## 의존성과 다형성

### 의존성

실제 세계의 존재들은 상위 구조와 하위 구조인 계층적 구조를 가지고 있다.

이러한 계층적 구조에서는 **의존성** 이라는 개념이 존재한다.

모든 동물이라는 상위 존재와 , 동물의 하의 계층 구조인 개 를 예시로 생각해보자

모든 동물은 숨을 쉬기에 동물의 하위 구조인 개는 숨을 쉰다.

이에 개는 동물이라는 추상화 된 개념과 의존성을 가지고 있다.

하지만 개가 냄새를 잘 맡는다고 해서 모든 동물이 냄새를 잘 맡는 것은 아니다.

이에 상위 계층인 동물은 하위 계층인 개와 의존성을 갖고 있지 않는다.

이처럼 **모든 하위 객체들은 상위 객체에게 의존성을 갖고 있지만 상위 객체는 하위 객체와 의존성을 가지고 있으면 안된다.**

### 다형성

다형성이란 같은 상위 클래스의 하위 객체 들이더라도

동일한 기능명이더라도 하위 객체의 세부사항에 따라 다른 결과를 나타낼 수 있음을 의미한다.

다형성은 **오버라이딩과 재정의** 를 통해 위에서 말한 의미를 쉽게 가능케 한다.

`Animal` 이란 추상 클래스 아래에는 다양한 하위 클래스 들이 존재 할 수 있다.

```js
class Animal {
  breath() {
    return 'hu ~~ ';
  }

  makesound() {}
}

class Dog extends Animal {}
class Cat extends Animal {}

const dog = new Dog();
const cat = new Cat();
```

여기서 개와 고양이는 모두 `Animal` 이라는 추상 클래스의 하위 클래스이다.

이 때 `Dog` 와 `Cat` 은 상속 관계를 통해 `makeSound` 를 호출 할 수 있지만 실행 결과는 달라야 할 것이다.

만약 **다형성은 존재하지만 오버라이딩과 재정의** 가 존재하지 않는다면 어떻게 되나 보자

```js
class Animal {
  constructor(type) {
    this.type = type;
  }

  breath() {
    return 'hu ~~ ';
  }

  makesound() {
    if (this instanceof Dog) return '멍멍';
    else if (this instanceof Cat) return '야옹';
  }
}

class Dog extends Animal {}
class Cat extends Animal {}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makesound()); // 멍멍
console.log(cat.makesound()); // 야옹
```

하위 객체에서 `makesound` 메소드를 재정의 할 수 없기 때문에 상위 객체에서

직접적인 제어를 통해 실행 결과를 조작하고 있다.

이는 **상위 객체는 하위 객체와 의존성을 가지면 안된다** 라는 의존성 원칙을 지키고 있지 않고 있다.

이런 의존성 원칙이 지켜지지 않으면 하위 객체가 추가 될 때 마다 `Animal` 에서 정의된 다양한 메소드 등을 재정의 해줘야 하는 번거로움이 존재한다.

**상위 객체가 하위 객체와 의존성을 갖고 있는 경우 하위 객체의 수정 시 상위 객체를 수정해야 하는 문제가 발생한다.**

하지만 이번엔 **오버라이딩과 재정의를 통해 다형성을 정의해보자**

```js
class Animal {
  constructor(type) {
    this.type = type;
  }

  breath() {
    return 'hu ~~ ';
  }

  makesound() {}
}

class Dog extends Animal {
  makesound() {
    return '멍멍';
  }
}
class Cat extends Animal {
  makesound() {
    return '야옹';
  }
}

const dog = new Dog();
const cat = new Cat();

console.log(dog.makesound()); // 멍멍
console.log(cat.makesound()); // 야옹
```

이번엔 하위 객체인 `Dog , Cat` 에서 부모로부터 상속된 `makeSound` 메소드를 재정의함으로서

더 이상 `Animal` 상위 객체의 `makeSound` 는 하위 객체들과 의존성을 갖지 않은 올바른 구조를 가지게 되었다.

이처럼 `오버라이딩과 재정의` 는 하위 객체들이 상위 객체로부터 상속 받은 프로토타입 메소드 등을 변경 할 수 있는 유연성을 제공하며

이러한 유연성으로 상위 객체가 하위 객체에게 의존성을 갖는 구조를 방지한다.

### 아키텍쳐에서 의존성 관계의 중요성

> 교재에서는 배포와 비즈니스 관점에서 이야기하였지만 나는 리액트 관점에서 생각해봐야겠다.

### 잘못 구성된 컴포넌트의 의존성

```jsx
export class UserService {
  static async getUser(userId) {
    // Fetch user data from an API
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await response.json();
    return userData;
  }
}

// UserComponent.jsx
import React, { useEffect, useState } from 'react';
import { UserService } from './UserService';

function UserComponent({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getUser(userId).then(setUser);
  }, [userId]);

  if (!user) return <div>Loading user...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      {/* Display other user details */}
    </div>
  );
}
```

`UserComponent` 에서는 직접적으로 `UserService` 클래스를 이용함으로서

`UserComponent` 는 `UserService` 와 강한 의존성을 가지고 있다.

이런 강한 의존성으로 인해 `UserComponent` 를 다른 곳에서 재사용 할 때, 렌더링 하기 위한 `user` 를 다른 로직으로 구해와야 하는 경우엔

`Userservice` 클래스를 재정의하거나 , `UserService` 클래스를 사용하지 않고 다른 로직을 사용하는 `UserComponent2` 와 같은 새로운 컴포넌트를 생성해야 할 것이다.

> 작명센스가 구리긴 한데 제일 직관적으로 이해가 된다.

### 더 나은 컴포넌트 의존성 관계

```jsx
// UserComponent.jsx
import React from 'react';

function UserComponent({ user }) {
  if (!user) return <div>Loading user...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      {/* Display other user details */}
    </div>
  );
}

// App.jsx
import React, { useEffect, useState } from 'react';
import { UserService } from './UserService';
import UserComponent from './UserComponent';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Assume getUserId() somehow retrieves the current user's ID
    const userId = getUserId();
    UserService.getUser(userId).then(setUser);
  }, []);

  return <UserComponent user={user} />;
}
```

이번에는 상위 컴포넌트인 `App` 에서 `UserComponent` 가 `UserService` 로 구해진 `user` 를 `props` 로 받아 사용한다.

이를 통해 `UserComponent` 와 `UserService` 간의 의존성을 약하게 만들어

`UserComponent` 가 다른 곳에서 재활용 되기 쉽게 만든다.

> 그저 `UserService` 는 `UserComponent` 를 렌더링 하기 위한 `user props` 를 구하는 함수에 불과하게 만들었다.
> 이전에는 `UserService` 를 구성하는 중요 요소 중 하나로 사용하여 강한 의존성을 보였다.

> ### 객체 지향과 아키텍쳐 정리
>
> 객체 지향에서 다향성을 이용하여 아키텍쳐 간 의존성을 조절하는 개념이 중요하다 .
> 이렇게 아키텍쳐간 의존성을 효과적으로 조절하고 제거함으로서
> **아키텍쳐를 이루는 모듈을 독립적으로 유지 , 그를 통해 독립적인 개발 및 독립적인 배포를 가능하게 한다. **
