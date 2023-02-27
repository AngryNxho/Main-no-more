import ProfileCard from "./ProfileCard";


function App(){
    return (
        <div>
            <div>
                Personal Digital Assistance</div>

            <ProfileCard title = "Alexa" handle = "alexa99"></ProfileCard>
            <ProfileCard title = "Cortana" handle = "cortana32"></ProfileCard>
            <ProfileCard title = "Siri" handle = "siri01"></ProfileCard>
        </div>

    );
}

export default App;