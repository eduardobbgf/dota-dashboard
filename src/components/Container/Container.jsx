import React from "react";

const Container = (props) => {
  const { children = <p>AAA</p> } = props;

  return (
    <div className="container-sm shadow-sm p-3 mb-2 bg-body rounded p-3 m-4">
      {children}
    </div>
  );
};

export default Container;
