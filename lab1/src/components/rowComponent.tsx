import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

type MemberEntity = {
    avatar_url: string;
    id: string;
    login: string;
}

interface Props {
    member: MemberEntity;
}

export const MemberRow: React.FC<Props> = ({member}) => {
    return (
        <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.details(member.login)}>
                        {member.login}
            </Link>
        </>
    );
};