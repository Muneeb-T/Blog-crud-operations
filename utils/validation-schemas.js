import Joi from 'joi';

const schemas = {
    blog: Joi.object().keys({
        title: Joi.string().min(8).required().label('Title'),
        text: Joi.string().min(100).required().label('Text')
    }),
};

export default schemas;