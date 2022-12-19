import {FC, ReactNode} from "react";

export type layoutProps = {
    children: ReactNode,
};
const Layout: FC<layoutProps> = ({children}) => {
    return (
        <div>

            {children}
        </div>
    )
};

export default Layout;
