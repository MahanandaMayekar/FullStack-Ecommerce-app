import { CrudRepository } from './CrudRepository';
import { User } from '../schema/UserSchema';

export const UserRepository = {
    ...CrudRepository(User),
    getByEmail: async (email) => {
        const user = await User.findOne({ email })
        return user
    },
    registerUser: async (data) => {
        newUser = new User(data)
        await newUser.save()
        return newUser
    }

}