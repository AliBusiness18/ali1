/*function toggleSidebar(){
    document.getElementById("header1").classList.toggle('active')
    document.getElementById("header1").style.width="1700"
}*/
const navMenu = document.getElementById('header1'),
      navToggle = document.getElementById('sidebar'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
       navMenu.classList.remove('show-menu')
    })
 }

// 253 countries
const countries = [
    { name: "مصر", code: "EG", phone: 20 },
    { name: "الإمارات العربية المتحدة", code: "AE", phone: 971 },
    { name: "الكويت", code: "KW", phone: 965 },
    { name: "البحرين", code: "BH", phone: 973 },
    { name: "عمان", code: "OM", phone: 968 },
    { name: "الأردن", code: "JO", phone: 962 },
    { name: "اليَمَن", code: "YE", phone: 967 },
    { name: "العراق", code: "IQ", phone: 964 },
    { name: "المغرب", code: "MA", phone: 212 },
    { name: "قطر", code: "QA", phone: 974 },
    { name: "ليبيا", code: "LY", phone: 218 },
    { name: "الجزائر", code: "DZ", phone: 213 },
    { name: "لبنان", code: "LB", phone: 961 },
    { name: "تونس", code: "TN", phone: 216 },
    { name: "موريتانيا", code: "MR", phone: 222 },
    { name: "السودان", code: "SD", phone: 249 },
    { name: "فلسطين", code: "PS", phone: 970 },
    { name: "جيبوتي", code: "DJ", phone: 253 },
    { name: "سوريا", code: "SY", phone: 963 },
],

    select_box = document.querySelector('.options'),
    search_box = document.querySelector('.search-box'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');

let options = null;

for (country of countries) {
    const option = `
    <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li> `;

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options = document.querySelectorAll('.option');
}

function selectOption() {
    console.log(this);
    const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('strong').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon, phone_code);

    input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    search_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for (option of options) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
}


selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);