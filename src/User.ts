class User{
    username: string;
    password: string;
    age: number;
    loggedIn: boolean;
    constructor(username: string, password: string, age: number){
        this.username = username;
        this.password = password;
        this.age = age;
        this.loggedIn = false;
    }

    login(password: string): void{
        if(this.password === password){
            this.loggedIn = true;
        }else{
            throw Error("Incorrect Password!")
        }
    }

    logout(): void{
        this.loggedIn = false;
    }
}