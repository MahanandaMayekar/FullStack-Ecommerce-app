import { CrudRepository } from './CrudRepository.js';
import { User } from '../schema/UserSchema.js';

export const UserRepository = {
    ...CrudRepository(User),
    getByEmail: async (email) => {
        const user = await User.findOne({ email })
        return user
    },
    registerUser: async (data) => {
        const newUser = new User(data)
        const updatedUser= await newUser.save()
        return updatedUser
    }

}