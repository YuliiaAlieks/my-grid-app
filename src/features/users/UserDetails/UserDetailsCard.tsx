export const UserDetailsCard = ({userDetails, registerDate}) => {
    return (
        <div>
            <h3>{userDetails.name} </h3>
            <h3>( {userDetails.username} )</h3>
            <img src={userDetails.image} alt="Image" />
            <div style={{
                color: 'white'
            }} >
                <p> {userDetails.address} </p>
                <p>Email: {userDetails.email}</p>
                <p>Phone: {userDetails.phone}</p>
                <p>Age: {userDetails.age} </p>
                <p>Nationality: {userDetails.nationality} </p>
                <p>Registered on: {registerDate} </p>
            </div>
        </div>
    );
}