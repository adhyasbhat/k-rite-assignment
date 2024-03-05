const hamBurger = document.querySelector(".toggle-btn");
const searchValue = document.querySelector("#searchValue");
hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function createDynamicTable(data) {
    const tableBody = document.querySelector("#dynamic-table tbody");

    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        const row = document.createElement("tr");

        const brandCell = document.createElement("td");
        brandCell.className = "brand";
        const checkbox = document.createElement("input");
        checkbox.className = "mx-2";
        checkbox.type = "checkbox";
        checkbox.id = `brand${index}`;
        checkbox.name = `brand${index}`;
        checkbox.value = item.product;
        const brandImage = document.createElement("img");
        brandImage.className = "brand-icon mx-1";
        brandImage.src = item.logo;
        brandImage.alt = item.product;
        brandCell.appendChild(checkbox);
        brandCell.appendChild(brandImage);
        brandCell.appendChild(document.createTextNode(item.product));

        const descriptionCell = document.createElement("td");
        descriptionCell.className = "description px-2";
        descriptionCell.textContent = item.description;

        const membersCell = document.createElement("td");
        membersCell.className = "members px-2";
        membersCell.innerHTML = renderMembers(item.members);

        const categoriesCell = document.createElement("td");
        categoriesCell.className = "categories px-2 mx-1";
        item.categories.forEach(item=>{
            const span = document.createElement("span");
            changeColor(span,item)
            span.className = "mx-1 px-2 time";
            span.textContent = item;
            categoriesCell.appendChild(span);
        })

        const tagsCell = document.createElement("td");
        tagsCell.className = "tags px-2";
        tagsCell.textContent = item.Tags;

        const meetingCell = document.createElement("td");
        meetingCell.className = "meeting px-2";
        const timeSpan = document.createElement("span");
        timeSpan.className = "time px-2";
        timeSpan.textContent = item.nextMeeting;
        changeColor(timeSpan,item.nextMeeting)
        meetingCell.appendChild(timeSpan);

        row.appendChild(brandCell);
        row.appendChild(descriptionCell);
        row.appendChild(membersCell);
        row.appendChild(categoriesCell);
        row.appendChild(tagsCell);
        row.appendChild(meetingCell);

        tableBody.appendChild(row);
    });
}

function renderMembers(members) {
    return members.map(image => `<img class="members-icon" src="img/${image}"/>`).join('');
}

  searchValue.addEventListener("input", function (){
    const search = searchValue.value.toLowerCase();
    const filteredData = data.filter(item => {
        return item.product.toLowerCase().includes(search) ||
            (Array.isArray(item.categories) && item.categories.some(cat => cat.toLowerCase().includes(search)));
    });
    createDynamicTable(filteredData);
});
createDynamicTable(data);
function changeColor(div,value){
    if(value.includes('No contact') || value.includes('E-commerce')){
        div.style.color = '#7D0A0A';
        div.style.backgroundColor = '#D04848';
    }
    else if(value.includes('In 6 hours') || value.includes('In 1 hour') || value.includes('In 30 minutes') || value.includes('SAAS') || value.includes('Marketprice')){
        div.style.color = '#114232';
        div.style.backgroundColor = '#87A922';
    }
    else if(value.includes('Tomorrow') || value.includes('Technology') || value.includes('Web Service')){
        div.style.color = 'blue';
        div.style.backgroundColor = '#59B4C3';
    }
    else if(value.includes('Next Month')){
        div.style.color = 'white';
        div.style.backgroundColor = 'grey';
    }
    else if(value.includes('Automation') || value.includes('Martech')){
        div.style.color = '#211951';
        div.style.backgroundColor = '#836FFF';
    }
    else if(value.includes('Publishing')){
        div.style.color = '#FF3EA5';
        div.style.backgroundColor = '#FF7ED4';
    }
    else if(value.includes('B2B')|| value.includes('Finance')){
        div.style.color = '#FAA300';
        div.style.backgroundColor = '#F5DD61';
    }
    else if(value.includes('B2C')|| value.includes('Transportation')){
        div.style.color = '#FAA300';
        div.style.backgroundColor = '#F5DD61';
    }
}