import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Test from "../pages/admin/Test";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Test />,
  },
  {
    name: "Books Management",
    children: [




      {
        name: "Supper Admin",
        path: "supper-admin",
        element: <Test />,
      },
    ],
  },
];

export const adminSidebarItems = adminPaths.reduce(
  (acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  },
  []
);

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);
