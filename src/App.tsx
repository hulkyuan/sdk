import React from 'react';
import { DocumentCompare } from 'kts-component-document';

export default () => {
    return (
        <div>
            <DocumentCompare 
                targetDocUuid='58018b85-c7b8-4ebf-b2d0-86bafba7eb23'
                targetDocumentType='Invoice'
                targetLineID='862905464210325504'
            />
        </div>
    );
}