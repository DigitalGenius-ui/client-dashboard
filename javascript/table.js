const tableBody = document.querySelector(".tableBody");

const tableData = [
  {
    status : "Processing",
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
    status : "Processing",
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
    status : "Processing",
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
    status : "Processing",
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
const statusSort = document.querySelector(".table .status");
const tableDate = document.querySelector(".table .tableDate");
const category = document.querySelector(".table .category");
const esTime = document.querySelector(".table .esTime");
const tech = document.querySelector(".table .tech");

// status sort 
  statusSort.addEventListener("click", () => {
    state.querySet = state.querySet.sort((a, b) => {
    const statusA = a.status.toUpperCase();
    const statusB = b.status.toUpperCase();
    let comparison = 0;
    if(statusA > statusB){
      comparison = 1
    }else if(statusA < statusB){
      comparison = -1
    }
    return comparison;
    });
    table();
  });

// date sort 
  tableDate.addEventListener("click", () => {
    state.querySet = state.querySet.sort(function(a,b){
      let c = new Date(a.date);
      let d = new Date(b.date);
      return d - c;
    });
    table();
  })

// category sort 
  category.addEventListener("click", () => {
    state.querySet = state.querySet.sort((a, b) => {
    const statusA = a.category.toUpperCase();
    const statusB = b.category.toUpperCase();
    let comparison = 0;
    if(statusA > statusB){
      comparison = 1
    }else if(statusA < statusB){
      comparison = -1
    }
    return comparison;
    });
    table()
  });

// estimate time sort 
  esTime.addEventListener("click", () => {
    state.querySet = state.querySet.sort(function(a, b) {
      return a.est.localeCompare(b.est, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    });
    table();
  });

// 3D Teach SORT 
  tech.addEventListener("click", () => {
    state.querySet = state.querySet.sort((a, b) => {
    const statusA = a.model.toUpperCase();
    const statusB = b.model.toUpperCase();
    let comparison = 0;
    if(statusA > statusB){
      comparison = 1
    }else if(statusA < statusB){
      comparison = -1
    }
    return comparison;
    });
   table();
  });

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
const filterBtn = document.querySelectorAll(".filterBtn");
function table(){
  const data = pagination(state.querySet, state.page, state.row);
  paginationBtn(data.page);
  showTable(data.querySet);
  // console.log(data.querySet)
  // filter function 
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const filter = e.currentTarget.dataset.value;
      let newFilter = state.querySet.filter((item) => item.status.toLowerCase() === filter);
      if(filter === "all"){
        showTable(data.querySet)
      }else{
        showTable(newFilter)
      }
    });
  });
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