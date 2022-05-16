//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const props = {
//   nom: "rafifou",
//   prénom: ""
// };
// const lastName = "formateur";
// console.log(props.nom);
// Solution sans bonus
// const helloWorld = (
//   <h1>
//     Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span>{" "}
//     <span className="red-text">{lastName.toUpperCase()}</span>
//   </h1>
// );
const props = {
  firstName: "Rafifou",
  lastName: "Henry",
};
console.log(salut);
function LastName(props) {
  return <span className="red-text">{props.lastName.toUpperCase()} </span>;
}
function FirstName(props) {
  return <span>{props.firstName}</span>;
}
ReactDOM.render(
  [LastName(props), [FirstName(props)]],
  document.querySelector("#app")
);

// class LastName extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <span className="red-text">{this.props.lastName}</span>;
//   }
// }

// ReactDOM.render(element, document.getElementById("app"));
// function FirstName(props) {
//   return <span className="red">{props.nom}</span>;
// }

/**
 *
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */
