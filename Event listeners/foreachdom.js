const users = [{
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
},
{
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
},
{
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
},
];

const orderList = document.createElement("ol");
document.body.append(orderList)
users.forEach(element => {
const listItem = document.createElement("li");
listItem.innerHTML = element.firstName + ' ' + element.lastName
const attribute = document.createAttribute('data-id')
attribute.value = element.id
listItem.setAttributeNode(attribute)
console.log(listItem);

listItem.style.listStyle = "none"
orderList.append(listItem)

}); 