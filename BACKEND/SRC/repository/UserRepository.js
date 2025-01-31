import { CrudRepository } from './CrudRepository';
import { User } from '../schema/UserSchema';

export const UserRepository = {
    ...CrudRepository(User),
    getByEmail: async (email) => {
        const user = await User.findOne({ email })
        return user
    }

}