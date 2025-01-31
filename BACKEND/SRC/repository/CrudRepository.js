export const CrudRepository = (model) => {
    return {
        create: async (data) => {
            const createdData = await model.create(data)
            return createdData
        },
        findAll: async () => {
            const allDocs = await model.find()
            return allDocs
        },
        findById: async (id) => {
            const doc = await model.findById(id)
            return doc
        },
        deleteById: async function (id) {
            const response = await model.findByIdAndDelete(id);
            return response;
        },
        update: async function (id, data) {
            const updatedDoc = await model.findByIdAndUpdate(id, data, {
                new: true
            });
            return updatedDoc;
        },
    }

}