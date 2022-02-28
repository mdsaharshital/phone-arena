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
     console.log(mobiles);
     const resultArea = document.getElementById('search-area');
     mobiles.forEach(mobile =>{
         console.log(mobile);
         const div = document.createElement('div');
         div.innerHTML= `
            <div class="col" onclick="loadDetails('${mobile.slug}')">
                <div class="card">
                    <img src="${mobile.image}" class="card-img-top rounded p-2" alt="..." />
                    <div class="card-body text-center">
                    <h5 class="card-title">Phone Name : ${mobile.phone_name} </h5>
                        <h5 class="card-title">Brand : ${mobile.brand} </h5>
                        <a href="#" class="btn btn-primary">Details</a>
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
}

 /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */