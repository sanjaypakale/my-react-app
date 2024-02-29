// SwaggerEditorComponent.jsx
import React, { useEffect } from 'react';
import 'swagger-editor/dist/swagger-editor.css';
// import 'swagger-editor/swagger-editor-standalone.css';
import SwaggerEditor from 'swagger-editor';

const SwaggerEditorComponent = () => {
  useEffect(() => {
    const container = document.getElementById('swagger-editor-container');
    const editor = SwaggerEditor({ dom_id: '#swagger-editor-container' });

    return () => {
      // Cleanup when the component unmounts
      // editor.destroy();
    };
  }, []);

  return <div id="swagger-editor-container" />;
};

export default SwaggerEditorComponent;
