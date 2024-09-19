/*## 01. 
For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
Find the average marks of the entire class.
--------------------------
*/
const students =[85, 97, 44, 37, 76, 60];
let sum=0;
for(let i=0; i<students.length; i++){
    sum+=students[i];
    };
const avg=sum/students.length;
console.log(avg);
/*
# 02.For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
*/
const items = [250, 645, 300, 900, 50]
let newItem=[];
for(let i =0; i<items.length; i++){
    newItem.push(items[i]-items[i]*0.1);
}
console.log(newItem);

/*
# 03.Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

a.	Remove the first company from the array

b.	Remove Uber & Add Ola in its place

c.	Add Amazon at the end*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies[1]="Ola";
companies.push("Amazon");

console.log(`Updated Companies: ${companies}`);
