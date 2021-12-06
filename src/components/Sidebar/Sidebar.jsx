import React from "react";
import { ClayVerticalNav } from "@clayui/nav";

const Sidebar = () => {
  const item = [
    {
      initialExpanded: true,
      items: [
        {
          href: "#nested1",
          label: "Nested1",
        },
      ],
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
      items: [
        {
          active: true,
          href: "#5",
          label: "Five",
        },
        {
          href: "#6",
          label: "Six",
        },
      ],
      label: "Projects",
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
