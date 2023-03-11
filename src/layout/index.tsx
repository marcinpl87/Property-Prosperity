import { PropsWithChildren } from 'react';
import { MenuItemType } from './sidebar/types';

type SidebarProps = {
    menu: MenuItemType[];
}

type LayoutProps = {
    sidebar: React.FC<SidebarProps>;
    menu: MenuItemType[];
}

export default ({
    sidebar,
    menu,
    children
}: PropsWithChildren<LayoutProps>): JSX.Element => {
    const SidebarComponent: React.FC<SidebarProps> = sidebar;
    return (
        <div className="container pt-5" data-testid="layout-container">
            <div className="row">
                <div className="col-sm-4 mb-4">
                    <SidebarComponent menu={menu} />
                </div>
                <main className="col-sm-8 pt-15 pb-10 g-0">
                    {children}
                </main>
            </div>
        </div>
    );
};
