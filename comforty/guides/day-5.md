## Test Reports:
<div>
    <table style="border:2px solid black">
        <thead style="border:2px solid black">
            <tr style="border:2px solid black">
                <th style="text-align: center; padding:10px 20px; line-height: 20px;">S.no</th>
                <th style="text-align: center; padding:10px 20px; line-height: 20px;">Test steps</th>
                <th style="text-align: center; padding:10px 20px; line-height: 20px;">Expected results</th>
                <th style="text-align: center; padding:10px 20px; line-height: 20px;">Actual results</th>
                <th style="text-align: center; padding:10px 20px; line-height: 20px;">Status</th>
                <th style="text-align: center; padding:10px 20px; line-height: 20px;">Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">1.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Fetching products data</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Write query to fetch products on main page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Products fetched successfully</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use console.log to verify fetch</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">2.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Check product card responsiveness on inserting data</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black;">Insert data into product cards</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Responsiveness is correct but some images are too large, affecting flex container behavior</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Failed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Validate image field in Sanity Studio to ensure fixed dimensions</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">3.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Limiting fetch results in each category</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Limit the number of products fetched on the first render</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Minimum 30 products fetched</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Failed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use intersection observer with useEffect to track user scrolling and fetch data dynamically</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">4.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Checking dynamic routes</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Open /products/(id)</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Displays page corresponding to product ID</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">--</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">5.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Fetch product with ID</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Write fetch query in dynamic routes</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Displays the correct product data array</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use console.log to check results</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">6.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Add to cart functionality</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Click "Add to Cart" button on product details page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Adds product data to "CartContext"</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use console.log to verify addition</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">7.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Add to wishlist functionality</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Click "Add to Wishlist" button on product details page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Adds product data to "WishlistContext"</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use console.log to verify addition</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">8.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Display cart products on /cart page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Open cart page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Products displayed correctly</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use console.log to verify data</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">9.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Check fallback UI on empty cart</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Message: "No products found in your cart" and "Browse Products" button</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px;">Message and button appear correctly</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">--</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">10.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Check delete product from cart functionality</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Click "Delete" button on cart page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Notification: "Product deleted from cart successfully"</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">--</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">11.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Display wishlist products on /wishlist page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Open wishlist page</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Products displayed correctly</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Use console.log to verify data</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">12.</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Check fallback UI on empty wishlist</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Message: "No products in wishlist" and "Browse Products" button</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Message and button appear correctly</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">--</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">13. </td>
                <td  style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Move to cart from wishlist</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Move all the products as it is to cart from wishlist context</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Moved onlyone items with specific id at a time</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">fail</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">use appropriate array methods</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">14. </td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">See header cart and heart icons</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Correct count is shown in it</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Correct count is shown in it</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">----</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">15. </td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">open the /checkout and then /contact fill out the form with incorrect data pattern </td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Throw an error</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">throw en error</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">apply zod with typescript for advanced validation</td>
            </tr>
            <tr style="border:2px solid black">
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">16. </td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">open links in header and footer one by one</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Header links pointed to their respective routes while footer links point towards / </td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">Header links pointed to their respective routes while footer links point towards / </td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">passed</td>
                <td style="text-align: center; padding:10px 20px; line-height: 20px; border:2px solid black">attache links to footer</td>
            </tr>
        </tbody>
    </table>
    </div>