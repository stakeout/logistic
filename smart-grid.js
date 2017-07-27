const smartgrid = require('smart-grid');
const settings = {
    outputStyle: 'styl',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1280px',
        fields: '30px'
    },
    breakPoints: {
        lg: {
            width: '1170px',
            fields: '30px'
        },
        md: {
            width: '992px',
            fields: '30px'
        },
        sm: {
            width: '720px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '10px'
        },
        xxs: {
            width: '440px',
            fields: '10px'
        }
    },
    oldSizeStyle: false,
    properties: []
};
smartgrid('./markup/static/stylus/libraries', settings);
