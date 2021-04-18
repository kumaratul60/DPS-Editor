import * as React from "react";
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    Annotation,
    TextSearch,
    Inject,
} from "@syncfusion/ej2-react-pdfviewer";
export default class Pdf extends React.Component {
    render() {
        return (
            <div>
                <div className="control-section">
                    <PdfViewerComponent
                        id="container"
                        documentPath=""
                        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
                        height= "690px"
                    >
                        <Inject
                            services={[
                                Toolbar,
                                Magnification,
                                Navigation,
                                Annotation,
                                LinkAnnotation,
                                BookmarkView,
                                ThumbnailView,
                                Print,
                                TextSelection,
                                TextSearch,
                            ]}
                        />
                    </PdfViewerComponent>
                </div>
            </div>
        );
    }
}

