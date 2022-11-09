import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:3000"

// get request
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
        )
        return todos
    } catch (error) {
        // @ts-ignore
        throw new Error(error)
    }
}


// post request
export const addTodo = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, "_id"> = {
            name: formData.name,
            description: formData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-todo",
            todo
        )
        return saveTodo
    } catch (error) {
        // @ts-ignore
        throw new Error(error)
    }
}


// put request
export const updateTodo = async (todo: ITodo): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, "status"> = {
            status: true,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/edit-todo/${todo._id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
        // @ts-ignore
        throw new Error(error)
    }
}


// delete request
export const deleteTodo = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-todo/${_id}`
        )
        return deletedTodo
    } catch (error) {
        // @ts-ignore
        throw new Error(error)
    }
}