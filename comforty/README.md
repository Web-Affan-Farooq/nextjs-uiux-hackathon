## Hackathon UI-UX Project "Comforty":

<h1>Hackathons :</h1>
<ol>
<li><a href="./guides/Hackathon Project Documentation.pdf">Day-1 documentation</a></li>
<li><a href="#p">day-2 technical planning </a></li>
<li><a href="#consider">day-3 API integrations </a></li>
<li><a href="#source">day-4 dynamic components</a></li>
<li><a href="./guides/test-report.csv">day-5 Testing overview</a></li>
<li><a href="https://docs.google.com/spreadsheets/d/1HBYwAZR7ri6PmB6pdYiQWE2OwqH4RQmZ6r3VQsUBFqU/edit?gid=0#gid=0">day-5 Testing report CSV format</a></li>
<li><a href="./guides/day-6.md">day-6 Staging enviroment</a></li>


<h1>Documentation:</h1>
<li><a href="#consider">Considerations and ammendements:</a></li>
<li><a href="#categories">Categories:</a></li>
<li><a href="#source">Overview Of Source Code:</a></li>
<li><a href="#guide-data-entry">Guide For Data Entry:</a></li>
</ol>

<hr/>

<main>
<article>
<section id="#about">
<h1>About This project</h1>
</section>
    <hr/>
<section>
<h1>Tools used:</h1>
    <ul>
        <li>Typescript (programming code)</li>
        <li>NextJS (main provider frammework)</li>
        <li>TailwindCSS (For stylings)</li>
        <li>Shadcn-ui (For integrating components)</li>
        <li>Next-UI (For integrating components)</li>
        <li>React-hot-toast (For notifications)</li>
       <li>Sanity (For main backend)</li>
        <li>React (library for interface)</li>
    </ul>
</section>

<section id="#consider">
<h1>Considerations and ammendements:</h1>
<p>To adjust the data in my sanity project I have customized the data fetched from <a href="https://giaic-hackathon-template-08.vercel.app/api/products">this api endpoint</a>. and add some more fields and products by combining it with my own api endpoint that is also responding with 30 products . you can check my api endpoint in the src/api/get-products/route.ts file.</p>
</section>
    <hr/>

<section id="#categories">
<h1>Categories:</h1>
<p>This project contains two categories <b>Sofas</b> and <b>Chairs</b></p>
</section>
    <hr/>

<section id="#source">
<h1>Overview of source code :</h1>
<h3>Separate Deployment of NextJS and Sanity :</h3>
<p>
In the root of this project . You can check directory named "sanity-project" that is containing my sanity project and studio and is used for editing content in our snaity datasets.I've separated the sanity project from my NextJs application because the NextJs application also contains vast number of dependencies and sanity app itself contains over 1100 packages , causing severe performance issues and increase latency of NextJS application. This sanity project is also deployed separately on vercel with attached permissions so that only owner can edit the content in it. 
</p>

<h3>Overview Of Sanity Project :</h3>
<p>
Note that separate sanity projects, if created can use <b>Vite</b> as thier default build tool because the user interface of sanity studio uses <strong>React</strong> on frontend along with requiring <b>TailwindCSS</b> but it doesn't installs tailwindCSS and it's configurations for vite project automatically. Therefore I've followed the following link to <a href="https://tailwindcss.com/docs/guides/vite">set up tailwindCSS in vite project</a> . Plus I've also replaced the <strong>content</strong> option in it. Follow the initialization steps and configure it manually.  
</p>
<p>Another loop hole when creating the sanity with vite is, the <strong>Create Sanity Package</strong> doesnot uses <strong>.env</strong> file to store secrets key and credentials .I've also followed
<a href="https://youtu.be/EQ3Htw6Z0PY?si=nK3e18gHz5wNlyFG">This guide to configure enviroment variables.</a></p>
<p>I'm using typescript in vite therefore I have also given type definitions of enviroment by creating <strong>vite-env.d.ts</strong> file <a href="./sanity-project/vite-env.d.ts">Check this out</a>
so that it loads my enviroment variables globally in vite project.
</p>

<h3>Important Note:</h3>
<ol>
<li>Make sure to secure the secrets using .env file by following <a href="https://youtu.be/EQ3Htw6Z0PY?si=nK3e18gHz5wNlyFG">this guide</a></li>
<li>Make sure that this line <code>.env*</code> is added in your .gitignore file in sanity project </li>
<li>Make sure that autoUpdate option in sanity.config.ts is set to false
up</li>
<li>Make sure to set up tailwindcss with vite manually by <a href="">Following this guide</a> </li>
</ol>

