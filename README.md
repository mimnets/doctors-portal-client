# Getting Started with Doctors Portal Client Site with Create React App.


1. Installed with : npx create-react-app doctors-portal-client
2. Installed Tailwind with : 
    a. npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p
    b. add the paths to all of your template files in your tailwind.config.js file.: "./src/**/*.{js,jsx,ts,tsx}", 
    c. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
3. Installed DaisyUI: 
    a. npm i daisyui
    b. Then add daisyUI to your tailwind.config.js files: plugins: [require("daisyui")],
4. Install: npm install react-router-dom

5. Added Pages, Layout, Routes folder inside src folder
6. Added Home, Shared folder inside Pages folder
7. Added Footer and Navbar folder inside Shared folder
8. Add router into routers: const router = createBrowserRouter({
    path: '/',
    element: <Main></Main>
})
export default router;

9. Add into Main: <Navbar></Navbar> <Outlet></Outlet><Footer></Footer>
10. Add into App.js: <RouterProvider router={router}></RouterProvider>

