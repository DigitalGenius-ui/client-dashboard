const tableBody = document.querySelector(".tableBody");
const searchBar = document.getElementById("search")

const tableData = [
  {
    status : "printing",
    ref : "20230102_1030_1",
    date : "2021-01-02",
    session : "3",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 3000,
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
    est: 3500,
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
    est: 300,
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
    est: 500,
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
    est: 7000,
    model : "SLA/FDM",
    link : "https://www.google.co.jp/"
  },

  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2025-01-02",
    session : "1",
    category : "Staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 125000,
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
    est: 3300,
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
    est: 3700,
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
    est: 860,
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
    est: 12230,
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
    est: 1400,
    model : "FDM",
    link : "https://www.google.co.jp/"
  },
  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2021-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 3800,
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
    est: 8500,
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2022-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 38756,
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
    est: 1267,
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
    est: 12473,
    model : "FDM 3D",
    link : "https://www.google.co.jp/"
  },
  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2024-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 73376,
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
    est: 3477,
    model : "MJF",
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
    est: 9568,
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2026-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 2653,
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
    est: 7856,
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
    est: 12477,
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
    est: 2357,
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
    est: 7345,
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
    est: 3000,
    model : "MJF",
    link : "https://www.google.co.jp/"
  },
  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2024-01-02",
    session : "1",
    category : "staff",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 73376,
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
    est: 3477,
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
    est: 2575,
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
    est: 9568,
    model : "SLA",
    link : "https://www.google.co.jp/"
  },
  {
    status : "new",
    ref : "20230102_1030_1",
    date : "2026-01-02",
    session : "1",
    category : "teacher",
    netID : "gst220988",
    name : "Chan Tin Man",
    est: 2653,
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
    est: 7856,
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
    est: 12477,
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
    est: 2357,
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
    est: 7345,
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
    est: 3000,
    model : "MJF",
    link : "https://www.google.co.jp/"
  },
]

//Keep a record of each stage output
let dataAfterFilter = [];
let dataAfterSort = [];
let pagedData = [];

//Global render configurations
let itemPerPage = 7;
let firstClassFilter = "all";
let secondClassFilter = "";
let sortBy = "status";
let inverse = false;
let pageNum = 0;


/*
  Flow for generating table view

  1. Reload data from global variable or backend
  2(a). Apply first class filter
  2(b). Apply second class filter (if needed)
  3. Perform sort
  4. Perform paging
  5. Render table to page
*/


//Load data from server side
function loadData(){
  let data = tableData;
  return data;
}

//Apply filter to the data
function applyFilter(){
  let renderingData = loadData();
  let filteredData = [];
  let matchingTags = [];
  if (secondClassFilter == ""){
    if (firstClassFilter == "new"){
      matchingTags = ["new", "checked", "file defects"];
    }else if (firstClassFilter == "processing"){
      matchingTags = ["payment done", "printing", "re-print"];
    }else if (firstClassFilter == "completed"){
      matchingTags = ["completed", "close", "hidden"];
    }else{
      //all
      matchingTags = ["new", "checked", "file defects", "payment done", "printing", "re-print", "completed", "close", "hidden"];
    }
  }else{
    matchingTags = [secondClassFilter];
  }

  //filter all the data
  renderingData.forEach(function(order){
    if (matchingTags.includes(order.status.toLowerCase())){
      filteredData.push(order);
    }
  });
  
  //Pass the filtered data to the next stage
  dataAfterFilter = filteredData;
  sortData();
}

//Sort the data according to selected header
function sortData(){
  let sortedData = dataAfterFilter;
  sortedData.sort(function(a, b) {
    var keyA = a[sortBy];
    var keyB = b[sortBy];
    
    var multiplier = (inverse)?-1:1;
    // Q1: why used * multiplier.
    if (keyA < keyB) return -1 * multiplier;
    if (keyA > keyB) return 1 * multiplier;
    return 0;
  });

  dataAfterSort = sortedData;
  renderToPagingList();
}

function renderToPagingList(){
  pagedData = [];
  let thisPage = [];
  for (var i = 0; i < dataAfterSort.length; i++){
    
    if (i%itemPerPage == 0 && i > 0){
      // console.log(i%itemPerPage, thisPage);
      let thisPageCopy = JSON.parse(JSON.stringify(thisPage));
      pagedData.push(thisPageCopy)
      thisPage = [];
    }
    thisPage.push(dataAfterSort[i]);
  }
  pagedData.push(thisPage);
  renderTable(pageNum);
}

