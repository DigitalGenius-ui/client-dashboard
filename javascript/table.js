const tableBody = document.querySelector(".tableBody");

const tableData = {
        status : "New",
        ref : "20230102_1030_1",
        date : "2023-01-02",
        session : "1",
        category : "Student",
        netID : "gst220988",
        name : "Chan Tin Man",
        est : "15 hours",
        model : "SLA/FDM",
    }

const tableData2 = {
        status : "Processed",
        ref : "20230102_1030_1",
        date : "2023-01-02",
        session : "4",
        category : "Staff",
        netID : "gst220988",
        name : "Chan",
        est : "10 hours",
        model : "SLA/FDM",
    }

// handle the table data 
let combine = []
let emptyArray = [];

for (let x = 0; x < 200; x++) {
  emptyArray[x] = tableData;
}

let arr = [];
for (let x = 0; x < 50; x++) {
  arr[x] = tableData2;
}
combine = [...emptyArray, ...arr];

// handling the pagination 
let state = {
  "querySet" : combine,
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
  for (let page = maxLeft; page <= maxRight; page++) {
    btnContainer.innerHTML +=`<button class="item page" value=${page}>${page}</button>`;
  }
  if (state.page != 1) {
    btnContainer.innerHTML = `<button value=${1} class="page item next btn-active">First..</button>` + btnContainer.innerHTML
  }

  if (state.page != pages) {
    btnContainer.innerHTML += `<button value=${pages} class="page item next btn-active">Last..</button>`
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

function table(){
  const data = pagination(state.querySet, state.page, state.row);
  const tableInner = data.querySet.map((item) => {
    const { status, ref, date, session, category, netID, name, est, model} = item;
    return `
    <tr class="tableRow">
        <td data-label="status">${status}</td>
        <td data-label="ref">${ref}</td>
        <td data-label="date">${date}</td>
        <td data-label="session">${session}</td>
        <td data-label="category">${category}</td>
        <td data-label="netId">${netID}</td>
        <td data-label="name">${name}</td>
        <td data-label="time">${est}</td>
        <td data-label="tech">${model}</td>
        <td data-label="file">
          <a href="#">link</a>
        </td>
    </tr>
    `
});
tableBody.innerHTML = (tableInner).join(" ");
// console.log(data.page)
paginationBtn(data.page)
}

table();