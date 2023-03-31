import { Metric } from 'web-vitals';

function reportHandler(metric: Metric) {
    if(process.env.REACT_APP_RUN_ANALYTICS === 'true') {
        console.log(metric);
    }
}

export default reportHandler;