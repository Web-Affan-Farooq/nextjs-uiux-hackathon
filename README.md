## Hackathon UI-UX Project "Comforty":

<ol>
<li><a href="#about">About this project</a></li>
<li><a href="#pages">Pages in this project</a></li>
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
        <li>Typescript</li>
        <li>NextJS</li>
        <li>TailwindCSS</li>
        <li>Shadcn-ui</li>
        <li>Next-UI</li>
        <li>React-hot-toast</li>
       <li>Sanity</li>
        <li>React</li>
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
            <p>            For creating new product entry ensure that you have the following accurate data about that product</p>
            <ol>
                <li>product name</li>
                <li>price (in USDT)</li>
                <li>clear image</li>
                <li>clear </li>
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

</section>
</article>
</main>