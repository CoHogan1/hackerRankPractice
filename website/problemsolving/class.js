class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    static countuser(){
        // same no matter who calls. Doesnt need instantiation.
        console.log("lots of users");
    }

    register(){
        console.log(`${this.username} is now registered`);
    }
}


// let bob = new User("bob","bob@gmail", "password")
// let bill = new User("bill", "bill@email.com", "pass")
//
// bob.register()
// bill.register()
//
// User.countuser()

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password)
        this.package = memberPackage
    }

    getPackage(){
        console.log(`${this.username} has ${this.package}`);
    }
}


let mike = new Member("mike","mik3@mail.com","pro","standard")

mike.getPackage()
mike.register()

User.countuser()


class Test{
    constructor(var1,var2,var3){
        this.one = var1
        this.two = var2
        this.thr = var3
    }
    // methods
    seeAll(){
        console.log(`${this.one}`);
    }
}


let bill = new Test(1,2,3)

bill.seeAll()
