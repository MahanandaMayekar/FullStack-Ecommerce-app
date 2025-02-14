import { createContext, useEffect ,useState} from 'react'


const authContext = createContext()

export const authContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token:null,
    })

    useEffect(() => {
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        if (user && token) {
            setAuth({
                user: JSON.parse(user),
                token:token
            })
        }
        else {
             setAuth({
               user: null,
               token: null,
             });
            
        }
        
    },[])
    return (
        <authContext.Provider value={{auth,setAuth}}>
            {children}
        </authContext.Provider>
    )
    
}
export default authContext