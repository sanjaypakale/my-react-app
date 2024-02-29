
import React, { useEffect, useRef} from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

import SwaggerEditor from 'swagger-editor'

const SwaggerDocs = ()=>{
    return <SwaggerUI url="http://localhost:3000/swagger.json" />;
}


export default SwaggerDocs;