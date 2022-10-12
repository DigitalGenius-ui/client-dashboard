const tableBody = document.querySelector(".tableBody");

const tableData = [
  {
    status : "printing",
    ref : "20230102_1030_1",
    date : "2021-01-02",
    session : "3",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "32 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2020-01-03",
    session : "2",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "32 hours",
    model : "SLS",
    link : "https://www.google.co.jp/"
  },
  {
    status : "checked",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "3",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "13 hours",
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "file defects",
    ref : "20230102_1030_1",
    date : "2022-01-05",
    session : "5",
    category : "Staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "17 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "re-print",
    ref : "20230102_1030_1",
    date : "2019-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "7 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2019-01-02",
    session : "1",
    category : "Teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "15 hours",
    model : "SLA 3D",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2025-01-02",
    session : "1",
    category : "Staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "9 hours",
    model : "FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2025-01-02",
    session : "1",
    category : "Staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "9 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "hidden",
    ref : "20230102_1030_1",
    date : "2018-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "3 hours",
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "close",
    ref : "20230102_1030_1",
    date : "2018-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "3 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "re-print",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "4 hours",
    model : "MJS",
    link : "https://www.google.co.jp/"
  },
  {
    status : "printing",
    ref : "20230102_1030_1",
    date : "2020-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "9 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "payment done",
    ref : "20230102_1030_1",
    date : "2020-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "9 hours",
    model : "FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2021-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "5 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "hidden",
    ref : "20230102_1030_1",
    date : "2021-01-02",
    session : "3",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "8 hours",
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2019-01-02",
    session : "2",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "39 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2022-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "49 hours",
    model : "SLS",
    link : "https://www.google.co.jp/"
  },
  {
    status : "checked",
    ref : "20230102_1030_1",
    date : "2021-01-02",
    session : "3",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "17 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "file defects",
    ref : "20230102_1030_1",
    date : "2020-01-02",
    session : "5",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "18 hours",
    model : "FDM 3D",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2024-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "13 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "file defects",
    ref : "20230102_1030_1",
    date : "2025-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "29 hours",
    model : "MJF",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2025-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "44 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "Completed",
    ref : "20230102_1030_1",
    date : "2022-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "33 hours",
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "New",
    ref : "20230102_1030_1",
    date : "2026-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "16 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "hidden",
    ref : "20230102_1030_1",
    date : "2023-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "20 hours",
    model : "FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "close",
    ref : "20230102_1030_1",
    date : "2015-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "30 hours",
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "re-print",
    ref : "20230102_1030_1",
    date : "2014-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "10 hours",
    model : "SLS",
    link : "https://www.google.co.jp/"
  },
  {
    status : "printing",
    ref : "20230102_1030_1",
    date : "2015-01-02",
    session : "1",
    category : "Student",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "45 hours",
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "payment done",
    ref : "20230102_1030_1",
    date : "2014-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est : "25 hours",
    model : "MJF",
    link : "https://www.google.co.jp/"
  },
]

// handling the sort 
const tableHeaders = document.querySelectorAll("th");

tableHeaders.forEach((head) => {
  head.addEventListener("click", (e) => {
    let headName = e.target.dataset.name;
    let headOrder = e.target.dataset.order;
      if(headName === "estime"){
        if(headOrder === "dec"){
          e.target.dataset.order = "asc";
          state.querySet = state.querySet.sort(function(a, b) {
            return a.est.localeCompare(b.est, undefined, {
              numeric: true,
              sensitivity: 'base'
            });
          });
        }else{
          e.target.dataset.order = "dec";
          state.querySet = state.querySet.sort(function(a, b) {
            return b.est.localeCompare(a.est, undefined, {
              numeric: true,
              sensitivity: 'base'
            });
          });
        }
      }
      if(headName === "status"){
        sortTable(headOrder, headName, e);
      }
      if(headName === "category"){
        sortTable(headOrder, headName, e)
      }
      if(headName === "date"){
        sortTable(headOrder, headName, e)
      }
      if(headName === "model"){
        sortTable(headOrder, headName, e)
      }
      table();
  })
});

function sortTable(headOrder, headName, e){
  if(headOrder === "dec"){
    e.target.dataset.order = "asc";
    state.querySet = state.querySet.sort((a, b) => (
      a[headName].toUpperCase() > b[headName].toUpperCase()
      ));
  }else{
    e.target.dataset.order = "dec";
    state.querySet = state.querySet.sort((a, b) => (
      a[headName].toUpperCase() < b[headName].toUpperCase()
    ));
  }
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

// filter handler;
const dataMatch = document.querySelector("[data-match]");
const allDrop = document.querySelector("[data-allDrop]");
const matchHead = document.querySelector(".match");
let valueArr = [
  "New",
  "Checked",
  "Payment Done",
  "Printing",
  "Completed",
  "Close",
  "File Defects",
  "Re-print",
  "Hidden"
];

function filterDropdown(){
  const dropFilter = document.querySelectorAll(".dropFilter");
  dropFilter.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.target.dataset.value;
      if(filter === "all"){
        let all = valueArr.map((item) => ( `
          <div class="item filterBtn" data-value="${item}">${item}</div>
        `
      ));
        dataMatch.innerHTML = all.join(" ");
        matchHead.innerText = "All Matching";
      }
      if(filter === "new"){
        let newFilter = `
          <div class="item filterBtn" data-value="new">New</div>
          <div class="item filterBtn" data-value="checked">Checked</div>
          <div class="item filterBtn" data-value="file defects">file defects</div>
        `
        dataMatch.innerHTML = newFilter;
        matchHead.innerText = "All Matching";
      }
      if(filter === "processing"){
        let process = `
          <div class="item filterBtn" data-value="Payment done">Payment done</div>
          <div class="item filterBtn" data-value="Printing">Printing</div>
          <div class="item filterBtn" data-value="Re-print">Re-print</div>
        `
        dataMatch.innerHTML = process;
        matchHead.innerText = "All Matching";
      }
      if(filter === "completed"){
        let completed = `
          <div class="item filterBtn" data-value="completed">Completed</div>
          <div class="item filterBtn" data-value="close">Close</div>
          <div class="item filterBtn" data-value="hidden">Hidden</div>
        `
        dataMatch.innerHTML = completed;
        matchHead.innerText = "All Matching";
      }
      table();
    })
  });
}

function newFilter(data){
  const filterBtn = document.querySelectorAll(".filterBtn");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.target.dataset.value;
      let newFilter = state.querySet.filter((item) => item.status.toLowerCase() === filter.toLowerCase());
      if(filter === "all"){
        showTable(data.querySet)
      }else{
        showTable(newFilter)
      }
    })
  })
}

function table(){
  const data = pagination(state.querySet, state.page, state.row);
  paginationBtn(data.page);
  showTable(data.querySet);
  // filter function 
  newFilter(data);
  filterDropdown();
}
table();

// show table items;
function showTable(data){
  const tableInner = data.map((item) => {
    const { status, ref, date, session, category, netID, name, est, model, link } = item;
    return `
    <tr class="tableRow">
        <td data-label="status" style="text-transform : capitalize">${status}</td>
        <td data-label="ref">${ref}</td>
        <td data-label="date">${date}</td>
        <td data-label="session">${session}</td>
        <td data-label="category" class="category">${category}</td>
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
}