import React from 'react';
import Icon from './icon';

export default ({
    isActive,
    icon,
    anchor,
    href
}: {
    isActive?: boolean,
    icon: React.FC,
    anchor: string,
    href: string,
}): JSX.Element => {
    return (
        <li className="navi-item">
            <a
                className={`
                    navi-link
                    ${(isActive) && 'active'}
                `}
                href={`#${href}`}
            >
                <span className="navi-icon">
                    <Icon component={icon} />
                </span>
                <span className="navi-text font-size-lg">
                    {anchor}
                </span>
            </a>
        </li>
    );
};
