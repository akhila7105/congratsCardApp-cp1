const element = (
  // Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="details-container">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="name">Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education and Technology,
        <br /> Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png
"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
