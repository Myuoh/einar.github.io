/*let shoppingList = {
    items: [
        {name:"pizza", price: 850},
        {name:"t-shirt", price: 3000},
        {name:"bounty", price: 150},
        {name:"coke", price: 250}
      ],
      total: 0
    }
window.addEventListener("click",listTotal)

function listTotal(){
    let total = 0
    for(let i =0; i<shoppingList.items.length;i++){
        console.log(shoppingList.items[i])
        total+=shoppingList.items[i].price
    }
    console.log(total)
}


const form = document.querySelector("#new-form")
    const list = document.querySelector("#list")
    const inp1 = document.querySelector("#item-in")
    const inp2 = document.querySelector("#price-in")
    for (let i =0; i< shoppingList.items.length;i++){
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${shoppingList.items[i].name} ${shoppingList.items[i].price}`))
        list.appendChild(li)
    }

    form.addEventListener("submit", e => {
        e.preventDefault()
      
        // 1. Create a new item
        const item = document.createElement("li")
        item.classList.add("list-item")
      
        // 2. Add that item to the list
        let listItem ={}
        listItem.name=inp1.value
        listItem.price=Number(inp2.value)
        shoppingList.items.push(listItem)


        listTotal();
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${inp1.value} ${inp2.value}`))
        list.appendChild(li)      
        // 3. Clear input
        inp1.value = ""
        inp2.value = ""

        // 4. Setup event listener to delete item when clicked
        item.addEventListener("click", () => {
          item.remove()
        })
      })


listTotal()
*/
const shoppingList = {
    items: [
        { name: "pizza", price: 850 },
        { name: "t-shirt", price: 3000 },
        { name: "bounty", price: 150 },
        { name: "coke", price: 250 }
    ],
    total: 0
};

window.addEventListener("click", listTotal);

function listTotal() {
    let total = 0;
    const list = document.querySelector("#list");
    const what = document.querySelector("#totalverd")

    // Remove existing list items
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < shoppingList.items.length; i++) {
        const listItem = shoppingList.items[i];
        listItem.id = i; // Add an 'id' property to each item
        total += listItem.price;

        // Create list items with IDs and add them to the list
        const li = document.createElement("li");
        li.textContent = `${listItem.name} ${listItem.price}`;
        li.setAttribute("data-id", i); // Set data-id attribute
        list.appendChild(li);
        
        what.textContent = "heildarverð er " + total +"kr."
        // Add a click event listener to remove items
        li.addEventListener("click", () => {
            const itemId = li.getAttribute("data-id");
            shoppingList.items.splice(itemId, 1); // Remove the item from the array
            listTotal(); // Update the list after removing
        });
    }
    console.log("Total:", total);
}

const form = document.querySelector("#new-form");
const inp1 = document.querySelector("#item-in");
const inp2 = document.querySelector("#price-in");


form.addEventListener("submit", e => {
    e.preventDefault();

    const listItem = {};
    listItem.name = inp1.value;
    listItem.price = Number(inp2.value);
    shoppingList.items.push(listItem);

    inp1.value = "";
    inp2.value = "";

    listTotal(); // Update the list after adding a new item
});

listTotal(); // Initial rendering