import { addProductRequest } from '@/api/product'
import { useMutation } from '@tanstack/react-query'


const useAddProduct = () => {
    const { mutateAsync: addProductMutation, // Renamed for clarity
        isLoading,
        isSuccess,
        error, } = useMutation({
            mutationFn: ({ token, formData }) => addProductRequest({ token, formData }),
            onSuccess: (data) => {
                console.log("successfully added product", data);

            },
            onError: (error) => {
                console.log("error in adding product", error.message);

            }
        })
    return {
        addProductMutation,
        isLoading,
        isSuccess,
        error
    }
}

export default useAddProduct
