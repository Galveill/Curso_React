import React from "react";
import { Link, useParams } from "react-router-dom";
import { OrgContext } from "../provider/org-context";
import { orgRoutes, routes } from "../routes/routes";

interface MemberData {
    id: string;
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    bio: string;
}

const createDefault = (): MemberData => ({
    id: null,
    login: "",
    avatar_url: "",
    name: "",
    company: "",
    bio: ""
});

export const DetailContainer: React.FC = () => {
    const orgContext = React.useContext(OrgContext);
    const [member, setMember] = React.useState(createDefault);
    const { id } = useParams();

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
        .then((d) => d.json())
        .then(setMember);
    }, []);

    return (
        <>
            <h2>{member.name} de {orgContext.org}</h2>
            <div id="dataMember">
                <img src={member.avatar_url} />
                <div>
                    <p>Id: {member.id}</p>
                    <p>Login: {member.login}</p>
                    <p>name: {member.name}</p>
                    <p>company: {member.company}</p>
                    <p>bio: {member.bio}</p>
                </div>
            </div>
            <nav><Link to={orgRoutes.root}>Volver</Link></nav>
        </>
    );
}