<h3>Routes And Navigations:</h3>
<p>This project contains the following routes</p>
    <div>
        <table style="border:2px solid black;">
            <thead>
                <tr>
                    <th style="padding:10px 20px">S.no</th>
                    <th style="padding:10px 20px">Route</th>
                    <th style="padding:10px 20px">Working</th>
                </tr>
            </thead>
           <tbody>
            <tr>
                <td style="padding:10px 20px">1. </td>
                <td style="padding:10px 20px">/</td>
                <td style="padding:10px 20px">Landing page</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">2. </td>
                <td style="padding:10px 20px">/about</td>
                <td style="padding:10px 20px">About page</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">2. </td>
                <td style="padding:10px 20px">/contact</td>
                <td style="padding:10px 20px">Contains basic structure of contact form</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">4. </td>
                <td style="padding:10px 20px">/checkout</td>
                <td style="padding:10px 20px">Payment form</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">5. </td>
                <td style="padding:10px 20px">/product</td>
                <td style="padding:10px 20px">Product listing page.</td>
            </tr>    
             <tr>
                <td style="padding:10px 20px">6. </td>
                <td style="padding:10px 20px">/product/1</td>
                <td style="padding:10px 20px">Dynamic route showing details of indivisual product.</td>
            </tr>   
             <tr>
                <td style="padding:10px 20px">7. </td>
                <td style="padding:10px 20px">/cart</td>
                <td style="padding:10px 20px">Cart page showing the products in bags</td>
            </tr>   
             <tr>
                <td style="padding:10px 20px">8. </td>
                <td style="padding:10px 20px">/wishlist</td>
                <td style="padding:10px 20px">Page showing the products in wishlist</td>
            </tr>   
             <tr>
                <td style="padding:10px 20px">9. </td>
                <td style="padding:10px 20px">/FAQs</td>
                <td style="padding:10px 20px">Cnotains basic components for FAQs</td>
            </tr>   
           </tbody>
        </table>
    </div>

<h3>Directories:</h3>
<p>Directory structure is defined as follows:</p>
  <div>
        <table style="border:2px solid black;">
            <tr>
                <th style="padding:10px 20px">S.no</th>
                <th style="padding:10px 20px">folder name</th>
                <th style="padding:10px 20px">purpose</th>
            </tr>
            <tr>
                <td style="padding:10px 20px">1. </td>
                <td style="padding:10px 20px">src/@types</td>
                <td style="padding:10px 20px">Contain types for incoming products data</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">2. </td>
                <td style="padding:10px 20px">/src/context</td>
                <td style="padding:10px 20px">Contain all the global states like cart wish list</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">3. </td>
                <td style="padding:10px 20px">/src/components</td>
                <td style="padding:10px 20px">Contains all the conponents used by pages</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">4. </td>
                <td style="padding:10px 20px">/src/lib</td>
                <td style="padding:10px 20px">contains configurations for clsx class merging library</td>
            </tr>        
             <tr>
                <td style="padding:10px 20px">8. </td>
                <td style="padding:10px 20px">/src/components/ui</td>
                <td style="padding:10px 20px">Contains conponents from shadcn ui</td>
            </tr>   
             <tr>
                <td style="padding:10px 20px">8. </td>
                <td style="padding:10px 20px">/scripts/importData.mjs</td>
                <td style="padding:10px 20px">Script for importing data</td>
            </tr>   
             <tr>
                <td style="padding:10px 20px">8. </td>
                <td style="padding:10px 20px">/public/icons</td>
                <td style="padding:10px 20px">Contains all icons used in app in svg format</td>
            </tr> 
             <tr>
                <td style="padding:10px 20px">8. </td>
                <td style="padding:10px 20px">/data</td>
                <td style="padding:10px 20px">Acts as primary data source for local api andpoint</td>
            </tr> 
             <tr>
                <td style="padding:10px 20px">9. </td>
                <td style="padding:10px 20px">/src/validations</td>
                <td style="padding:10px 20px">Contains zod schema for validating data in forms</td>
            </tr> 
        </table>
    </div>
</section>
    <hr/>
    <section>
    <h3>Backend routes:</h3>
