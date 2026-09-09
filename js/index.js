const company_logo_element = document.getElementById("company-logo")

var times_clicked = 50

company_logo_element.onclick = handle_company_logo_clicked

function handle_company_logo_clicked() {
    times_clicked += 1
    console.log(times_clicked)
}


