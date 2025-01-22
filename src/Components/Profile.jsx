import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USER_PROFILE = gql`
    query {
        user(id: 'USER_ID') {
            name
            email
            address {
                street
                city
                zipcode
            }
            phone
            website
            company {
                name
            }
        }
    }
`;

const Profile = () => {
    const { loading, error, data } = useQuery(GET_USER_PROFILE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='profile'>
            <h2>{data.user.name}</h2>
            <p>Email: {data.user.email}</p>
            <p>Phone: {data.user.phone}</p>
            <p>Website: {data.user.website}</p>
            <p>Company: {data.user.company.name}</p>
            <p>Address: {data.user.address.street}, {data.user.address.city}, {data.user.address.zipcode}</p>
        </div>
    );
};

export default Profile;