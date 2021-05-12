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
          <img src="./logos/html.png" alt="HTML 5" title='HTML 5'/>
          <img src="./logos/css.png" alt="CSS 3" title='CSS 3'/>
          <img src="./logos/react.png" alt="React JS" title='React JS'/>
          <img src="./logos/redux.png" alt="redux" title='Redux'/>
          <img src="./logos/js.png" alt="Javascript" title='Javascript'/>
          <img src="./logos/node.png" alt="node js" title='node JS'/>
          <img src="./logos/angular.png" alt="Angular JS" title='Angular JS'/>
          <img src="./logos/bootstrap.png" alt="Bootstarap" title='Bootstarap'/>
          <img src="./logos/spring.png" alt="Spring Boot" title='Spring Boot'/>
          <img src="./logos/java.png" alt="JAVA" title='JAVA'/>
          <img src="./logos/python.png" alt="Python" title='Python'/>
          <img src="./logos/git.png" alt="GIT" title='GIT'/>
          <img src="./logos/tomcat.png" alt="Tomcat" title='Tomcat'/>
          <img src="./logos/npm.png" alt="npm" title='npm'/>
          <img src="./logos/mysql.png" alt="MySQL" title='MySQL'/>
          <img src="./logos/mongo.png" alt="Mongo DB" title='Mongo DB'/>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-10">
            <blockquote class="blockquote text-center">
              <p className="mb-0">
                “The illiterate of the 21st century will not be those who cannot
                read and write, but those who cannot learn, unlearn, and
                relearn.”
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Alvin Toffler</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 tools">
            <h3>Tools</h3>
          </div>
        </div>
        <div className="ide container">
          <img src="./logos/eclipse.png" alt="Eclipse IDE" title='Eclipse IDE'/>
          <img src="./logos/intellij.png" alt="Intellij" title='Intellij'/>
          <img src="./logos/vscode.png" alt="VSCode" title='VSCode'/>
          <img src="./logos/sublime.png" alt="Sublime" title='Sublime'/>
          <img src="./logos/vim.png" alt="Vim Text Editor" title='Vim Text Editor'/>
        </div>
      </div>
    );
  }
}

export default Abilities;
