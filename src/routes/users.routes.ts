import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UploadUserAvatarController } from '../modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController';
import { UploadUserAvatarUseCase } from '../modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarUseCase';

import multer from 'multer';
import uploadConfig from '../config/upload';
import { FindUserByTokenController } from '../modules/accounts/useCases/FindUserByToken/FindUserByTokenController';
import { UploadUserController } from '../modules/accounts/useCases/uploadUser/UploadUserController';

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();
const uploadUserController = new UploadUserController();

const findUserByTokenController = new FindUserByTokenController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.use(ensureAuthenticated);

usersRoutes.put('/', uploadUserController.handle);

usersRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  uploadUserAvatarController.handle
);

usersRoutes.get('/userByToken', findUserByTokenController.handle);

export { usersRoutes };
