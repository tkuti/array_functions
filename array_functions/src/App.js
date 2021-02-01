import './App.css';
import Card from './Card';
import CardMap from './CardMap';

function App() {

  const users = [
    { name: "John Doe", age: 35, balance: 15360, currency: "EUR" },
    { name: "Jane Doe", age: 29, balance: 6745, currency: "EUR" },
    { name: "Jack Doe", age: 47, balance: 129632, currency: "EUR" },
    { name: "Nanook Tecumseh", age: 31, balance: 56412, currency: "EUR" },
    { name: "Naja Tupaarnaq", age: 23, balance: 87690, currency: "EUR" },
    { name: "Hiawatha Yolotli", age: 58, balance: 89845, currency: "EUR" },
    { name: "Nanabah Aqissiaq", age: 67, balance: 36110, currency: "EUR" },
    { name: "Qillaq Tlalli", age: 30, balance: 1258, currency: "EUR" },
  ]


  //{ return { ...user, balance: user.balance * 2 } }
  // user.age + 1
  // name.toUpperCase()
  let allUsers = users.map((user, index, users) => index === users.length - 1 ? user.name : user.name + ",");
  //user.age < 35
  //user.name.includes("Doe")
  // user.age > 30 && user.balance < 80000
  let usersUnder35Years = users.filter(user => user.age > 30 && user.balance < 80000);

  let totalBalance = users.reduce((accumulator, current) =>
    accumulator + current.balance, 0);

  let oldestUser = users.reduce((accumulator, current) => accumulator < current.age ? current.age : accumulator, users[0].age);

  /*
  users.find(user => user.age > 25)
  users.some(user => user.age > 67)
  users.every(user => user.age > 20)
  */


  return (
    <div id="content">
      <p>Total balance: {totalBalance}</p>
      <p>Oldest user: {oldestUser}</p>
      <p>Total users: </p>
      { typeof allUsers[0] === "object"
        ? allUsers.map(user => <Card datas={user} />)
        : allUsers.map(user => <CardMap datas={user} />)
      }
      <p>Users under 35 years: </p>
      {
        usersUnder35Years.map(user => <Card datas={user} />)
      }
    </div>
  );
}

export default App;
