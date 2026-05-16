// lib/links.ts

export const Links = {
  home: "/",

  blog: {
    root: "/blog",
    postsPage: "/blog/posts",
    categoriesPage: "/blog/categories",
    tagsPage: "/blog/tags",
  },

  admin: {
    dashboard: "/dashboard/admin",

    blog: {
      postsPage: "/dashboard/admin/blog",
      categoriesPage: "/dashboard/admin/categories",
      tagsPage: "/dashboard/admin/tags",
    },

    users: {
      root: "/dashboard/admin/users",
    },
  },

  auth: {
    login: "/login",
    register: "/register",
  },
} as const;
