import React, {FC, ReactNode} from 'react';
import Paper from '@material-ui/core/Paper';
import './paperComponent.scss';

import {handleStyleClasses} from '../../helpers';


type Iprops = {
    children: ReactNode
    classes?: string
}

export const CustomPaper:FC<Iprops> = ({children, classes}) => {


    return (
        <Paper className={handleStyleClasses("paper", classes)}>
            {children}
        </Paper>
    )
}

export default CustomPaper