export const MENU = [
  {
    label: "Dashboard",
    link: "/dashboard",
    roles: ["SUPER ADMIN"],
  },
  {
    label: "Products",
    link: "#",
    roles: ["SUPER ADMIN"],
    menu: [
      {
        label: "Products",
        link: "/products",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Categories",
        link: "/categorys",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Banners",
        link: "/banners",
        roles: ["SUPER ADMIN"],
      },
    ],
  },
  {
    label: "Orders",
    link: "#",
    roles: ["SUPER ADMIN"],
    menu: [
      {
        label: "Orders",
        link: "/orders",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Customers",
        link: "/customers",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Coupons",
        link: "/coupons",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Return Requests",
        link: "/returnrequests",
        roles: ["SUPER ADMIN"],
      },
    ],
  },
  {
    label: "Blogs",
    link: "#",
    roles: ["SUPER ADMIN"],
    menu: [
      {
        label: "Blog Category",
        link: "/blogcategorys",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Blogs",
        link: "/blogs",
        roles: ["SUPER ADMIN"],
      },
    ],
  },
  {
    label: "Contacts",
    link: "#",
    roles: ["SUPER ADMIN"],
    menu: [
      {
        label: "Contacts",
        link: "/contacts",
        roles: ["SUPER ADMIN"],
      },
      {
        label: "Newsletters",
        link: "/newsletters",
        roles: ["SUPER ADMIN"],
      },
    ],
  },
];
