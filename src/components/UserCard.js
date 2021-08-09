import React from "react";

const Username = ({ value }) => (
  <div>
    <i className="fas fa-user" />
    {value}
  </div>
);

const Email = ({ value }) => (
  <div>
    <i className="fas fa-envelope" />
    <a href={`mailto: ${value}`} tabIndex={0}>
      {value}
    </a>
  </div>
);

const Address = ({ value: { street, suite, city, zipcode } }) => (
  <div>
    <i className="fas fa-map-marker-alt" />
    <span>
      {street} {suite}
      <br />
      {city} {zipcode}
    </span>
  </div>
);

const Website = ({ value }) => (
  <div>
    <i className="fas fa-link" />
    <a
      href={`http://www.${value}`}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={0}
    >
      {value}
    </a>
  </div>
);

const Phone = ({ value }) => (
  <div className="list-item-footer">
    <a href={`tel:${value}`} tabIndex={0}>
      <div className="phone-btn">
        <i className="fas fa-phone" />
        {value}
      </div>
    </a>
  </div>
);

const UserCard = ({
  data: { name, username, email, website, phone, address },
}) => {
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <Username value={username} />
      <Email value={email} />
      <Address value={address} />
      <Website value={website} />
      <Phone value={phone} />
    </div>
  );
};

export default UserCard;
