## Admin Dashboard Comforty:

This is the project that serves as a deshboard for comforty ecommerce project.


 - Create dashboard
 #### Layout of Dashboard:
- A dashboard can contains a side bar for navigations and a centered section for each option
- A dashboard can contain 4 routes orders, form submissions, creating events like offers and coupens
- A dashboard can also contains a section that contains card showing products and a dynamic route attached to that card to show the details of card , on this details page the card can have input fields that are editable

``` bash
        Admin Dashboard
            |__Orders
            |__Form submissions
```

### Sections of the dashboard:
#### Orders:
This section contains small cards that carry information about eah order. Completed orders should not be shown in this section

#### Form submissions:
Contains record of form submissions from contact page.


#### Shadcn ui components for this:

1. tabs
2. sheet
3. Sidebar
4. data table

Fix the context and state changing errors on build time