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

// form validation part 
// status form 
const submit = document.getElementById("submit");
const refNo = document.getElementById("refNo");
const date = document.getElementById("date");
const time = document.getElementById("time");
const session = document.getElementById("session");
const netId = document.getElementById("netId");
const personName = document.getElementById("name");
const category = document.getElementById("category");
console.log(submit)

submit.addEventListener("click", () => {
  formValidation(refNo);
  formValidation(date);
  formValidation(time);
  formValidation(session);
  formValidation(personName);
  formValidation(category);
  netIdValidation();
});

function netIdValidation(){
  const parentElement = netId.parentElement;
  if(netId.value.length < 10){
    console.log(netId.value)
    parentElement.classList.add("error")
  }
  else{
    parentElement.classList.remove("error")
  }
}

// file form part 
const fileSubmit = document.getElementById("fileSubmit");
const link = document.getElementById("link");
const esTime = document.getElementById("esTime");
const esCost = document.getElementById("esCost");
const inFill = document.getElementById("inFill");
const quality = document.getElementById("quality");

fileSubmit.addEventListener("click", () => {
  formValidation(link);
  formValidation(esTime);
  formValidation(esCost);
  formValidation(inFill);
  formValidation(quality);
});

function formValidation(input){
  const parentElement = input.parentElement;
  if(input.value === ""){
    parentElement.classList.add("error")
  }else{
    parentElement.classList.remove("error")
  }
}