function Profile() {
    return (
        <div>
            <h1>Bis Profile card challenge</h1>
            <ProfileCard
                Name="Alice"
                Age={30}
                greeting={
                    <div>
                        <strong>Alice, have a good day</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                Name="Bob"
                Age={25}
                greeting={
                    <div>
                        <strong>Bob, have a great day</strong>
                    </div>
                }
            >
                <p>Hobbies: Gaming, Cooking</p>
                <p>This is amazing</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

export default Profile;


function ProfileCard({ Name, Age, greeting, children }) {
    return (
        <>
            <h2>Name: {Name}</h2>
            <p>Age: {Age}</p>
            <div>{greeting}</div>
            <div>{children}</div>
        </>
    );
}