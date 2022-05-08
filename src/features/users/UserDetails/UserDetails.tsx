import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './style.css'
import { fetchUserDetails } from "./userDetailsSlice";
import { RootState, useAppDispatch } from "../../../store";
import { Loader } from "../../../components/Loader/Loader";
import { DefaultErrorMessage } from "../../../components/DefaultErrorMessage/DefaultErrorMessage";
import { UserDetailsCard } from "./UserDetailsCard";

export const UserDetails = () => {
    const { userId } = useParams();
    const { userDetails, status } = useSelector((state: RootState) => state.userDetails);
    const dispatch = useAppDispatch();

    useEffect(() => {
        userId && dispatch(fetchUserDetails(userId));
    }, []);

    const registerDate = new Date(userDetails.registerDate).toLocaleDateString();

    if(status === 'loading') {
        return <Loader/>
    }

    if(status === 'error') {
        return <DefaultErrorMessage />
    }

    return (
        <div >
            <h2>User Details</h2>
            <UserDetailsCard userDetails={userDetails} registerDate={registerDate}/>
        </div>
    );
}