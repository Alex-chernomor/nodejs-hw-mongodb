import mongoose from 'mongoose';
import createHttpError from 'http-errors';

export function validateObjectId(paramName = 'contactId') {
  return function (req, res, next) {
    const id = req.params[paramName];

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new createHttpError.BadRequest(`Invalid ${paramName}: ${id}`));
    }

    next();
  };
}