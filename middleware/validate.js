const yup = require('yup');


async function validate(req, res,next){
    try{
        const schema = yup.object().shape({
            username : yup.string().matches(/^[A-Z]/, "username doit etre majuscule").required(),
            email : yup.string().email().matches(/^[a-zA-Z0-9._%+-]+@esprit\.tn$/, "L'email doit se terminer par @esprit.tn").required(),
            cin : yup.number().required()
        });
        await schema.validate(req.body);
        next();
    }catch(err){
        res.status(400).json(err)
    }
}

module.exports = validate;