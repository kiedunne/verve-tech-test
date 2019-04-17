# Code Review

## package.json
**Line 11:**


The script to run tests fails when run with npm. Please change the command to `"jest --watchAll"` to run the test properly.


## Routes.jsx
**Line 12:** 


There is a some inconsistent use of double and single quotes throughout the codebase. Consider using a linter such as Prettier to automatically format code to industry standards.

##Routes.spec.jsx.
**Line 12:**


The only tests present for a number of components, incuding Routes, are snapshots. These only test the jsx rendered by the component, not the actual behavior of the component. If another developer starts working on the codebase and makes even a small change, like adding a key to a component, these snapshots will break. As Enzyme is installed in this project, consider using MemoryRouter, which can keep different URLs to test in memory, to mock your react-router. Right now there is no test in place to ensure a user will be brought to the correct page depending on the URL.


## Review.spec.jsx.
**Line 10 - 28:**


Similar to Routes, the Review component only has snapshot tests, which only test the jsx the component renders rather than the behavior of the component. There was a unique key warning for Review, but adding a unique key prop broke the Reveiew tests because they no longer matched the snapshot provided, which makes the devloper have to change the test as well. Tests should be robust enough not to break when such a small change is implemented that does not radically impact the behavior of the component. Consider what *you need the Reveiew component to consistently do* when writing your tests. In this case, it looks like you need it to return ........*COME BACK*

## Review.jsx
**Line 10 - 28:**


Consider removing the curly and square brackets encasing TicketList and basket, they don't need to be wrapped in an object or array as you are already returning one div called "flex-layout".

**Line 14:**


There is no need to set the key of the Ticket List component. A component only needs to be given a key if it's in a list and being iterated over by a method such as map. Here we are just loading the component, so no need for a key.

## TicketCard.jsx
**Line 7:**


Some components are appended with 'Component' at the end of their names, and others aren't- please be consistent with naming, ie. stick to TicketCard and TicketList rather than TicketCardComponent and TicketList.
**Line 8:**


Don't need state...not sure why *COME BACK*

**Line 21:**


There doesn't seem to be much benefit of destructuring id, title and price out of the product object and storing them in props. The OnClick() only needs the product to be passed to fire the addToBasket action. You can just call `product.title` and `product.price` to access display these properties on the DOM.

**Line 21:**


Consider using the global state to determine wheather or not a ticket is active, rather than using the local state of TicketCard. Currently, if a user adds a ticket to their basket then removes that ticket, it remains highlighted. To ensure the user gets clear visual feedback of that ticket not being in their basket, you could find the selected card in the global state by passing in TicketCard's ownProps to connect(), then setting the element class based on the value of quantity - active when the value is above 0. 


`export default connect((state, ownProps) => ({
    basketItem: state.basket.find(item => item.id === ownProps.product.id)
}),
)(TicketCardComponent);`


## /actions/index.jsx
**Line 2:**

Consider renaming 'action' to something like product or item to increase readibility for the next developer. The parameter you are passing is not an action, these funtions are the acctions that are acting on the item you pass it.

## /reducers/index.jsx
**Line 4:**

There doesn't seem to be a reason to combine reducers at this stage, as theres only one reducer file, basket. But this could be useful if there is a definite plan to add more.

## /actions/basket.jsx
**Line 1:**

Please don't leave the first line of any file blank. Again, using a linter like Prettier or ESLint are great for automatically cleaning up your code style.

**Line 6 & Line 34**


You don't use index when iterating over the items, there is no need to declare it in your map function.


**Line 34**


When items are removed from the basket, the quantity prop is subtracted by 1. When there are no items in the basket, its 0. Consider making a conditional checking if the current quantity is 1, and if it is, removing the item from the array rather than keeping a 0 value. This makes it easier to check if tickets are in the basket or not, as you only have to check if the item exists rather than if the quantity is 0 or not.






## TicketCard.spec.jsx
**Line 27**
Great testing of the behavior of TicketCard by ensuring this component calls dispatch with the correct props and type to trigger the associated action.


**Line 37**
If you use the global state to find the TicketCard that I suggested about, this test needs to change to store to find the right ticket and check the quantity property rather than just using the local state of TicketCard.


## TicketList.jsx
**Line 11**
This h1 element doesn't need a key, it's not being iterated over.

**Line 16**
Consider using the product.id for each TicketCard element. Keys should be unique values as it ensures that the items in the array are dsiplayed in the correct order. An item's index will change if new items are added or added to the array, or sorted. 


## TicketList.spec.jsx
Not sure, but maybe something like there should be a test looking if theres ....that the correct number of products were rendered on the list- rather than just a snapshot