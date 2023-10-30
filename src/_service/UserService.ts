import Http from "./Http";

interface Idata {
    username?: string,
    email?: string,
    password?: string

}


class UserService extends Http {
    static async getUser(url: string) {
        try {
            const res = await this.get(url)
            return res;

        } catch (error: any) {
            throw Error(`${error.message}`);
        }
    }

    static async postUser(url: string, data: Idata) {
        try {
            const res = await this.post(url, data)
            return res;
        } catch (error: any) {
            throw Error(`${error.message}`);
        }

    }

}

export default UserService;