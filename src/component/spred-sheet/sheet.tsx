
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
export default class Sheet extends React.Component {
    render() {
        return (
        <SpreadsheetComponent
         allowOpen={true} 
        openUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open'
        saveUrl='https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'
        height= "690px"
         />
         );
    }
}

