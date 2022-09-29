import React from 'react';

class Character extends React.Component {
    render() {
      var name = this.props.charname;
      const lowercaseName = name.toLowerCase();
      //Reoccuring chapter characters need the number stripped from the name for the display
      name = name.replace(/[0-9]/g, "")
      const charactertypeclass = (this.props.chartype === "ally") ? "ally-text" : "enemy-text";

      return (
        <div>
          <h4 class={`character-text ${charactertypeclass}`}>{name}</h4>
            {this.props.children}
          <img src={`./screenshots/${lowercaseName}.png`} alt={`${name}`} />
        </div>
      );
  }
}

export default Character;