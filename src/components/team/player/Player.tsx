import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Player.scss";

export type Player = {
    name?: string;
    number?: number;
};

interface PlayerViewProps {
    player: Player;
}

interface PlayerViewState {}

class PlayerView extends Component<PlayerViewProps, PlayerViewState> {
    static playerShape = PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number
    });

    render() {
        const { player } = this.props;

        return (
            <div className="player-view">
                <div className="player">
                    <div className="number">{player.number}</div>
                    <div className="name">{player.name}</div>
                </div>
            </div>
        );
    }
}

export default PlayerView;
