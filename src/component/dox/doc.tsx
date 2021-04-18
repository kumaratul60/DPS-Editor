import * as React from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
DocumentEditorContainerComponent.Inject(Toolbar);
export default class Doc extends React.Component {
  render() {
    return (
      <DocumentEditorContainerComponent
        id="container"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
       height= "690px"
        enableToolbar={true}
      />
    );
  }
}

