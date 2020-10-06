import React, {useEffect} from "react";
import { useDispatch, useSelector, shallowEqual} from 'react-redux';
import {fetchPlayersStarted} from "../../redux/player/playerActions";
import {getPlayersLoading, getPlayersError} from "../../redux/player/playerSelectors";


export const PlayersContainer = (props) => {
    const {children} = props;
    const playersLoading = useSelector(getPlayersLoading, shallowEqual);
    const playersError = useSelector(getPlayersError, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlayersStarted());
    }, [dispatch]);

    if(playersLoading){
        return (
            <div className="loadingSpinner">Spinner.....</div>
        )
    }

    if(playersError){
        console.log(playersError)
        return (
            <div className="contentWrapper">
                FEIL
            </div>
        )
    }

    return <>{children}</>
};
