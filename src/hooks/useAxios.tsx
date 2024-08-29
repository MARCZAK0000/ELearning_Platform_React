import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { useReducer } from "react"


type State = |{success: boolean, error: null, errorCode: undefined} 
    | {success: boolean, error: never, errorCode: number|undefined}
    | {success: boolean, error: null, errorCode: undefined }

type Action = 
    |{type: "loading"}
    |{type: "success"}
    |{type: "error", errorCode: number|undefined, error: never}

type AxiosRequest<T> = { 
    put: (url: string, method: RequestInit, config: AxiosRequestConfig)=>Promise<AxiosResponse<T, any>>
    post:(url: string, method: RequestInit, config: AxiosRequestConfig) =>Promise<AxiosResponse<T, any>>
    get:(url: string, method:AxiosRequestConfig)=>Promise<AxiosResponse<T, any>>
    state: State
} 


const InitState = {
    error: null, 
    errorCode: undefined,
    success: false
}

const reducer = (state: State, action: Action,) => {
    switch (action.type) {
        case "loading":
            return({error: null, success: false, errorCode: undefined})
        
        case "success":
            return({error: null, success: true, errorCode: undefined})

        case "error": 
            return({success: false, error: action.error, errorCode: action.errorCode})
        default:
            throw new Error("Unexpected")
    }
}




export function useAxios<T>(): AxiosRequest<T>{
    // const [error, setError] = useState<boolean>(false)
    // const [errorCode, setErrorCode] = useState<number|undefined>(0)
    // const [success, setSuccess] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, InitState)

    

    const put = async(url: string, method: RequestInit, config: AxiosRequestConfig)
        : Promise<any> =>{
        const body = method.body
        try {
            dispatch({type: "loading"})
            const response = await axios.put<T>(url, body ,config)
            if(response.status!=200 && response.status!=201){
                throw new Error("Something went wrong")
            }
            dispatch({type: "success"})
            return response 
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.error(error.message)
                dispatch({type: "error", error: error as never, errorCode: error.status})
            }
        }
    }

    const post = async(url: string, method: RequestInit, config: AxiosRequestConfig)
        : Promise<any> =>{
        const body = method.body
        try {
            dispatch({type: "loading"})
            const response = await axios.post<T>(url, body, config)
            if(response.status!=200 && response.status!=201){
                throw new Error("Something went wrong")
            }
            dispatch({type: "success"})
            return response 
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.error(error.message)
                dispatch({type: "error", error: error as never, errorCode: error.status})
            }
        }
    }

    const get = async(url: string, method: AxiosRequestConfig)
        : Promise<any> =>{
        try {
            dispatch({type: "loading"})
            const response = await axios.get<T>(url, method )
            if(response.status!=200 && response.status!=201){
                throw new Error("Something went wrong")
            }
            dispatch({type: "success"})
            return response
        } catch (error) {
        
            if(axios.isAxiosError(error)){
                console.error(error.message)
                dispatch({type: "error", error: error as never, errorCode: error.status})
            }
        }
    }

    return { state, put, post, get}
}