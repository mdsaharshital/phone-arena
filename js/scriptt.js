// Phone Search
// URL Format: 

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089

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
                        <p class="card-text">Main Features:
                        ChipSet: ${details.mainFeatures.chipSet}.DisplaySize ${details.mainFeatures.displaySize}.Memory ${details.mainFeatures.memory}.</p>
                        <p class="card-text"><small class="text-muted">${details.releaseDate}</small></p>
                        </div>
                    </div>
                </div>
            </div>
    `;
    detailsArea.appendChild(div);
}

 /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */