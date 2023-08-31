const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
  },
];

const container = document.querySelector(".container");

const myOl = document.createElement("ol");

myOl.style.listStyleType = "none";

users.forEach((user) => {
  const li = document.createElement("li");
  li.setAttribute("data-id", user.id);
  li.textContent = `${user.firstName} ${user.lastName}`;
  myOl.appendChild(li);
});

container.appendChild(myOl);
