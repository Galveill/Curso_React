import React from "react";
import { Link } from "react-router-dom";
import { InputField } from "../components/input-component";
import { MemberRow } from "../components/rowComponent";
import { OrgContext } from "../provider/org-context";
import { orgRoutes, routes } from "../routes/routes";

interface MemberData {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListContainer: React.FC = () => {
    const orgContext = React.useContext(OrgContext);
    const [members, setMembers] = React.useState<MemberData[]>([]);

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/${orgContext.org}/members`)
        .then((d) => d.json())
        .then(setMembers);
    }, [orgContext.org]);
    
    return (
        <>
            <h2>Miembros de {orgContext.org}</h2>
            <InputField change={(val) => {
                    orgContext.setOrg(val);
			}}/>
            
            <div className="orgList">
                <span>Avatar</span>
                <span>Id</span>
                <span>Name</span>
                {members.map((m) => (
                    <MemberRow key={m.id} member={m}/>
                ))}
            </div>
        </>
    );
}