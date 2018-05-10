const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1170px',
        fields: '15px'
    },
    breakPoints: {
        md: {
            width: '992px',
            fields: '15px'
        },
        sm: {
            width: '720px',
            fields: '15px'
        },
        xl: {
            width: '576px',
            fields: '15px'
        },
        xs: {
            width: '480px',
            fields: '15px'
        },
        xxs: {
            width: '320px',
            fields: '15px'
        }
    },
    oldSizeStyle: false,
    properties: []
};
smartgrid('./markup/static/stylus/libraries', settings);
