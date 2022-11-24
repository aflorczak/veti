import express from 'express';
const router = express.Router();

router.get('/:slug', (req,res) => {
    const slug = req.params['slug'];
    res.render('pages/website/views/index', {
        msg: `Strona weterynarza ${slug}`,
        title: `Strona weterynarza ${slug}`
    });
});

export default router;