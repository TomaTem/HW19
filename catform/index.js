const form = document.querySelector('form');

class Cat {
    constructor({ petname, age, name, tel, breed, food, sex, comment }) {
        this.petname = petname;
        this.age = age;
        this.name = name;
        this.tel = tel;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    console.log(data);
    
    let petname = data.get('petname');
    let age = data.get('age');
    let name = data.get('name');
    let tel = data.get('tel');
    let breed = data.get('breed');
    let food1 = "";
    let foodchecked = document.querySelectorAll('[name="food"]:checked');
    foodchecked.forEach(el_checked => {
        food1 += el_checked.value+" ";
        
    });
    let food = food1.trim();
    let sex = data.get('sex');
    let comment = data.get('comment');
    
    console.log(data.get('name'))
    console.log(data.get('age'))
    console.log(data.get('sex'))
    console.log(data.get('breed'))
    console.log(food)
    
    let cat = new Cat({ age, name, tel, breed, food, sex, comment, petname});
    console.log(cat);
})

