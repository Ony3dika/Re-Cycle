let fname=document.getElementById("firstname")

let lname=document.getElementById("lastname")

let phone=document.getElementById("phone")

let mail=document.getElementById("email")

let pass=document.getElementById("password")

let DOB=document.getElementById("date")

let gender=document.getElementById("gender")

let sub=document.getElementById("account")

let table=document.getElementById("table")


sub.addEventListener("click", ell)

document.addEventListener("DOMContentLoaded", reload)

function ell(e){
    e.preventDefault();

    let row=document.createElement("tr")

    let one=document.createElement("td")

    //Fname

    one.textContent=fname.value

    one.id=("one")

    row.appendChild(one)

    //Lname

    let two=document.createElement("td")

    two.textContent=lname.value

    two.id=("two")

    row.appendChild(two)

    //Phone

    let three=document.createElement("td")

    three.textContent=phone.value

    three.id=("three")

    row.appendChild(three)

    //Mail

    let four=document.createElement("td")

    four.textContent=mail.value

    four.id=("four")

    row.appendChild(four)

    //Gender

    let six=document.createElement("td")

    let radio=document.querySelector('input[type=radio][name=gender]:checked');

    six.textContent=radio.value

    six.id=("six")

    row.appendChild(six)

    //Birth

    let five=document.createElement("td")

    five.textContent=DOB.value

    five.id=("five")

    row.appendChild(five)

    table.appendChild(row)

    alert("New Profile Created")

    save();

    function save(e){
        
    let area; 

    
    let people ={
        first:fname.value,
        last: lname.value,
        num:phone.value,
        email:mail.value,
        date:DOB.value,
        gen:radio.value
    }

    let newdata=people


    if (localStorage.getItem('people')==null){
        area=[]
    }else{
        area=JSON.parse(localStorage.getItem('people'))
    }   
    
    area.push(newdata)

    localStorage.setItem('people',JSON.stringify(area))

    }
}

//Refresh

function reload(){
    if (localStorage.getItem('people')==null){
        area=[]
    }else{
        area=JSON.parse(localStorage.getItem('people'))
    }   

    //Fname

    area.forEach(function(king){

        let row=document.createElement("tr")

        let one=document.createElement("td")

        one.textContent=king.first

        one.id=("one")

        row.appendChild(one)

        //Lname

        let two=document.createElement("td")

        two.textContent=king.last

        two.id=("two")

        row.appendChild(two)

        //Phone

        let three=document.createElement("td")

        three.textContent=king.num

        three.id=("three")

        row.appendChild(three)

        //Mail

        let four=document.createElement("td")

        four.textContent=king.email

        four.id=("four")

        row.appendChild(four)

        //Gender

        let six=document.createElement("td")

        six.textContent=king.gen

        six.id=("six")

        row.appendChild(six)

        //Birth

        let five=document.createElement("td")

        five.textContent=king.date

        five.id=("five")

        row.appendChild(five)

        table.appendChild(row)

    })

}
