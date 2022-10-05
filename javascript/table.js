const tableBody = document.querySelector(".tableBody");

const tableData = [
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Processing",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "3",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "2",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "checked",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "3",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "file defects",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "5",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Processing",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "hidden",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "close",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "re-print",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "printing",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "payment done",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Processing",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "3",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "2",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "checked",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "3",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "file defects",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "5",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Processing",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "hidden",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "close",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "re-print",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "printing",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "payment done",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
]

// handling the sort 
const sort = document.querySelector(".table .head");
sort.addEventListener("click", () => {
  tableData.sort(sortTable);
  table();
});

function sortTable(a, b) {
    const statusA = a.status.toUpperCase();
    const statusB = b.status.toUpperCase();

    let comparison = 0;
    if(statusA > statusB){
      comparison = 1
    }else if(statusA < statusB){
      comparison = -1
    }
    return comparison;
}

// handling the pagination 
let state = {
  "querySet" : tableData,
  "page" : 1,
  "row" : 7,
  "window" : 5
}

const pagination = (querySet, page, row) => {
  const trimStart = (page - 1) * row;
  const trimEnd = trimStart + row;

  const trimData = querySet.slice(trimStart, trimEnd);
  const pageNumber = Math.ceil(querySet.length / row);

  return {
    "querySet" : trimData,
    "page" : pageNumber
  }
}

// pagination button 
const paginationBtn = (pages) => {
    // next and prev buttons 
    let maxLeft = (state.page - Math.floor(state.window / 2));
    let maxRight = (state.page + Math.floor(state.window / 2));
  
    if(maxLeft < 1) {
      maxLeft = 1;
      maxRight = state.window
    }
  
    if(maxRight > pages){
      maxLeft = pages - (state.window - 1);
      if(maxLeft < 1){
        maxLeft = 1
      }
      maxRight = pages
    }
  const btnContainer = document.querySelector(".pagination-number");
  btnContainer.innerHTML = "";
  let activeClass;
  let startBtn;
  let lastBtn;

  for (let page = maxLeft; page <= maxRight; page++) {
    if(page == state.page){
      activeClass = "active"
    }else{
      activeClass = ""
    }

    if(page > 1){
      lastBtn = "active"
    }

    if(page >= pages){
      startBtn = "active"
    }
    btnContainer.innerHTML +=`<button class="item page ${activeClass}" value=${page}>${page}</button>`;
  }

  if (state.page != 1) {
    btnContainer.innerHTML = `<button value=${1} class="page item ${startBtn}">First</button>` + btnContainer.innerHTML;
  }

  if (state.page != pages) {
    btnContainer.innerHTML += `<button value=${pages} class="page item ${lastBtn}">Last</button>`;
  }
  const pageBtn = document.querySelectorAll(".page");
  pageBtn.forEach(page => {
    page.addEventListener("click", (e) => {
      const target = e.target.value;
      state.page = +target;
      table();
    });
  });
}

// search Handler 
const search = document.getElementById("search");
  search.addEventListener("input", (e) => {
    const searchString = e.target.value
    state.querySet = tableData.filter((item) => (
      item.status.toLowerCase().includes(searchString) ||
      item.name.toLowerCase().includes(searchString) 
      ))
    table();
});

// filter handler 
const all = document.querySelector("[data-all");
const newFilter = document.querySelector("[data-new]");
const processFilter = document.querySelector("[data-process]");
const completeFilter = document.querySelector("[data-complete]");

// all filter 
all.addEventListener("click", () => {
  state.querySet = tableData;
  table();
});

// new filter part 
newFilter.addEventListener("click", (e) => {
  const target = e.target;
  filterElements("new", target);
  filterElements("file", target);
  filterElements("check", target);
  table();
});

// processing filter 
processFilter.addEventListener("click", (e) => {
  const target = e.target;
  filterElements("payment", target);
  filterElements("printing", target);
  filterElements("rePrinting", target);
  table();
});

// completed filter 
completeFilter.addEventListener("click", (e) => {
  const target = e.target;
  filterElements("completed", target);
  filterElements("close", target);
  filterElements("hidden", target);
  table();
});

function filterElements(className, target){
  if(target.classList.contains(className)){
    const innerText = (target.innerText).toLowerCase();
    state.querySet = state.querySet.filter((item) => (item.status).toLocaleLowerCase() === innerText);
  }
}

// show table items 
function table(){
  const data = pagination(state.querySet, state.page, state.row);
  const tableInner = data.querySet.map((item) => {
    const { status, ref, date, session, category, netID, name, est, model, link} = item;
    return `
    <tr class="tableRow">
        <td data-label="status" style="text-transform : capitalize">${status}</td>
        <td data-label="ref">${ref}</td>
        <td data-label="date">${date}</td>
        <td data-label="session">${session}</td>
        <td data-label="category">${category}</td>
        <td data-label="netId">${netID}</td>
        <td data-label="name">${name}</td>
        <td data-label="time">${est}</td>
        <td data-label="tech">${model}</td>
        <td data-label="file">
          <a href="${link}" class="ti-link table-link"></a>
        </td>
    </tr>
    `
});
tableBody.innerHTML = (tableInner).join(" ");
paginationBtn(data.page)
}
table();