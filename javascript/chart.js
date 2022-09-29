// chart datas 
 /*
    Use Frequency Diagram
    0 => No one use the facility
    10 => Heavily used
    Each time slot have 31 days of data
    The following is a random dataset for testing the demo
*/
let data = {
    "9":[6,0,7,6,4,10,3,8,4,5,8,6,4,8,6,9,1,8,2,8,5,4,6,6,7,2,1,10,10,9,1],
    "10":[1,6,10,3,10,3,2,9,9,5,2,8,1,3,1,6,3,8,4,9,4,4,1,0,9,5,6,6,0,5,10],
    "11":[9,2,5,5,8,9,1,1,8,1,8,4,5,8,1,8,10,8,2,2,3,3,1,9,10,2,9,4,10,5,7],
    "12":[8,5,7,6,8,8,3,7,3,0,0,4,5,2,5,2,9,1,2,9,7,10,3,7,7,7,2,6,1,8,0],
    "Lunch":[4,10,0,4,10,4,7,6,9,3,2,0,0,0,0,0,7,5,0,1,1,4,3,3,4,1,0,0,4,7,9],
    "14":[1,0,6,2,1,0,0,5,3,7,10,3,1,9,1,5,2,10,8,0,7,7,9,8,4,3,1,2,7,4,9],
    "15":[1,5,4,9,4,10,5,7,9,7,4,0,3,1,6,2,6,0,6,6,1,7,3,0,0,7,1,7,0,10,1],
    "16":[6,9,2,4,7,1,8,10,9,9,10,6,4,1,7,2,3,9,2,3,2,7,6,3,10,6,7,4,7,7,8],
    "17":[0,2,3,9,5,7,0,6,2,3,9,5,2,7,1,3,2,7,10,6,6,10,3,5,3,7,6,9,0,9,10]
}
 //Load the table into the target element
 function loadTable(tableid, data){
     //Clear the old table content
     $("#" + tableid).html("");
     //Declare a function for generating the grid color based on use frequency
     function getColorByFreqVal(freqval){
         return "background-color: #7f52db; opacity: " + (parseFloat(freqval)/10) * 0.7 + ";";
     }
     //Render the table data from top to bottom
     for (var i = 0; i < 31; i++){
         let thisRow = ``;
         thisRow += (`<tr><td class="label">${i+1}</td>`);
         for (const [key, value] of Object.entries(data)) {
             thisRow += (`<td style="${getColorByFreqVal(value[i])}"></td>`);
         }
         thisRow += `</tr>`;
         $("#" + tableid).append(thisRow);
     }
     //Render the bottom bar
     $("#" + tableid).append(`<tr>
         <td class="label">AM</td>
         <td class="linecut"><span>9</span></td>
         <td class="linecut"><span>10</span></td>
         <td class="linecut"><span>11</span></td>
         <td class="linecut"><span>12</span></td>
         <td class="linecutText"><span>Lunch</span></td>
         <td class="linecut"><span>14</span></td>
         <td class="linecut"><span>15</span></td>
         <td class="linecut"><span>16</span></td>
         <td class="linecut"><span>17</span></td>
     </tr>`);
 }
 //Load the example data
 loadTable("freqtable", data);

//  chart calendar 
const start = document.querySelectorAll("#rangestart")
const end = document.getElementById("rangestart")

start.forEach((calender) => {
    $(calender).calendar({
        type: 'date',
    });
})
$(end).calendar({
    type: 'date',
    startCalendar: $('#rangestart')
});