import React from "react";
import { ClayVerticalNav } from "@clayui/nav";

const Sidebar = () => {
  const item = [
    {
      initialExpanded: true,

      label: "Home",
    },
    {
      href: "#2",
      label: "About",
    },
    {
      href: "#3",
      label: "Contact",
    },

    {
      href: "#7",
      label: "Seven",
    },
  ];
  return (
    <div className="bg-grey h-100">
      <ClayVerticalNav items={item} large={false} />
    </div>
  );
};

export default Sidebar;
