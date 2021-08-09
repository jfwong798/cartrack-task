import React from "react";

const ListItem = ({ data, children }) => {
  return (
    <li className="list-item" tabIndex={0}>
      {children}
    </li>
  );
};

const List = ({ data, renderItem }) => {
  const handleKeyPress = (event) => {
    switch (event.keyCode) {
      case 37: // ArrowLeft
      case 38: // ArrowTop
        event.target.previousSibling && event.target.previousSibling.focus();
        break;
      case 39: // ArrowRight
      case 40: // ArrowDown
        event.target.nextSibling && event.target.nextSibling.focus();
        break;
      default:
        break;
    }
  };

  if (data.length > 0) {
    return (
      <ul onKeyDown={handleKeyPress}>
        {data.map(({ id, ...rest }) => {
          return (
            <ListItem key={id} {...rest}>
              {renderItem(rest)}
            </ListItem>
          );
        })}
      </ul>
    );
  }

  return <div className="search-result-text">No Data Found!</div>;
};

export default List;
