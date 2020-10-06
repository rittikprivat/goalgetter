import { all, put, call, takeLatest } from 'redux-saga/effects';
import {FETCH_PLAYERS_STARTED} from './playerActions'
import {fetchPlayersSuccess, fetchPlayersFailure} from './playerActions'

import sanityClient from "../../api/client";

export function* fetchPlayers() {
    try {
        const players = yield call(sanityClient.fetch.bind(sanityClient),`*[_type == "player"]{name}`);
        yield put(fetchPlayersSuccess(players));
    } catch (error) {
        yield put(fetchPlayersFailure(error));
    }
}

export default function* opptjeningSaga() {
    yield all([
        takeLatest(FETCH_PLAYERS_STARTED, fetchPlayers),
    ]);
}
