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
        status : "New",
        ref : "20230102_1030_1",
        date : "2023-01-02",
        session : "4",
        category : "Staff",
        netID : "gst220988",
        name : "Chan",
        est : "10 hours",
        model : "SLA/FDM",
    }

let combine = []

let emptyArray = [];

for (let x = 0; x < 10; x++) {
  emptyArray[x] = tableData;
}

let arr = [];

for (let x = 0; x < 10; x++) {
  arr[x] = tableData2;
}

combine = [...emptyArray, ...arr];
console.log(combine)

const tableInner = combine.map((item) => {
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
tableBody.innerHTML = (tableInner).join(" ")