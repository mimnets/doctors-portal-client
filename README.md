# Getting Started with Doctors Portal Client Site with Create React App.


1. Installed with : npx create-react-app doctors-portal-client
2. Installed Tailwind with : 
    * ```npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p```
    * add the paths to all of your template files in your tailwind.config.js file.: ```"./src/**/*.{js,jsx,ts,tsx}",``` 
    * Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. 
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
    
3. Installed DaisyUI: 
    * ```npm i daisyui```
    * Then add daisyUI to your tailwind.config.js files: plugins: ```[require("daisyui")],```
4. Install: ```npm install react-router-dom```

5. Added Pages, Layout, Routes folder inside src folder
6. Added Home, Shared folder inside Pages folder
7. Added Footer and Navbar folder inside Shared folder
8. Add router into routers: 

```
const router = createBrowserRouter({
    path: '/',
    element: <Main></Main>
})
export default router;
```

9. Add into Main: <Navbar></Navbar> <Outlet></Outlet><Footer></Footer>
10. Add into App.js: <RouterProvider router={router}></RouterProvider>
11. Add login page inside Pages
12. Added Navbar from DaisyUI
13. Learn Shortcut Key: Alt + Shift + F key for auto arrange the codes
14. To add theme in the projects by using DaisyUI, need to user ``` data-theme="cupcake" ``` inside index.html file within ``` <html data-theme="cupcake"></html> ``` or ``` <body data-theme="cupcake"></body> ``` tag.
15. Added custom width with Tailwindcss at app.js: ``` <div className='max-w-[1440px] mx-auto'> ``` and mx-auto for center alignment.  
16. Add menu with variable to show multiple location by use react fragment or <></>: 
```
    const menuItems = 
    <React.Fragment>
        <li><a>Home</a></li>
        <li><a>Appointment</a></li>
        <li><a>About</a></li>
        <li><a>Reviews</a></li>
        <li><a>Login</a></li>
    </React.Fragment>

```
17. Select multi line with : ctrl + alt and down arrow
18. added banner.js into /home/banner and added margin left and right with mx-5 (5 means 20 px - in tailwind it counts 4 times as pixel)

# Create AuthContext - AuthProvider.js inside context folder under src directory
# Added .env.local file with firebase authentication credentials - Important :::: .env.local file must be created inside the root directory not in the src directory.