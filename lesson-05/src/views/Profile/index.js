import {store} from "../../store";

export default function Profile() {
    const state = store.getState();

    console.log(state);

    return <h1>Profile</h1>;
}