<p>Backend routes and thier functions are as follows:</p>
  <div>
        <table style="border:2px solid black;">
            <tr>
                <th style="padding:10px 20px">S.no</th>
                <th style="padding:10px 20px">folder name</th>
                <th style="padding:10px 20px">Methods allowed</th>
                <th style="padding:10px 20px">Functions</th>
                <th style="padding:10px 20px">Response</th>
            </tr>
            <tr>
                <td style="padding:10px 20px">1. </td>
                <td style="padding:10px 20px">/api/get-products</td>
                <td style="padding:10px 20px">GET</td>
                <td style="padding:10px 20px">Custom api for products data</td>
                <td style="padding:10px 20px">Returns array containing products (used only for testing purposes)</td>
            </tr>    
            <tr>
                <td style="padding:10px 20px">2. </td>
                <td style="padding:10px 20px">/api/order</td>
                <td style="padding:10px 20px">POST</td>
                <td style="padding:10px 20px">api for handling checkout form data and create a new order entry in sanity</td>
                <td style="padding:10px 20px">Returns a confirmation message for order placement .</td>
            </tr>    
        </table>
    </div>
    </section>
    <hr/>
<section id="guide-data-entry">
    <h1>Guide For Data Entry</h1>
    <ul>
        <li>
            <h3>Top rated products:</h3>
            <p>The Product is said to be top rated when it has been given 5 stars by 100+ users</p>
        </li>
        <li>
            <h3>Warranty</h3>
            <p>Each product have one month warranty</p>
        </li>
        <li>
            <h3>Tags:</h3>
            There are tags for products Featured, New Collections, top rated, 
            <ol>
                <li>Products with "Featured" tag are shown on the front page featured section scroll bar </li>
                <li>Products with "new collection" tag had a badge "new" on them</li>
                <li>Products with "Top rated " tag had a star tag on them</li>
            </ol>
        </li>
        <li>
            <h3>Required data for each product</h3>
            <p>For creating new product entry ensure that you have the following accurate data about that product</p>
            <ol>
                <li>product name</li>
                <li>price (in USDT)</li>
                <li>clear image</li>
                <li>Discount in numbers (if no discount available on it enter it 0)</li>
                <li>A short description about that product of 7-10 words</li>
                <li>A long description of 20 to 50 words</li>
                <li>Quantity available in your inventory</li>
                <li>Tags for product</li>
                <li>Weight in Kgs</li>
                <li>Ratings</li>
                <li>How many people had rated it </li>
                <li>A category (chairs or sofas)</li>
            </ol>
        </li>
        </ul>
        <h2>Components list</h2>
        <ol>
        <li>Product listing component</li>
        <li>Product details component</li>
        <li>Category component</li>
        <li>Search bar</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Checkout flow</li>
        <li>User profile</li>
        <li>Reviews and ratings(implement it in the bottom of dynamic routes)</li>
        <li>Pagination Component</li>
        <li>Filter panel</li>
        <li>Related Productss component(to be implemented on dynamic product route)</li>
        <li>Related Productss component(to be implemented on dynamic product route)</li>
        <li>Header and footer with links</li>
        <li>Notification</li>
        <li>Notifications component</li>
        <li>Analytics and dashboard components</li>
        <li>Product comparison</li>
        <li>Multi language support component</li>
        <li>Order tracking component</li>
        <li>FAQs and help center</li>
        <li>Subscription management</li>
        <li>Admin dashboard</li>
        <li>Discount and promotion</li>
        <li>Social media sharing component </li>
        <li>Bulk upload component</li>
        <li>AI recommendation component</li>
        <li>Gift card and voucher component</li>
        <li>customer feedback</li>
        <li>Advanced search component</li>
        </ol>
        <h1>hints:</h1>
        Sales Analytics (Total Sales, Revenue, Orders, Refunds)
 User Activity (New Customers, Active Users, Best Customers)
 Order Summary (Pending, Shipped, Delivered, Cancelled)
 Stock Alerts (Low Stock, Out-of-Stock Items)
 Recent Transactions
Add, Edit, Delete Products
 Manage Product Variants (Size, Color, etc.)
 Upload & Manage Images
Set Discounts & Promotions
 Inventory Management (Track Stock Levels)
 View & Update Order Status (Pending, Processing, Shipped, Delivered, Canceled, Refunded)
 Generate & Print Invoices
 Track Shipping & Delivery
 Handle Returns & Refunds
        <h1>Upcoming Updates:</h1>
        - Create more responsive checkout section
        - Implement search and filteration functionality in products page
        - Create dashboard
        <h4>Layout of Dashboard</h4>
        <ul>
                <li>A dashboard can contains a side bar for navigations and a centered section for each option</li>
                <li>A dashboard can contain 4 routes orders, form submissions, creating events like offers and coupens</li>
                <li>A dashboard can also contains a section that contains card showing products and a dynamic route attached to that card to show the details of card , on this details page the card can have input fields that are editable</li>
        </ul>

        ``` bash
        Admin Dashboard
            |__Orders
            |__Form submissions
            |__
            |__
        ```

        Shadcn ui components:
        1. tabs
        2. sheet
        3. Sidebar
        4.data table
        
</section>
<section>
</section>
</article>
</main>