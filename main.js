const state_codes =  ['AL', 'AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VA','VI','WA','WV','WI','WY']
const state_names = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Colombia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Virgin Islands','Washington','West Virginia','Wisconsin','Wyoming','']
let prevText = ""
const stage_text = ['Hello, Am I speaking with (name)', '']

function check(input) {
    i = 0
    for(const x of state_codes){
        if (input.toUpperCase() == x){
            document.getElementById("input").value = state_names[i]
        }
        else{
            i += 1
        }
    }
}

function change(text, stage) {
    prevText = document.getElementById("saythis").innerHTML
    document.getElementById("saythis").innerHTML = text;
}

function reset(){
    change('Hello, Am I speaking with (name)')
    document.getElementById('input').value = ''
}

function contToPrev(){
    change(prevText)
}