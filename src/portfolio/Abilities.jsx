import React, { Component } from "react";
import "../CSS/abilities.css";

class Abilities extends Component {
  render() {
    return (
      <div className="container-fluid abilities" id="abilities">
        <h2>Abilities</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 skills">
            <h3>Skills</h3>
          </div>
        </div>
        <div className="logo container">
          <img src="./logos/java.png" alt="JAVA" />
          <img src="./logos/python.png" alt="Python" />
          <img src="./logos/react.png" alt="React JS" />
          <img src="./logos/angular.png" alt="Angular JS" />
          <img src="./logos/html.png" alt="HTML 5" />
          <img src="./logos/css.png" alt="CSS 3" />
          <img src="./logos/js.png" alt="JS" />
          <img src="./logos/mysql.png" alt="MySQL" />
          <img src="./logos/spring.png" alt="Spring Boot" />
          <img src="./logos/git.png" alt="GIT" />
          <img src="./logos/tomcat.png" alt="Tomcat" />
          <img src="./logos/npm.png" alt="npm" />
          <img src="./logos/mongo.png" alt="Mongo DB" />
          <img src="./logos/bootstrap.png" alt="Bootstarap" />

        </div>
        <div className="row">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            adipisci illum, tempore quaerat quidem dignissimos quasi magnam ad
            omnis nostrum error fuga voluptates eum eveniet recusandae eligendi
            modi ipsa molestiae.
          </p>
        </div>
      </div>
    );
  }
}

export default Abilities;
