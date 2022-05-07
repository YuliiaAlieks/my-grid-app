import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import SearchBox from "../../components/SearchBox/SearchBox";
import { RootState, useAppDispatch } from "../../store";

import { fetchUsers, resetUsers } from "./usersSlice";
import { UsersGrid } from "./UsersGrid";
import { UsersHeader } from "../../components/UsersHeader/UsersHeader";
import { DefaultErrorMessage } from "../../components/DefaultErrorMessage/DefaultErrorMessage";
import { Link } from "react-router-dom";


export function UsersList() {
    const { status } = useSelector((state: RootState) => state.users);

    const dispatch = useAppDispatch();

    const searchHandler = useCallback(
        (search = '') => {
            const params = {
                limit: 30,
                page: 1,
                search
            };

            dispatch(fetchUsers(params));
        }, []
    );

    useEffect(() => {
        searchHandler();

        return () => {
            dispatch(resetUsers());
        }

    }, []);

    return (
        <div>
            <SearchBox onSearch={searchHandler} />
            <UsersHeader />
            <Link style={{
                color: 'white',
                border: 'solid white 4px',
                display: 'flex',
                width: '70px',
                justifyContent: 'center'
            }} to="/users/37" >
                Details
            </Link>
            {
                status !== 'error'
                    ? <UsersGrid />
                    : <DefaultErrorMessage />
            }

        </div>

    )
}