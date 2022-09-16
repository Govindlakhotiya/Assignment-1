import React from 'react'


const Displaydata = ({profile}) => {
  return (
    <tr data-cy={`profile-wrapper-${profile.id}`}>
      <td data-cy="profile-id">{profile.id}</td>
      <td data-cy="profile-image">
        <img
        src={profile.profile_pic}
        style={{width:"150px", borderRadius:"7px"}}
        alt={profile.first_name}
        />
        </td>
      <td data-cy="profile-first-name">{profile.first_name}</td>
      <td data-cy="profile-last-name">{ profile.last_name}</td>
      <td data-cy="profile-email">{profile.email}</td>
      <td data-cy="profile-gender">{profile.gender}</td>
      <td data-cy="profile-country">{profile.country}</td>
      <button>Edit</button>
 
      
    </tr>
  )
}

export default Displaydata
