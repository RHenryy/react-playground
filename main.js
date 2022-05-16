//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const helloWorld = <h1>Hello world!</h1>;
// const lastName = "henry";
// const firstName = "rafifou";
// const salut = <span className="red">{lastName} </span>;
// const salut2 = <span className="first">{firstName} </span>;

function createName(lastName, firstName, name1, name2, selector) {
  //   const nomDeFamille = lastName;
  //   const nomDeX = firstName;
  const name = <span className={name1}>{lastName} </span>;
  const namee = <span className={name2}>{firstName}</span>;
  ReactDOM.render([name, namee], document.querySelector(selector));
}
// const red = "red";
// const fN = <span className="first"></span>;
// ReactDOM.render([salut, salut2], document.querySelector("#app"));

createName("Henry", "Rafael", "red", "first", "#app");
