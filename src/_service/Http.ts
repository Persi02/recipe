import axios from 'axios'

// TODO:axios interceptor

interface Idata {
    username?: string,
    email?: string,
    password?: string,
}
interface IdataProfile {
    file?: File,
    useId?: string

}


class Http {
    static async get(url: string) {
        try {
            const res = await axios.get(url);
            return res;
        } catch (error: any) {
            throw Error(`${error.message}`);
        }
    };
    static async post(url: string, data: Idata) {
        try {
            const res = await axios.post(url, data);
            return res;
        } catch (error: any) {
            throw Error(`${error.message}`);
        }
    };

    static async put() {

    };
    static delet() { };
}
export default Http;