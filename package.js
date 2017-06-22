Package.describe({
    name: 'steedos:fullcalendar',
    summary: "Full-sized drag & drop event calendar (jQuery plugin)",
    version: "3.4.0",
    git: "https://github.com/steedos/fullcalendar/tree/fix-zoom"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.use([
        'momentjs:moment@2.8.4',
        'templating'
    ], 'client');
    api.addFiles([
        'dist/fullcalendar.js',
        'dist/fullcalendar.css',
        'dist/locale-all.js',
        'dist/gcal.js',
        'template.html',
        'template.js'
    ], 'client');
});
