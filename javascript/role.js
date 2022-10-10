const permissionDropDown = document.querySelector(".permissionDropDown");
const roleDropDown = document.querySelector(".roleDropDown");

$(permissionDropDown)
    .dropdown({
    clearable: true
});

$(roleDropDown)
    .dropdown({
    clearable: true
});

// table data handler 
const addTable = document.querySelector(".addTable");

const tableData = [
    {
        id : 1,
        permission : "Fully Control",
        role : "Admin",
        netId : "gst2209@polyu.edu.hk"
    },
    {
        id : 2,
        permission : "View all orders",
        role : "Assistance",
        netId : "gst2209@polyu.edu.hk"
    },
    {
        id : 3,
        permission : "View personal orders only",
        role : "Normal User",
        netId : "gst2209@polyu.edu.hk"
    },
]

const showData = tableData.map((item) => {
    return `
        <tr class="tableRow">
            <td class="action">
              <span class="ui basic icon button"><i class="trash alternate icon"></i></span>
              <span class="ui basic icon button"><i class="pen square icon"></i></span>
            </td>
            <td>${item.permission}</td>
            <td>${item.role}</td>
            <td>${item.netId}</td>
        </tr>
    `
});
addTable.insertAdjacentHTML("beforebegin", showData.join(" "))