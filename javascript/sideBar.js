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
        <li><a href="#">New</a></li>
        <li><a href="#">Checked</a></li>
        <li><a href="#">Payment done</a></li>
        <li><a href="#">Printing</a></li>
        <li><a href="#">Completed</a></li>
        <li><a href="#">Close</a></li>
        <li><a href="#">File defects</a></li>
        <li><a href="#">Re-print</a></li>
        <li><a href="#">Hidden</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
        <h4>New</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul class="drop">
        <li><a href="#">New</a></li>
        <li><a href="#">Checked</a></li>
        <li><a href="#">File defects</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
        <h4>Processing</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul  class="drop">
        <li><a href="#">Payment done</a></li>
        <li><a href="#">Printing</a></li>
        <li><a href="#">Re-print</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
        <h4>Completed</h4>
        <span class="ti-angle-right"></span>
    </div>
    <ul  class="drop">
        <li><a href="#">Completed</a></li>
        <li><a href="#">Close</a></li>
        <li><a href="#">Hidden</a></li>
    </ul>
    </div>
    </div>
`;
sideBar.innerHTML = content;

const barDrop = document.querySelectorAll(".dropDown");
const heads = document.querySelectorAll(".head");

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
      document.querySelector(".head").classList.add("active");
      overFlow.classList.remove("active")
    });
});

overFlow.addEventListener("click", () => {
    leftSide.classList.remove("active");
    barDrop.forEach(item => {
      item.classList.remove("active");
      document.querySelector(".head").classList.add("active");
      overFlow.classList.remove("active")
    });
});

