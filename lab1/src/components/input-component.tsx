import React from 'react';
import { OrgContext } from '../provider/org-context';

interface Props {
    change: (letter: string) => void;
}

export const InputField: React.FC<Props> = (props: Props) => {
    const orgContext = React.useContext(OrgContext);
    const [organization, setOrganization] = React.useState(orgContext.org);

    return (
        <>
            <div className="formgroup">
                <label htmlFor="orgIn">Organización: </label>
                <input type="text"
                    id="orgIn"
                    value={organization}
                    onChange={(e) => {setOrganization(e.target.value)}}
                />
                <button onClick={() => {props.change(organization)}}>Buscar</button>
            </div>
        </>
    );
};