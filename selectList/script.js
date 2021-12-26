class sirket {
  constructor(sirketAdi, filialAdi) {
    (this.sirket = sirketAdi), (this.filial = filialAdi);
  }

  isciler = [[], [], []];

  gonder() {
    let data = this.isciler;
    let ad = document.getElementById("ad").value;
    let vezife = document.getElementById("vezife").value;
    let maas = document.getElementById("maas").value;

    data[0].push(ad);
    data[1].push(vezife);
    data[2].push(maas);
  }

  table() {
    let data = this.isciler;

    let tbl = document.getElementById("tbl");
    let show = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ad</th>
          <th scope="col">Vezife</th>
          <th scope="col">Maas</th>
        </tr>
      </thead>`;

     
    for (let i = 0; i < data[0].length; i++) {
      show += `   <tr id = "general">
            <th scope="row">${i + 1}</th>
            <td id="one"> ${data[0][i]} </td>
            <td id="two">${data[1][i]}</td>
            <td "three">${data[2][i]}</td>
          </tr>`
     
          
          
    };

  

    
    tbl.innerHTML = show;
  }
}



const a = new sirket("Yup Technology" ,"Nizami" );
const  b = new sirket("Yup Technology" ,"Elmler" );
const c = new sirket("Yup Technology" ,"Yasamal" );


document.getElementById("sirket").innerHTML = a.sirket;

 let par = document.getElementById("paragraph");
 let slc = document.getElementById("select");
 par.style.textAlign = "center";
 par.style.fontSize = "30px";
 par.style.color = "red";
let arr = [];
 arr.push(a.filial, b.filial, c.filial);

 slc.onchange = () => {
  let variable = slc.value;
   if (variable == 0) {
     par.innerHTML = a.filial;
     document.getElementById("exampleModalLabel").innerHTML = a.filial;
   } else if (variable == 1) {
     par.innerHTML = b.filial;
     document.getElementById("exampleModalLabel").innerHTML = b.filial;

   } else if (variable == 2) {
    par.innerHTML = c.filial;
    document.getElementById("exampleModalLabel").innerHTML = c.filial;

  } 
  document.getElementById("button").disabled = false;
 }




function send() {
  let name = document.getElementById("ad").value;
  let position = document.getElementById("vezife").value;
  let salary = document.getElementById("maas").value;


  if (name == "" || position == "" || salary == "") {
    alert("xanaları boş saxlamayın!");
  } else {
    a.gonder();
    a.table();
  }

  document.getElementById("ad").value = null
  document.getElementById("vezife").value = null
  document.getElementById("maas").value = null
  
};

let model = ["Nizami", "Elmlər","Yasamal"];
let selectList = document.getElementById("select");
 let button = document.getElementById("button");
onload = function () {


  let opt = `<option selected disabled> Filial seçin</option>`;
  for (let i = 0; i < model.length; i++) {
    opt +=  `<option value="${i}"> ${model[i]} </option>`;
  }
  selectList.innerHTML = opt;
  button.style.display = "block";
};
 





// function factorial (n) {
//   if (n) {
//    alert( n*= factorial(n-1));
//   } else{
//     1
//   }
// }