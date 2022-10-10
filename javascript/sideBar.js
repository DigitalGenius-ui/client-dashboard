const sideBar = document.querySelector(".sideBar")

let content = `
    <div class="title">
    <h1>Hi, User Name</h1>
    <span class="ti-close close"></span>
    </div>
    <div class="dropDown">
    <div class="head active">
      <div class="headIcon">
        <span class="ti-home menuIcon"></span>
        <h4>Dashboard & Export</h4>
      </div>
        <span class="ti-angle-right arrow"></span>
    </div>
    <ul class="drop">
        <li><a class="link" href="./home.html">Home</a></li>
        <li><a class="link" href="./details.html">Detail</a></li>
        <li><a class="link" href="./table.html">Table</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
      <div class="headIcon">
        <span class="ti-notepad menuIcon"></span>
        <h4>Order List ( Table )</h4>
      </div>
        <span class="ti-angle-right arrow"></span>
    </div>
    <!-- submenu  -->
    <ul class="drop active">
      <li class="subMenu">
        <div class="submenuHead">
          <p>All</p>
          <span class="ti-angle-right subMenuArrow"></span>
        </div>
        <ul class="linksDrop">
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
      </li>
      <li class="subMenu">
        <div class="submenuHead">
          <p>New</p>
          <span class="ti-angle-right subMenuArrow"></span>
        </div>
        <ul class="linksDrop">
          <li><a class="link" href="#">New</a></li>
          <li><a class="link" href="#">Checked</a></li>
          <li><a class="link" href="#">File defects</a></li>
        </ul>
      </li>
      <li class="subMenu">
        <div class="submenuHead">
          <p>Processing</p>
          <span class="ti-angle-right subMenuArrow"></span>
        </div>
        <ul class="linksDrop">
          <li><a class="link" href="#">Payment done</a></li>
          <li><a class="link" href="#">Printing</a></li>
          <li><a class="link" href="#">Re-print</a></li>
        </ul>
      </li>
      <li class="subMenu">
        <div class="submenuHead">
          <p>Completed</p>
          <span class="ti-angle-right subMenuArrow"></span>
        </div>
        <ul class="linksDrop">
          <li><a class="link" href="#">Completed</a></li>
          <li><a class="link" href="#">Close</a></li>
          <li><a class="link" href="#">Hidden</a></li>
        </ul>
      </li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
      <div class="headIcon">
        <span class="ti-layers-alt menuIcon"></span>
        <p>Role Control</p>
      </div>
        <span class="ti-angle-right arrow"></span>
    </div>
    <ul class="drop">
      <li><a class="link" href="./role.html">Role</a></li>
    </ul>
    </div>
    <div class="dropDown">
    <div class="head">
      <div class="headIcon">
        <span class="ti-settings menuIcon"></span>
        <h4>Calculator Settings</h4>
      </div>
        <span class="ti-angle-right arrow"></span>
    </div>
    <ul class="drop">
        <li><a class="link" href="#">Something</a></li>
        <li><a class="link" href="#">Something</a></li>
    </ul>
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

// order submenu 
const subMenu = document.querySelectorAll(".subMenu");
const submenuHeads = document.querySelectorAll(".submenuHead");

const allLinks = document.querySelectorAll(".link");
const linksDrop = document.querySelectorAll(".linksDrop");

subMenu.forEach((menu) => {
  const submenuHead = menu.querySelector(".submenuHead");
  submenuHead.addEventListener("click", () => {
    subMenu.forEach((item) => {
      if(item !== menu){
        item.classList.remove("active");
      }
    });

    submenuHeads.forEach((item) => {
      item.classList.remove("active");
    });

    menu.classList.toggle("active")
    submenuHead.classList.add("active");
  });
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => {
      if(link !== item){
        item.classList.remove("active");
      }
    })
    link.classList.toggle("active");
  })
});

// auth part 

const auth = document.querySelector(".authInner")

let authInner = `
    <div class="ui combo top right pointing dropdown icon button">
    <div class="btn">
     <span class="ti-settings"></span>
     <span class="ti-angle-down"></span>
    </div>
    <div class="menu">
     <div class="item"><span class="ti-user"></span> User</div>
     <div class="item"><span class="ti-new-window"></span> Sign Out</div>
    </div>
    </div>
`;
auth.innerHTML = authInner

let signOut = document.querySelector(".combo.dropdown");

// sign out drop down 
$(signOut)
    .dropdown({
    action: 'combo'
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
});


