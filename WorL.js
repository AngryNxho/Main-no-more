const Data = {
    name:"AngryNxho",
    age: 21,
    aboutMe:"Not much really, just a guy who likes to spend time on the computer, and play some games",
    goal:"Find something that gives some purpose to my life",
    Display(){
        return (`-Hello My name is ${Data.name}
        \n-I am a ${Data.age} yo
        \n-${Data.aboutMe}
        \n-Rn my goal is to ${Data.goal}`);
    }
};


console.log(Data.Display());
