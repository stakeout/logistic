const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '20px'
    },
    breakPoints: {
        md: {
            width: '992px',
            fields: '20px'
        },
        sm: {
            width: '720px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '15px'
        },
        xxs: {
            width: '420px',
            fields: '15px'
        }
    },
    oldSizeStyle: false,
    properties: []
};
smartgrid('./markup/static/stylus/libraries', settings);
