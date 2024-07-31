const User = (props) => {
  
return <>
<img src={props.img} alt={props.name}/>
<h1>Name: {props.name}</h1>
<h2>hobbies = {props.hobbies}</h2>

</>
}

function App(){

return (
  <>
    <User
      img="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=814.9333333333333&h=458.4&q=90&ar=16%3A9&crop=faces"
      name="niraj"
      age={20}
      hobbies={["coding"]}
    />
  </>
);
}
export default App;