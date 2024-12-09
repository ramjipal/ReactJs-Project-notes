# How Routing Works

## BrowserRouter:
- Wraps the entire application, enabling the use of routing features.
- Monitors the browser’s address bar for changes.

## Routes:
- Contains all the possible routes for your app.
- Each `<Route>` specifies a path and the component to render.

## Switching Components:
- When the URL matches a path (e.g., `/about`), the corresponding component (`About`) is rendered.



# Understanding the `<Outlet>` Component in React Router

## What is `<Outlet>`?
- The `<Outlet>` component is used to render child routes inside a parent route.
- Acts as a placeholder for child components defined in the nested route structure.

## Key Use Case
- Particularly useful for creating layouts (e.g., a dashboard or navigation bar) that remain consistent across multiple routes.
- Allows specific content to change dynamically based on the child route.

## When to Use `<Outlet>`:
- When you have a parent route that needs to share a layout (e.g., header, footer, sidebar) with its child routes.
- The `<Outlet>` ensures the child route's component is displayed within the parent route’s layout.


## sample code of outlet
```jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <Link to="home">Home</Link> | <Link to="about">About</Link>
      </nav>
      <hr />
      {/* Child components rendered here */}
      <Outlet />
    </div>
  );
};

export default Layout;
```
# Key Differences Between `Link` and `NavLink`

| **Feature**      | **Link**                     | **NavLink**                                          |
|-------------------|------------------------------|-----------------------------------------------------|
| **Purpose**       | Basic navigation            | Navigation with active state indication             |
| **Active State**  | No active state handling    | Automatically applies styles or classes to active links |
| **Customization** | Cannot customize based on active state | Can use `activeClassName` or `style` props for active link styling |
| **Usage**         | When no active link highlighting is needed | When you want to indicate the active route (e.g., navigation menus) |

