import React from 'react';

const HeaderOld = (props) => {
    return (
        <div>
            {props.usingMobile ? null : <HeaderFilmBio bullet={Bullet} />}
            <div className="picture-container">
                <img src={Portrait} alt="Amar Spahić" />
                <div className="personal-info">
                    <span>{nameAndAge}</span>
                </div>
            </div>
            {props.usingMobile ? null : <HeaderDevBio bullet={Bullet} />}
        </div>
    );
};

export default HeaderOld;