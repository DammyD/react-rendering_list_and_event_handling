import React from 'react'
import { profiles } from '../data/users-profile';
import '../styles/profile-list.css';

const ProfileLists = () => {

    const usersProfile = profiles.map((profile) => {
     
            return <li>
            <img src={profile.picture} alt="profile" />
            <div>
            <p>{profile.id}</p>
            <span>{profile.title}</span>
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>
            </div>
        </li>
    })
    return (
        <div>
            <ul className="profile-card">
                {usersProfile}
            </ul>
        </div>
    )
}

export default ProfileLists