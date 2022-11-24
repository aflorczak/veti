import app from './app.js';

app.set('NODE_ENV', process.env.NODE_ENV || 'PRODUCTION');
app.set('PORT', process.env.PORT || 80);

const server = app.listen(app.get('PORT'), () => {
    console.log(`
    Running:
    ========================
    NODE_ENV: ${app.get('NODE_ENV')}
    PORT: ${app.get('PORT')}
    ========================
    `);
});