function renderTable(page){
  if (page > pagedData.length -1){
    page = pagedData.length - 1;
  }
  let renderingOrderList = pagedData[page];
  $("#tableBody").html("");
  renderingOrderList.forEach(orderObject => {
    renderOrderToTable(orderObject);
  });
  paginationBtn(pagedData.length - 1);
}

// pagination buttons 
function paginationBtn(pages) {
  // next and prev buttons 
  let maxLeft = (pageNum - Math.floor(itemPerPage / 2));
  let maxRight = (pageNum + Math.floor(itemPerPage / 2));
  if(maxLeft < 1) {
    maxLeft = 1;
    maxRight = itemPerPage;
  }

  if(maxRight > pages){
    maxLeft = pages - (itemPerPage - 1);
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
    if(page == pageNum){
      activeClass = "active"
    }else{
      activeClass = ""
    }

    if(page > 3){
      lastBtn = "active"
    }else{
      lastBtn = ""
    }

    if(page >= pages){
      startBtn = "active"
    }else{
      startBtn = ""
    }
    btnContainer.innerHTML +=`<button class="item page ${activeClass}" value=${page}>${page}</button>`;
  }

  if (itemPerPage != 1) {
    btnContainer.innerHTML = `<button value=${1} class="page item ${startBtn}">First</button>` + btnContainer.innerHTML;
  }

  if (itemPerPage != pages) {
    btnContainer.innerHTML += `<button value=${pages} class="page item ${lastBtn}">Last</button>`;
  }
  let pageBtn = document.querySelectorAll(".page");
  pageBtn.forEach(page => {
    page.addEventListener("click", (e) => {
      let target = e.target.value;
      pageNum = +target;
      renderToPagingList();
    });
  });
}

//Helper function to convert seconds to human readable format
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay; 
}

//Render a job to table
function renderOrderToTable(orderObject){
  $("#tableBody").append(`<tr class="tableRow">
    <td data-label="status" style="text-transform : capitalize" 
    data-value=${orderObject.status}>${orderObject.status}</td>
    <td data-label="ref">${orderObject.ref}</td>
    <td data-label="date">${orderObject.date}</td>
    <td data-label="session">${orderObject.session}</td>
    <td data-label="category" class="category">${orderObject.category}</td>
    <td data-label="netId">${orderObject.netID}</td>
    <td data-label="name">${orderObject.name}</td>
    <td data-label="time">${secondsToHms(orderObject.est)}</td>
    <td data-label="tech">${orderObject.model}</td>
    <td data-label="file">
      <a href="${orderObject.link}" class="ti-link table-link"></a>
    </td>
  </tr>`);
   //insert colors
  let tableData = [...document.querySelectorAll("td")];
  insertColor(tableData);
}

// insert Color function 
function insertColor(data){
  for (let item of data) {
    if(item.dataset.label === "status"){
      let text = item.innerText;
      switch (text) {
        case "New" :
          item.className = "new";
        break;
        case "Checked" :
          item.style.color = "grey"
        break;
        case "Hidden" :
          item.style.color = "grey"
        break;
        case "Close" :
          item.style.color = "#CC355F"
        break;
        case "File Defects" :
          item.className = "new";
        break;
        case "Completed" : 
        item.className = "completed";
        break;
        case "Payment Done" : 
        item.className = "completed";
        break;
        case "Printing" : 
        item.style.color = "#efcc00"
        break;
        case "Re-Print" : 
        item.style.color = "#efcc00"
        break;
      }
    }
  }
}

//Bind user events
document.querySelectorAll("th").forEach(head => {
  head.addEventListener("click", (e) => {
    let headName = e.target.dataset.name;
    if (headName != undefined){
      if (sortBy == headName){
        //Already in that mode. Swap the sort sequence
        inverse = !inverse;
      }else{
        //Set this as the sorting mode
        sortBy = headName;
        inverse = false;
      }
    }
    sortData();
  });
});

//Bind first class filter event
$("#currentSelectedStatus").on("change", function(e){
  //Update the status of the nextFilter
  let value = $("#currentSelectedStatus").val();
  $("#subfilter").find(".item").hide();
  $("#subfilter").find("." + value).show();
  $("#subfilter").dropdown("restore default text");

  //Flush the table and load all matching items
  firstClassFilter = value;
  secondClassFilter = "";

  //Update the rendering view
  applyFilter();
});

//Bind second class filter event
$("#nextFilter").on("change", function(e){
  let value = e.currentTarget.value;
  secondClassFilter = value;
   //Update the rendering view
  applyFilter();
});

// reload page
let reload = document.querySelector(".reload");
reload.addEventListener("click", () => {
  document.location.reload()
}) 