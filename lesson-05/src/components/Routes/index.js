import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../../views/Home";
import Chats from "../../views/Chats";
import Profile from "../../views/Profile";
import Typography from "@material-ui/core/Typography";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Typography className="top-menu">
                <Link to="/">
                    Home
                </Link>
                <Link to="/chats">
                    Chats
                </Link>
                <Link to="/profile">
                    Profile
                </Link>
            </Typography>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/chats/:chatId?">
                    <Chats />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route>
                    <h1>404 page</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}