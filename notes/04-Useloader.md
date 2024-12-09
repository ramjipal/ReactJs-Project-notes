# What is `loader` of `Useloader()` hook

A loader in React Router is a function associated with a route to fetch data before rendering its component. It ensures that required data is available when the component is displayed.

---
## Key Features

- Fetches data asynchronously for a route.
- Prevents the component from rendering until data is ready.
- Injects the fetched data into the component via the `useLoaderData` hook.
- Supports error handling through error boundaries.


# How It Works

1. Define a loader function for the route.
2. Fetch data inside the loader.
3. Access the fetched data in the component using `useLoaderData`.


```javascript
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: async () => {
      const response = await fetch("https://api.example.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts.");
      }
      return response.json();
    },
    errorElement: <div>Error loading data!</div>, // Error boundary
  },
]);

// use of loader data
const Post = () => {
  const post = useLoaderData();
  return <h1>{post.title}</h1>;
};
```

