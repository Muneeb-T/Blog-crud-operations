import Joi from 'joi';

const schemas = {
    postBlog: Joi.object().keys({
        title: Joi.string().min(8).required().label('Title'),
        body: Joi.string().min(100).required().label('Text'),
    }),
    updateBlog: Joi.object().keys({
        title: Joi.string().min(8).label('Title'),
        body: Joi.string().min(100).label('Text'),
    }),
};

export default schemas;
