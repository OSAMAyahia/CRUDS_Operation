let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let submit = document.getElementById('submit');
let search = document.getElementById('search');
let category = document.getElementById('category');
let title = document.getElementById('title');
let mood='create'
let tmp;
function getTotal() {
    if (price.value!='') {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background="#040"


    }
    else { total.innerHTML = "";
        total.style.background="#a00d02"}
 }



let ar;
if (localStorage.product != null) { ar = JSON.parse(localStorage.product); }
else { ar = [] }


// ///erorr
// submit.onclick = function () {
//     let newPro = {
//         title: title.value,
//         price: price.value,
//         taxes: taxes.value,
//         ads: ads.value,
//         discount: discount.value
//         , total: total.innerHTML,
//         count: count.value,
//         category: category.value,
// }

// if (mood === 'create') {
//     if (newPro.count > 1) {
        
//         for (i = 0; i < newPro.count; i++) {
//             ar.push(newPro)
//         }
//     }

//     else { ar.push(newPro) }
// }
// else {
//     ar[tmp] = newPro;
//     mood = ' create'
//     submit.innerHTML = 'Create' 
//     submit.style.background = '#ffffff'
//     count.style.display='block'
// } 
//     localStorage.setItem('product' , JSON.stringify(ar))
//     console.log(ar)
// clear()
// append()
// getTotal()
// }

// /////////
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    };

    if (mood === 'create') {
        if (newPro.count > 1) {
            for (let i = 0; i < newPro.count; i++) {
                ar.push(newPro);
            }
        } else {
            ar.push(newPro);
        }
    } else {
        ar[tmp] = newPro;
        mood = 'create'; // تصحيح القيمة إلى 'create' بدون مسافة
        submit.innerHTML = 'Create';
        submit.style.background = '#ffffff';
        count.style.display = 'block';
    }

    localStorage.setItem('product', JSON.stringify(ar));
    console.log(ar);
    clear();
    append();
    // getTotal();
};
// ///////////

function clear() {
    title.value = '', price.value = ''; taxes.value = ''; ads.value = ''; discount.value
        = ''; total.innerHTML = ''; count.value = ''; category.value = ''; }

function append() {
        getTotal();

    let table = ''
    for (i = 0; i < ar.length; i++){
        table += ` <tr>
        <td>${i}</td>
        <td>${ar[i].title}</td>
        <td>${ar[i].price}</td>
        <td>${ar[i].taxes}</td>
        <td>${ar[i].ads}</td>
        <td>${ar[i].discount}</td>
        <td>${ar[i].total}</td>
        <td>${ar[i].category}</td>
        <td> <button onclick='updateData(${i})' id="update"> update </button></td>
        <td> <button onclick='deleteTable(${i})'  id="delete"> delete </button></td>
    </tr>`

    };


    document.getElementById('tbody').innerHTML = table;

    let add = document.getElementById("deleteall");
    if (ar.length > 0) {
        add.innerHTML = `<button onclick="delet_all()" > delete All ${ar.length} </button>`
    }
    else { add.innerHTML = ''}

}

// append()

function  deleteTable(i){
    ar.splice(i, 1);
    localStorage.product=JSON.stringify(ar)
    append()

}

function delet_all() {
    localStorage.clear();
    ar.splice(0);
append()
}

function updateData(i) {
    tmp = i;
    title.value = ar[i].title  
    price.value = ar[i].price
  taxes.value =ar[i].taxes  
  ads.value =ar[i].ads  
    discount.value = ar[i].discount 
      getTotal()   
    category.value = ar[i].category
    count.style.display = 'none'
    submit.innerHTML = 'Update'
    submit.style.background = '#008000'
    mood = 'update'
    scroll  ({ top : 0 , behavior : 'smooth' })

    
}


append()



