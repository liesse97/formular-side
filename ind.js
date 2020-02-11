 
const inputs=document.querySelectorAll('input');



const patterns={
     
     username:/^([a-z]{3,10})\s([a-z]{3,20})$/i,
     password:/^[a-z0-9]{5,10}$/,
     email:/^([a-z\d]+)@([a-z0-9]+)\.([a-z]{2,8})/,
     telephone:/^\d{10}$/,
};

//validation function, see if something is valide
function validate(field,regex){
    if(regex.test(field.value)){
        field.className='valid';
    }else{
        field.className='Invalid';
    }
}

inputs.forEach((item)=>{
item.addEventListener('keyup',(e)=>{
//e.target.attribute.name.value;
validate(e.target,patterns[e.target.attributes.name.value])
});


})
