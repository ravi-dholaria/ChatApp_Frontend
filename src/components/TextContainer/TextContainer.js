import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./textContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h3>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h3>
      <h4>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h4>
      <h5>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h5>
    </div>
    {users ? (
      <div>
        <h4>People currently chatting:</h4>
        <div className="activeContainer">
          <h4>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h4>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
