import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useOutletContext,
} from 'react-router-dom';
 
const MainLayout = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ul>
        <li>
          <Link to="/">Child1</Link>
        </li>
        <li>
          <Link to="/child2">Child2</Link>
        </li>
      </ul>
      <div>
        <Outlet context={{ counter, setCounter }} />
      </div>
    </>
  );
};
 
const Child1 = () => {
  const { counter } = useOutletContext();
  return `Current value: ${counter}`;
};
const Child2 = () => {
  const { setCounter } = useOutletContext();
  return <button onClick={() => setCounter((prev) => prev + 1)}>Click to increase counter and then go back to Child1</button>;
};
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Child1 />} />
      <Route path="child2" element={<Child2 />} />
    </Route>,
  ),
);
 
const App = () => <RouterProvider router={router} />;
 
export default App;
