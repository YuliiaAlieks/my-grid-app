import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUserDetails } from "./userDetailsSlice";
import { RootState, useAppDispatch } from "../../../store";

export const UserDetails = () => {
    
    
    let id = 21;
    const {userDetails, status } = useSelector((state: RootState) => state.userDetails);
    console.log("🧚 ~ userDetails 1 in the component", userDetails)

    
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchUserDetails(id));
    }, []);

    const registerDate = new Date(userDetails.registerDate).toLocaleDateString()

    return (
        <div >
            <h2>User Details</h2>
            <h3>{userDetails.name} </h3>
            <h3>( {userDetails.username} )</h3>
            <img src={userDetails.image} alt="Image" />
            <div>
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