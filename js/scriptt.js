

/* =============load all phone data ============ */
 const loadPhone = async() =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`; 
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
 }

 /* ===========display all phone data ============*/
 const displayData =(allmobiles) =>{
     /* ===========display only 20 phone search data ============*/
     const mobiles = allmobiles.slice(0,20);
     const resultArea = document.getElementById('search-area');
     resultArea.textContent= '';
     mobiles.forEach(mobile =>{
         console.log(mobile);
         const div = document.createElement('div');
         div.innerHTML= `
            <div class="col">
                <div class="card">
                    <img src="${mobile.image}" class="mx-auto  rounded p-2" width='224' height='297' alt="..." />
                    <div class="card-body text-center">
                    <h5 class="card-title">Phone Name : ${mobile.phone_name} </h5>
                        <h5 class="card-title">Brand : ${mobile.brand} </h5>
                        <a href="#"  onclick="loadDetails('${mobile.slug}')" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
         `;
         resultArea.appendChild(div);
     })
 }
 /* ================ load Details================ */
 const loadDetails = async(id) =>{
     const  url = `https://openapi.programming-hero.com/api/phone/${id}`;
     const res = await fetch(url);
     const data = await res.json();
     displayDetails(data.data)
    }
/* ================ Display Details================ */
const displayDetails= details =>{
    console.log(details);
    const detailsArea = document.getElementById('details-card');
    const div = document.createElement('div');
    detailsArea.textContent='';
    div.innerHTML= `

            <div class="card mb-3 mx-auto" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 d-flex align-items-center py-2">
                        <img src="${details.image}" class="img-fluid rounded-start mx-auto"  alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Phone Name : ${details.name} </h5>
                        <h5 class="card-title">Brand : ${details.brand} </h5>
                        <p class="card-text"><span class="fw-bold">Main Features:</span>
                        <span class="fw-bold">ChipSet:</span> ${details.mainFeatures.chipSet}.<span class="fw-bold">DisplaySize: </span>${details.mainFeatures.displaySize}.
                        <span class="fw-bold">Sensors :</span> ${details.mainFeatures.sensors}.</p>
                        <p class="card-text"><span class="fw-bold">Others:</span> Bluetooth-${details?.others?.Bluetooth}, Radio-${details?.others?.Radio}</p>
                        <p class="card-text"><small class="text-muted">${details.releaseDate}</small></p>
                        </div>
                    </div>
                </div>
            </div>
    `;
    detailsArea.appendChild(div);
}