import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {SettingIcon, LogoutIcon} from '../../assets/SVG';
import {thanos} from '../../assets/Images';
import "./user.scss";

type IuserProps = {
    fullName: string
    title:string
    imageUrl?:string
}


const User = ({fullName, title, imageUrl}:IuserProps) => {

    return (
        <div className="user">
            <Avatar alt="Dalia Matter" src={imageUrl ? imageUrl: thanos} />
            <div className="user--info">
                <h2 className="user--info__name">{fullName}</h2>
                <h4 className="user--info__title">{title}</h4>
            </div>
            <div className="user--actions">
                <IconButton className="user--actions__btn">
                    <SettingIcon size="18" />
                </IconButton>
                <IconButton className="user--actions__btn">
                    <LogoutIcon size="18" />
                </IconButton>
            </div>
        </div>
    )

}

export default User