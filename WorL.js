const Description = {
    name:"AngryNxho",
    age: 21,
    aboutMe:"Not much really, just a guy who likes to spend time on the computer, and play some games",
    goal:"Find something that gives some purpose to my life",
    Display(){
        return (`-Hello My name is ${Description.name}
        \n-I am a ${Description.age} yo
        \n-${Description.aboutMe}
        \n-Rn my goal is to ${Description.goal}`);
    }
};
console.log(Description.Display());
