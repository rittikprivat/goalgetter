import React from "react";
import {useSelector} from "react-redux";
import {getPlayers} from "../../../redux/player/playerSelectors";
import {PlayersContainer} from "../../../containers/PlayersContainer/PlayersContainer";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const HomePage = () => {
    const players = useSelector(state => getPlayers(state));
    return (
        <div>
            <h1>Goal Getter</h1>
            <div>
                <PlayersContainer>
                    <List dense={true}>
                        {players && players.map((player, index) => (
                            <ListItem>
                                {player.name}
                            </ListItem>
                        ))}
                    </List>

                </PlayersContainer>
            </div>
        </div>
    )
};
