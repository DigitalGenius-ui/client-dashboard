// drop down part 
const statusDropDown = document.querySelector(".ui.select");
const printingDropDown = document.querySelector(".ui.printing");
const colorDropDown = document.querySelector(".ui.colorDropDown");
$(statusDropDown)
.dropdown({
  clearable: true,
  values: [
    {
      name: 'New',
      value: 'New',
      selected : true
    },
    {
      name     : 'Payment Done',
      value    : 'Payment Done',
    },
    {
      name     : 'Printing',
      value    : 'Printing',
    },
    {
      name     : 'Completed',
      value    : 'Completed',
    },
    {
      name     : 'Close',
      value    : 'Close',
    },
    {
      name     : 'File defects',
      value    : 'File defects',
    },
    {
      name     : 'Re-print',
      value    : 'Re-print',
    },
    {
      name     : 'Hidden',
      value    : 'Hidden',
    },
  ]
});

$(printingDropDown)
.dropdown({
    clearable:true,
    values : [
        {
            name: 'FDM / SLA',
            value: 'FDM',
            selected : true 
        }
    ]
});

$(colorDropDown)
    .dropdown({
    clearable: true
});

// modal part 
const deleteBtn = document.querySelector(".formDelete");
const deleteModal = document.querySelector(".deleteModal");
const modalClose = document.querySelector(".modalClose");
const modalCloseIcon = document.querySelector(".modalCloseIcon");

deleteBtn.addEventListener("click", () => {
    deleteModal.classList.add("active");
});

modalClose.addEventListener("click", () => {
    deleteModal.classList.remove("active");
});

modalCloseIcon.addEventListener("click", () => {
    deleteModal.classList.remove("active");
});