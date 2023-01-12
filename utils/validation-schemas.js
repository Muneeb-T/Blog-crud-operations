import Joi from 'joi';

const schemas = {
    postBlog: Joi.object().keys({
        title: Joi.string().min(8).required().label('Title'),
        body: Joi.string().min(100).required().label('Text')
    })
};

export default schemas;