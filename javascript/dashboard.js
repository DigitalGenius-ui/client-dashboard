const total = document.querySelector(".total");
const fdm = document.querySelector(".fdm");
const material = document.querySelector(".material");
const color = document.querySelector(".color");
// boxes data 
let totalData = [
    {
        title : "All",
        value : 10
    },
    {
        title : "New",
        value : 10
    },
    {
        title : "Processing",
        value : 10
    },
    {
        title : "Completed",
        value : 10
    }
]
let fdmData = [
    {
        title : "FDM",
        value : 10
    },
    {
        title : "SLA",
        value : 10
    },
]
let materialData = [
    {
        title : "PLA",
        value : 10
    },
    {
        title : "PETG",
        value : 10
    },
    {
        title : "Nylon",
        value : 10
    },
    {
        title : "TPU",
        value : 10
    },
    {
        title : "PVA",
        value : 10
    },
    {
        title : "Wood",
        value : 10
    },
    {
        title : "Others",
        value : 10
    },
]
let colorData = [
    {
        title : "Black",
        value : 10
    },
    {
        title : "White",
        value : 10
    },
    {
        title : "Grey",
        value : 10
    },
    {
        title : "Ivory",
        value : 10
    },
    {
        title : "Transparent",
        value : 10
    },
]

const countsItems = (countData, div) => {
    const countInner = countData.map((item) => (
        `<div class="box">
        <span class="ti-eye"></span>
        <div class="detail">
            <h4>${item.value}k</h4>
            <p>${item.title}</p>
            </div>
        </div>`
    ));
    div.innerHTML = (countInner).join(" ");
}

countsItems(totalData, total);
countsItems(fdmData, fdm);
countsItems(materialData, material);
countsItems(colorData, color);