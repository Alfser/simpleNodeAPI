
class User{

    static base = []
    
    constructor(name, email, password, role){
        this.name = name
        this.email = email
        this.password = password
        this.role = rolo
    }

    get password(){
        return this.password
    }

    set password(password){
        this.password = password
    }

    static add(user){
        base.push(user)
    }
}

user = [
    {   
        name:"Foo",
        email:"foo@test.com",
        password:"foo",
        role:0
    },
    {
        name:"Bar",
        email:"bar@test.com",
        password:"bar",
        role:1
    }

];

console.log(User)

User.base = user

console.log(User.base)

module.exports = User