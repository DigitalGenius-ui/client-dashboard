const sideBar = document.querySelector(".sideBar")

let content = `
    <div class="title">
      <h1>Hi, User Name</h1>
      <span class="ti-close close"></span>
    </div>
    <div class="dropDown">
    <div class="head active">
        <h4>All</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul class="drop">
        <li><a class="link" href="#">New</a></li>
        <li><a class="link" href="#">Checked</a></li>
        <li><a class="link" href="#">Payment done</a></li>
        <li><a class="link" href="#">Printing</a></li>
        <li><a class="link" href="#">Completed</a></li>
        <li><a class="link" href="#">Close</a></li>
        <li><a class="link" href="#">File defects</a></li>
        <li><a class="link" href="#">Re-print</a></li>
        <li><a class="link" href="#">Hidden</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
        <h4>New</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul class="drop">
        <li><a class="link" href="#">New</a></li>
        <li><a class="link" href="#">Checked</a></li>
        <li><a class="link" href="#">File defects</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
        <h4>Processing</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul  class="drop">
        <li><a class="link" href="#">Payment done</a></li>
        <li><a class="link" href="#">Printing</a></li>
        <li><a class="link" href="#">Re-print</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
        <h4>Completed</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul  class="drop">
        <li><a class="link" href="#">Completed</a></li>
        <li><a class="link" href="#">Close</a></li>
        <li><a class="link" href="#">Hidden</a></li>
    </ul>
    </div>
    </div>
`;
sideBar.innerHTML = content;

const barDrop = document.querySelectorAll(".dropDown");
const heads = document.querySelectorAll(".head");
const links = document.querySelectorAll(".link")

barDrop.forEach((item) => {
  const head = item.querySelector(".head");
  head.addEventListener("click", () => {
    barDrop.forEach((drop) => {
      if (drop !== item) {
        drop.classList.remove("active");
      }
    });
    item.classList.toggle("active");
    heads.forEach((head) => {
      head.classList.remove("active");
    });
    head.classList.add("active")
  });
});

//bar part 
const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
const leftSide = document.querySelector(".left-side");
const overFlow = document.querySelector(".overFlow");

bar.addEventListener("click", () => {
    leftSide.classList.add("active");
    overFlow.classList.add("active")
});

close.addEventListener("click", () => {
    leftSide.classList.remove("active");
    barDrop.forEach(item => {
      item.classList.remove("active");
      overFlow.classList.remove("active")
    });
    heads.forEach((head) => {
      head.classList.remove("active");
    });
    document.querySelector(".head").classList.add("active");
});

overFlow.addEventListener("click", () => {
    leftSide.classList.remove("active");
    barDrop.forEach(item => {
      item.classList.remove("active");
      overFlow.classList.remove("active")
    });
    heads.forEach((head) => {
      head.classList.remove("active");
    });
    document.querySelector(".head").classList.add("active");
});

// links 
links.forEach((item) => {
  item.addEventListener("click", () => {
    leftSide.classList.remove("active");
    overFlow.classList.remove("active");
  });
})

