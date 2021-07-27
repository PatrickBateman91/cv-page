import React, { Fragment } from 'react';

import './styles.scss';

const TileIcons = (props) => {
    return (
        <Fragment>
            {props.tiles.javascript ? <img alt="javascript-icon" src="https://img.icons8.com/ios-glyphs/120/ffffff/javascript.png"/> : null}
            {props.tiles.typescript ? <img alt="typescript-icon" src="https://img.icons8.com/material-rounded/96/ffffff/typescript.png"/> : null}
            {props.tiles.react ? <img alt="react-icon" src="https://img.icons8.com/ios-glyphs/120/ffffff/react.png"/> : null }
            {props.tiles.angular ? <img alt="angular-icon" src="https://img.icons8.com/ios-filled/120/ffffff/angularjs.png"/> : null}
            {props.tiles.node ? <img alt="node-icon" src="https://img.icons8.com/windows/128/ffffff/nodejs.png"/> : null}
            {props.tiles.net ? <img alt="csharp-icon" src="https://img.icons8.com/ios-filled/100/ffffff/c-sharp-logo.png"/> : null}
            {props.tiles.noSQL ? <img alt="mongo-icon" src="https://img.icons8.com/ios-filled/100/ffffff/database-export.png"/>: null}
            {props.tiles.sql ? <img alt="sql-icon" src="https://img.icons8.com/ios-glyphs/90/ffffff/sql.png"/> : null}
        </Fragment>
    );
};

export default TileIcons;